"""Build static TTFs for the OG card renderer.

The site loads Space Grotesk and JetBrains Mono as *variable* woff2 via
Fontsource. The renderer in generate.mjs goes through sharp -> librsvg ->
pango, which can only match a font by family name plus the weight recorded
in OS/2 -- it cannot set a variable axis. Two things therefore have to
happen before a glyph can be drawn:

  1. Instance each variable font down to a single static weight.
  2. Fix the name table. Space Grotesk's variable default instance is Light,
     so its nameID 1 reads "Space Grotesk Light"; a request for the family
     "Space Grotesk" silently matches nothing and the text falls back to
     another font. This is quiet -- you get a rendered image with the wrong
     typeface rather than an error -- so it is worth knowing about.

Because two static weights of JetBrains Mono would otherwise collide on one
family name, Medium is given its own family.

Output lands in .fonts/ next to this file, which is gitignored: it is
derived from node_modules and is rebuilt on demand.

Run via scripts/og/README.md -- needs uv, no project dependency.
"""

from pathlib import Path

from fontTools.ttLib import TTFont

HERE = Path(__file__).parent
REPO = HERE.parent.parent
MODULES = REPO / "node_modules" / "@fontsource-variable"
OUT = HERE / ".fonts"

# source woff2 -> (output stem, family, style, wght axis / OS2 weight)
JOBS = [
    (
        MODULES / "space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
        "SpaceGrotesk-Bold",
        "Space Grotesk",
        "Bold",
        700,
    ),
    (
        MODULES / "jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
        "JetBrainsMono-Regular",
        "JetBrains Mono",
        "Regular",
        400,
    ),
    (
        MODULES / "jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
        "JetBrainsMono-Medium",
        "JetBrains Mono Medium",
        "Regular",
        500,
    ),
]


def main() -> None:
    missing = [str(src) for src, *_ in JOBS if not src.exists()]
    if missing:
        raise SystemExit(
            "Fontsource files not found -- run `npm install` first:\n  "
            + "\n  ".join(sorted(set(missing)))
        )

    OUT.mkdir(exist_ok=True)

    for src, stem, family, style, weight in JOBS:
        # fontTools reads woff2 directly when brotli is available, but it
        # also remembers the flavor and would write woff2 straight back out
        # under a .ttf name. fontconfig cannot read that, and the failure is
        # silent -- every glyph quietly falls back. Clear the flavor so save()
        # emits a real TTF.
        font = TTFont(src)
        font.flavor = None

        from fontTools.varLib import instancer

        instancer.instantiateVariableFont(font, {"wght": weight}, inplace=True)

        name = font["name"]
        full = family if style == "Regular" else f"{family} {style}"
        postscript = full.replace(" ", "")

        # Drop typographic names (16/17) so nothing overrides 1/2.
        name.names = [r for r in name.names if r.nameID not in (16, 17)]
        for plat_id, enc_id, lang_id in ((3, 1, 0x409), (1, 0, 0)):
            name.setName(family, 1, plat_id, enc_id, lang_id)
            name.setName(style, 2, plat_id, enc_id, lang_id)
            name.setName(full, 4, plat_id, enc_id, lang_id)
            name.setName(postscript, 6, plat_id, enc_id, lang_id)

        font["OS/2"].usWeightClass = weight
        font["head"].macStyle = 1 if style == "Bold" else 0

        dest = OUT / f"{stem}.ttf"
        font.save(dest)
        print(f"  {dest.name:<26} family={family!r} style={style!r} weight={weight}")


if __name__ == "__main__":
    main()
