import * as assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createContainer } from '../../../dist/core/dev/container.js';
import { createLoader } from '../../../dist/core/module-loader/index.js';
import { createRouteManifest } from '../../../dist/core/routing/index.js';
import { createComponent, render } from '../../../dist/runtime/server/index.js';
import { createController, handleRequest } from '../../../dist/vite-plugin-astro-server/index.js';
import { DevPipeline } from '../../../dist/vite-plugin-astro-server/pipeline.js';
import { createDevelopmentManifest } from '../../../dist/vite-plugin-astro-server/plugin.js';
import testAdapter from '../../test-adapter.js';
import {
	createAstroModule,
	createBasicSettings,
	createFs,
	createRequestAndResponse,
	defaultLogger,
} from '../test-utils.js';

async function createDevPipeline(overrides = {}) {
	const settings = overrides.settings ?? (await createBasicSettings({ root: '/' }));
	const loader = overrides.loader ?? createLoader();
	const manifest = createDevelopmentManifest(settings);

	return DevPipeline.create({ loader, logger: defaultLogger, manifest, settings });
}

describe('vite-plugin-astro-server', () => {
	describe('request', () => {
		it('renders a request', async () => {
			const pipeline = await createDevPipeline({
				loader: createLoader({
					import(id) {
						if (id === '\0astro-internal:middleware') {
							return { onRequest: (_, next) => next() };
						}
						const Page = createComponent(() => {
							return render`<div id="test">testing</div>`;
						});
						return createAstroModule(Page);
					},
				}),
			});
			const controller = createController({ loader: pipeline.loader });
			const { req, res, text } = createRequestAndResponse();
			const fs = createFs(
				{
					// Note that the content doesn't matter here because we are using a custom loader.
					'/src/pages/index.astro': '',
				},
				'/'
			);
			const manifestData = createRouteManifest(
				{
					fsMod: fs,
					settings: pipeline.settings,
				},
				defaultLogger
			);

			try {
				await handleRequest({
					pipeline,
					manifestData,
					controller,
					incomingRequest: req,
					incomingResponse: res,
					manifest: {},
				});
			} catch (err) {
				assert.equal(err.message, undefined);
			}

			const html = await text();
			assert.equal(res.statusCode, 200);
			assert.equal(html.includes('<div id="test">'), true);
		});
	});

	describe('url', () => {
		let container;
		let settings;

		before(async () => {
			const root = new URL('../../fixtures/api-routes/', import.meta.url);
			const fileSystem = {
				'/src/pages/url.astro': `{Astro.request.url}`,
				'/src/pages/prerendered.astro': `---
			export const prerender = true;
			---
			{Astro.request.url}`,
			};
			const fs = createFs(fileSystem, root);
			settings = await createBasicSettings({
				root: fileURLToPath(root),
				output: 'server',
				adapter: testAdapter(),
			});
			container = await createContainer({
				fs,
				settings,
				logger: defaultLogger,
			});
		});

		after(async () => {
			await container.close();
		});

		it('params are included', async () => {
			const { req, res, text } = createRequestAndResponse({
				method: 'GET',
				url: '/url?xyz=123',
			});
			container.handle(req, res);
			const html = await text();
			assert.deepEqual(html, '<!DOCTYPE html>http://undefined/url?xyz=123');
		});

		it('params are excluded on prerendered routes', async () => {
			const { req, res, text } = createRequestAndResponse({
				method: 'GET',
				url: '/prerendered?xyz=123',
			});
			container.handle(req, res);
			const html = await text();
			assert.deepEqual(html, '<!DOCTYPE html>http://undefined/prerendered');
		});
	});
});
