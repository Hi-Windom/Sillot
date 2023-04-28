import { defineConfig } from 'astro/config';
import { netlifyEdgeFunctions } from '@astrojs/netlify';
import react from "@astrojs/react";

// test env var
process.env.SECRET_STUFF = 'secret'

export default defineConfig({
	adapter: netlifyEdgeFunctions({
		dist: new URL('./dist/', import.meta.url),
	}),
	integrations: [react()],
	output: 'server',
})
