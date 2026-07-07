// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Root GitHub Pages user site → served at https://aaloraini.github.io
export default defineConfig({
  site: 'https://aaloraini.github.io',
  integrations: [sitemap()],
});
