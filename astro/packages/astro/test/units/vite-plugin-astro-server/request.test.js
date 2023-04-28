import { expect } from 'chai';

import { createDefaultDevSettings } from '../../../dist/core/config/index.js';
import { createLoader } from '../../../dist/core/module-loader/index.js';
import { createBasicEnvironment } from '../../../dist/core/render/index.js';
import { createRouteManifest } from '../../../dist/core/routing/index.js';
import { createComponent, render } from '../../../dist/runtime/server/index.js';
import { createController, handleRequest } from '../../../dist/vite-plugin-astro-server/index.js';
import { defaultLogging as logging } from '../../test-utils.js';
import { createAstroModule, createFs, createRequestAndResponse } from '../test-utils.js';

async function createDevEnvironment(overrides = {}) {
	const env = createBasicEnvironment({
		logging,
		renderers: [],
	});
	env.settings = await createDefaultDevSettings({}, '/');
	env.settings.renderers = [];
	env.loader = createLoader();
	Object.assign(env, overrides);
	return env;
}

describe('vite-plugin-astro-server', () => {
	describe('request', () => {
		it('renders a request', async () => {
			const env = await createDevEnvironment({
				loader: createLoader({
					import() {
						const Page = createComponent(() => {
							return render`<div id="test">testing</div>`;
						});
						return createAstroModule(Page);
					},
				}),
			});
			const controller = createController({ loader: env.loader });
			const { req, res, text } = createRequestAndResponse();
			const fs = createFs(
				{
					// Note that the content doesn't matter here because we are using a custom loader.
					'/src/pages/index.astro': '',
				},
				'/'
			);
			const manifest = createRouteManifest(
				{
					fsMod: fs,
					settings: env.settings,
				},
				logging
			);

			try {
				await handleRequest(env, manifest, controller, req, res);
			} catch (err) {
				expect(err.message).to.be.undefined();
			}

			const html = await text();
			expect(res.statusCode).to.equal(200);
			expect(html).to.include('<div id="test">');
		});
	});
});
