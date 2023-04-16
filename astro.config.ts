import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import addClasses from './addClasses';
// https://astro.build/config
export default defineConfig({
  site: 'https://hamidd.dev',
  integrations: [sitemap(), UnoCSS()],
  markdown: {
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'H1',
          h2: 'H2',
          h3: 'H3',
          h4: 'H4',
          code: 'bg-gray2 px-2 py-1 rd-md c-gray11',
        },
      ],
    ],
  },
});
