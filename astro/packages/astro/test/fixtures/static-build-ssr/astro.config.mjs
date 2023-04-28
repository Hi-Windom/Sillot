import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';

export default defineConfig({
	adapter: nodejs({ mode: 'middleware' }),
	output: 'server',
});
