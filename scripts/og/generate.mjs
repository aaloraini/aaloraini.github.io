/**
 * Renders public/og.png, the 1200x630 Open Graph card.
 *
 * The card is drawn as an SVG and rasterised with sharp, using the static
 * TTFs that prepare-fonts.py builds from the site's Fontsource packages.
 * See README.md in this folder for how to run it.
 *
 * Keep the copy and tokens below in step with src/styles/global.css and the
 * hero: this image is what every link preview shows, and it goes stale
 * silently.
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..', '..');
const FONT_DIR = join(HERE, '.fonts');
const OUT = process.argv[2] ?? join(REPO, 'public', 'og.png');

if (!existsSync(join(FONT_DIR, 'SpaceGrotesk-Bold.ttf'))) {
  console.error(
    'Missing static fonts. Run the prepare-fonts step first -- see scripts/og/README.md.'
  );
  process.exit(1);
}

/* Point fontconfig at the generated fonts. Written at run time so no
   absolute path from one machine ends up committed. */
const cacheDir = join(FONT_DIR, '.cache');
mkdirSync(cacheDir, { recursive: true });
const conf = join(FONT_DIR, 'fonts.conf');
writeFileSync(
  conf,
  `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${FONT_DIR.replace(/\\/g, '/')}</dir>
  <cachedir>${cacheDir.replace(/\\/g, '/')}</cachedir>
</fontconfig>
`
);

/* FONTCONFIG_FILE has to be in the environment before this process starts.
   Assigning process.env here is not enough: libvips reads the variable
   through the C runtime when sharp loads, and on Windows that runtime keeps
   its own copy of the environment taken at process start, so a later
   assignment is invisible to it. Re-exec once with the variable set, then
   load sharp in the child.

   Getting this wrong fails silently -- fontconfig substitutes a system font
   and the script still writes a clean PNG in the wrong typeface. The
   assertion further down is what turns that into an error. */
if (!process.env.OG_FONTCONFIG_READY) {
  const { status } = spawnSync(
    process.execPath,
    [fileURLToPath(import.meta.url), ...process.argv.slice(2)],
    {
      stdio: 'inherit',
      env: { ...process.env, FONTCONFIG_FILE: conf, OG_FONTCONFIG_READY: '1' },
    }
  );
  process.exit(status ?? 1);
}

const sharp = (await import('sharp')).default;

/**
 * Fail loudly if the display family did not actually load.
 *
 * A missed font match never raises here -- fontconfig just substitutes
 * something else, so a broken setup still produces a clean PNG in the wrong
 * typeface. Space Grotesk is proportional and the available fallback is
 * monospace, so rendering a run of narrow glyphs against a run of wide ones
 * and comparing their widths tells the two apart.
 */
async function assertDisplayFontLoaded() {
  const measure = async (ch) => {
    const probe = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="200">
      <rect width="1400" height="200" fill="#000"/>
      <text x="10" y="150" font-family="${DISPLAY}" font-size="120" font-weight="700" fill="#fff">${ch.repeat(10)}</text>
    </svg>`;
    const { info } = await sharp(Buffer.from(probe), { density: 72 })
      .trim()
      .toBuffer({ resolveWithObject: true });
    return info.width;
  };

  const [narrow, wide] = await Promise.all([measure('I'), measure('M')]);
  if (Math.abs(wide - narrow) < wide * 0.15) {
    throw new Error(
      `Font check failed: "${DISPLAY}" did not load -- 'I' and 'M' measured ` +
        `${narrow}px and ${wide}px, so a monospace fallback is in use.\n` +
        'Check that scripts/og/.fonts/ holds real TTFs (magic bytes 00 01 00 00,\n' +
        'not wOF2) and that FONTCONFIG_FILE is set before sharp is imported.'
    );
  }
}

/* ---------- design tokens: mirror of src/styles/global.css (dark) ---------- */
const BG = '#14191b';
const INK = '#e7e4da';
const ACCENT = '#7a9e73';
const SAND = '#cbb894';
const FAINT = '#878d7c';
const LINE = '#2a2f31';
const MARK = '#3f5c46';

/* Family names as prepare-fonts.py writes them. Medium is its own family
   because two static weights cannot share one family name here. */
const DISPLAY = 'Space Grotesk';
const MONO = 'JetBrains Mono';
const MONO_MED = 'JetBrains Mono Medium';

/* ---------- copy ---------- */
const COORDS = '· RIYADH 24.7136° N, 46.6753° E';
const LEAD_ACCENT = 'I lead products,';
const LEAD_REST = ' and build them.';
const STATS = '3,000+ VEHICLES · 1.8M+ SERVED · 3 APPS SHIPPED';
const DOMAIN = 'AALORAINI.COM';
const STATUS = 'STATUS: OPEN TO THE GULF & REMOTE';

const W = 1200;
const H = 630;
const M = 80;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${BG}"/>

  <!-- brand row -->
  <rect x="${M}" y="76" width="30" height="30" rx="6" fill="${MARK}"/>
  <text x="${M + 46}" y="98" font-family="${MONO_MED}" font-size="15"
        letter-spacing="2.6" fill="${INK}">ALORAINI*</text>
  <text x="${M + 166}" y="98" font-family="${MONO}" font-size="15"
        letter-spacing="2.6" fill="${FAINT}">${esc(COORDS)}</text>

  <!-- name: solid line over outlined line, as in the hero -->
  <text x="${M}" y="248" font-family="${DISPLAY}" font-size="104" font-weight="700"
        letter-spacing="-1" fill="${INK}">ABDULHAKIM</text>
  <text x="${M}" y="348" font-family="${DISPLAY}" font-size="104" font-weight="700"
        letter-spacing="-1" fill="none" stroke="${INK}" stroke-width="2">ALORAINI</text>

  <!-- Drawn twice rather than with a tspan: librsvg drops the display family
       on a text element that has element children, and overdrawing the
       accent-coloured prefix needs no width measurement to line up. -->
  <text x="${M}" y="430" font-family="${DISPLAY}" font-size="38" font-weight="700"
        letter-spacing="-0.4" fill="${INK}">${esc(LEAD_ACCENT + LEAD_REST)}</text>
  <text x="${M}" y="430" font-family="${DISPLAY}" font-size="38" font-weight="700"
        letter-spacing="-0.4" fill="${ACCENT}">${esc(LEAD_ACCENT)}</text>

  <line x1="${M}" y1="487" x2="${W - M}" y2="487" stroke="${LINE}" stroke-width="1"/>

  <text x="${M}" y="551" font-family="${MONO}" font-size="14"
        letter-spacing="2.2" fill="${SAND}">${esc(STATS)}</text>
  <text x="${W - M}" y="526" text-anchor="end" font-family="${MONO}" font-size="14"
        letter-spacing="2.2" fill="${FAINT}">${esc(DOMAIN)}</text>
  <text x="${W - M}" y="551" text-anchor="end" font-family="${MONO}" font-size="14"
        letter-spacing="2.2" fill="${FAINT}">${esc(STATUS)}</text>
</svg>`;

await assertDisplayFontLoaded();

/* density 72 keeps SVG user units 1:1 with output pixels; the resize is a
   belt-and-braces guarantee of the exact OG size. */
await sharp(Buffer.from(svg), { density: 72 })
  .resize(W, H, { fit: 'fill' })
  .png({ compressionLevel: 9 })
  .toFile(OUT);

const { width, height } = await sharp(OUT).metadata();
console.log(`  ${OUT}  ${width}x${height}  ${readFileSync(OUT).length} bytes`);
