import { defineConfig } from 'astro/config';
import { rehypeReadingTime, remarkTitle, remarkDescription } from './src/markdown-plugins.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro.build/',
	markdown: {
		remarkPlugins: [remarkTitle, remarkDescription],
		rehypePlugins: [rehypeReadingTime],
	}
});
