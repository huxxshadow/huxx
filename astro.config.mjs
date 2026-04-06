import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://huxxshadow.github.io',
  base: '/huxx',

  vite: {
    plugins: [tailwindcss()],
  },

  // 开启 i18n 支持
  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [sitemap({
    i18n: {
      defaultLocale: DEFAULT_LOCALE_SETTING,
      locales: Object.fromEntries(
          Object.entries(LOCALES_SETTING).map(
              ([key, value]) => [key, value.lang ?? key]
          )
      ),
    },
  })],

});