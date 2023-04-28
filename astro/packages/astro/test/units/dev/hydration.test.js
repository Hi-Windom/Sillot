import { expect } from 'chai';

import { runInContainer } from '../../../dist/core/dev/index.js';
import { createFs, createRequestAndResponse } from '../test-utils.js';
import svelte from '../../../../integrations/svelte/dist/index.js';
import { defaultLogging } from '../../test-utils.js';

const root = new URL('../../fixtures/alias/', import.meta.url);

describe('dev container', () => {
	it('should not crash when reassigning a hydrated component', async () => {
		const fs = createFs(
			{
				'/src/pages/index.astro': `
				---
				import Svelte from '../components/Client.svelte';
				const Foo = Svelte;
				const Bar = Svelte;
				---
				<html>
					<head><title>testing</title></head>
					<body>
						<Foo client:load />
						<Bar client:load />
					</body>
				</html>
			`,
			},
			root
		);

		await runInContainer(
			{
				fs,
				root,
				logging: {
					...defaultLogging,
					// Error is expected in this test
					level: 'silent',
				},
				userConfig: {
					integrations: [svelte()],
				},
			},
			async (container) => {
				const { req, res, done } = createRequestAndResponse({
					method: 'GET',
					url: '/',
				});
				container.handle(req, res);
				const html = await done;
				expect(res.statusCode).to.equal(
					200,
					"We get a 200 because the error occurs in the template, but we didn't crash!"
				);
			}
		);
	});
});
