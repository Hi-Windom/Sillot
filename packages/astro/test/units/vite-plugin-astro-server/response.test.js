import * as assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createContainer } from '../../../dist/core/dev/container.js';
import testAdapter from '../../test-adapter.js';
import {
	createBasicSettings,
	createFs,
	createRequestAndResponse,
	defaultLogger,
} from '../test-utils.js';

const root = new URL('../../fixtures/api-routes/', import.meta.url);
const fileSystem = {
	'/src/pages/index.js': `export const GET = () => {
		const headers = new Headers();
		headers.append('x-single', 'single');
		headers.append('x-triple', 'one');
		headers.append('x-triple', 'two');
		headers.append('x-triple', 'three');
		headers.append('Set-cookie', 'hello');
		headers.append('Set-Cookie', 'world');
		return new Response(null, { headers });
	}`,
	'/src/pages/streaming.js': `export const GET = ({ locals }) => {
		let sentChunks = 0;
		
		const readableStream = new ReadableStream({
			async pull(controller) {
				if (sentChunks === 3) return controller.close();
				else sentChunks++;
	
				await new Promise(resolve => setTimeout(resolve, 1000));
				controller.enqueue(new TextEncoder().encode('hello'));
			},
			cancel() {
				locals.cancelledByTheServer = true;
			}
		});
	
		return new Response(readableStream, {
			headers: {
				"Content-Type": "text/event-stream"
			}
		})
	}`,
};

describe('endpoints', () => {
	let container;
	let settings;

	before(async () => {
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

	it('Headers with multiple values (set-cookie special case)', async () => {
		const { req, res, done } = createRequestAndResponse({
			method: 'GET',
			url: '/',
		});
		container.handle(req, res);
		await done;
		const headers = res.getHeaders();
		assert.deepEqual(headers, {
			'access-control-allow-origin': '*',
			'x-single': 'single',
			'x-triple': 'one, two, three',
			'set-cookie': ['hello', 'world'],
		});
	});

	it('Can bail on streaming', async () => {
		const { req, res, done } = createRequestAndResponse({
			method: 'GET',
			url: '/streaming',
		});

		const locals = { cancelledByTheServer: false };
		req[Symbol.for('astro.locals')] = locals;

		container.handle(req, res);

		await new Promise((resolve) => setTimeout(resolve, 500));
		res.emit('close');

		await done;

		assert.equal(locals.cancelledByTheServer, true);
	});
});
