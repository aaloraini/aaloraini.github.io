# Open Graph card

Regenerates `public/og.png`, the 1200x630 image every link preview shows
(Twitter/X, LinkedIn, Slack, iMessage, WhatsApp).

```sh
npm run og
```

Then commit the changed `public/og.png`.

## When to re-run

Whenever something on the card stops being true. It drifts silently, because
nothing in the build validates it:

- the domain or status line
- the headline stats (`3,000+ VEHICLES · 1.8M+ SERVED · 3 APPS SHIPPED`)
- the mark or any design token in `src/styles/global.css`

Copy and colours live at the top of `generate.mjs`.

## How it works

1. `prepare-fonts.py` turns the site's **variable** woff2 fonts (from
   `node_modules/@fontsource-variable/...`) into **static** TTFs in
   `.fonts/`, which is gitignored.
2. `generate.mjs` draws the card as SVG and rasterises it with sharp.

Step 1 is not optional. sharp rasterises through librsvg and pango, which
match a font only by family name plus the weight in the `OS/2` table — they
cannot set a variable axis. Two traps follow:

- **A variable font renders at its default weight**, so Space Grotesk comes
  out Light where the design needs Bold. Hence instancing.
- **Space Grotesk's variable default instance is Light, so its name table
  reports the family as `Space Grotesk Light`.** Asking for `Space Grotesk`
  matches nothing, and the text silently falls back to another typeface —
  you get a perfectly valid PNG with the wrong font in it, and no warning.
  Hence the renaming.

For the same reason JetBrains Mono Medium is registered as its own family:
two static weights cannot share one family name through fontconfig here.

A third trap is ordering: `FONTCONFIG_FILE` must already be in the
environment when the process starts. Setting `process.env` in the script
does not work — libvips reads the variable through the C runtime as sharp
loads, and on Windows that runtime uses a copy of the environment taken at
process start. `generate.mjs` therefore re-execs itself once with the
variable set.

Every one of these fails the same way: a clean PNG in the wrong typeface,
no error. `generate.mjs` guards against it by measuring `I` against `M` in
the display family before rendering — equal widths mean a monospace
fallback is in use, and the script stops. If you change fonts, keep that
check honest.

## Requirements

- `npm install` (for the Fontsource packages and sharp)
- [`uv`](https://docs.astral.sh/uv/) on `PATH` — it fetches fonttools on
  demand, so there is no Python dependency in the repo

`npm run og` runs both steps.
