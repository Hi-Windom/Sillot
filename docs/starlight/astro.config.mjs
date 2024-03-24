import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '🦢 Sillot Docs',
			social: {
				github: 'https://github.com/Hi-Windom/Sillot',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
        {
					label: '汐洛宝典',
					autogenerate: { directory: '汐洛宝典' },
				},
			],
		}),
	],
});
