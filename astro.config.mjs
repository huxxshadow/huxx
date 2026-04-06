import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://huxxshadow.github.io',
  base: '/huxx',

  vite: {
    plugins: [tailwindcss()],
  },
});