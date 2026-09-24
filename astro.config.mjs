import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Repo name is SuperChanguito.github.io, so no `base` is needed.
// If you use a different repo name (e.g. "portfolio"), add: base: '/portfolio'
export default defineConfig({
  site: 'https://superchanguito.github.io',
  integrations: [sitemap()],
});
