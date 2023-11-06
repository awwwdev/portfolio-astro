import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import addClasses from './addClasses';
import mdx from "@astrojs/mdx";
import markdownIntegration from '@astropub/md'
// https://astro.build/config
export default defineConfig({
  site: 'https://hamidd.dev',
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS(),
    markdownIntegration(),

    ],
  markdown: {
    rehypePlugins: [[addClasses, {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      code: 'bg-indigoA-3 px-1.5 pt-0.5 rd c-indigoA-11 ',
      a: 'underline-blueA-11 ',
    }]]
  }
});
