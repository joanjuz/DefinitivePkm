import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://joanjuz.github.io',
  base: process.env.BASE_PATH ?? '/DefinitivePkm',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
