import { fileURLToPath } from 'node:url';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [
		tailwind({
			configFile: fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url)),
		}),
	],
});
