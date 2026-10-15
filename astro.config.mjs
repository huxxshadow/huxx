import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://huxx.me',
  base: '/',

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
  }), mdx({
    // 公式：$...$ / $$...$$ 在构建时由 KaTeX 渲染成静态 HTML；用到公式的 MDX 自己 import KaTeX 的 CSS
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  })],

});