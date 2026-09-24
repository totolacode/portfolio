// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://takao-yoshida.vercel.app',
  // the pages are few and the menu is always in view, so fetch them as soon as their links show up
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
