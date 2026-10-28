// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages user site, served on the custom domain https://aaloraini.com
export default defineConfig({
  site: 'https://aaloraini.com',
  integrations: [sitemap()],
  // Astro 7 defaults to JSX-style whitespace stripping, which can drop
  // meaningful spaces between inline elements; keep the HTML-aware mode.
  compressHTML: true,
});
