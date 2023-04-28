import { polyfill } from '@astrojs/webapi';
import { execa } from 'execa';
import fastGlob from 'fast-glob';
import fs from 'fs';
import os from 'os';
import stripAnsi from 'strip-ansi';
import { fileURLToPath } from 'url';
import { sync } from '../dist/core/sync/index.js';
import build from '../dist/core/build/index.js';
import { openConfig } from '../dist/core/config/config.js';
import { createSettings } from '../dist/core/config/index.js';
import dev from '../dist/core/dev/index.js';
import { nodeLogDestination } from '../dist/core/logger/node.js';
import preview from '../dist/core/preview/index.js';
import { check } from '../dist/cli/check/index.js';

// polyfill WebAPIs to globalThis for Node v12, Node v14, and Node v16
polyfill(globalThis, {
	exclude: 'window document',
});

/**
 * @typedef {import('undici').Response} Response
 * @typedef {import('../src/core/dev/dev').DedvServer} DevServer
 * @typedef {import('../src/@types/astro').AstroConfig} AstroConfig
 * @typedef {import('../src/core/preview/index').PreviewServer} PreviewServer
 * @typedef {import('../src/core/app/index').App} App
 * @typedef {import('../src/cli/check/index').AstroChecker} AstroChecker
 * @typedef {import('../src/cli/check/index').CheckPayload} CheckPayload
 *
 *
 * @typedef {Object} Fixture
 * @property {typeof build} build
 * @property {(url: string) => string} resolveUrl
 * @property {(url: string, opts: Parameters<typeof fetch>[1]) => Promise<Response>} fetch
 * @property {(path: string) => Promise<string>} readFile
 * @property {(path: string, updater: (content: string) => string) => Promise<void>} writeFile
 * @property {(path: string) => Promise<string[]>} readdir
 * @property {(pattern: string) => Promise<string[]>} glob
 * @property {() => Promise<DevServer>} startDevServer
 * @property {() => Promise<PreviewServer>} preview
 * @property {() => Promise<void>} clean
 * @property {() => Promise<App>} loadTestAdapterApp
 * @property {() => Promise<void>} onNextChange
 * @property {(opts: CheckPayload) => Promise<AstroChecker>} check
 *
 * This function returns an instance of the Check
 *
 *
 * When used in a test suite:
 * ```js
 * let fixture = await loadFixture({
 *   root: './fixtures/astro-check-watch/',
 * });
 * ```
 * `opts` will override the options passed to the `AstroChecker`
 *
 * ```js
 * let { check, stop, watch } = fixture.check({
 *   flags: { watch: true },
 * });
 * ```
 */

/** @type {import('../src/core/logger/core').LogOptions} */
export const defaultLogging = {
	dest: nodeLogDestination,
	level: 'error',
};

/** @type {import('../src/core/logger/core').LogOptions} */
export const silentLogging = {
	dest: nodeLogDestination,
	level: 'silent',
};

/**
 * Load Astro fixture
 * @param {AstroConfig} inlineConfig Astro config partial (note: must specify `root`)
 * @returns {Promise<Fixture>} The fixture. Has the following properties:
 *   .config     - Returns the final config. Will be automatically passed to the methods below:
 *
 *   Build
 *   .build()          - Async. Builds into current folder (will erase previous build)
 *   .readFile(path)   - Async. Read a file from the build.
 *
 *   Dev
 *   .startDevServer() - Async. Starts a dev server at an available port. Be sure to call devServer.stop() before test exit.
 *   .fetch(url)       - Async. Returns a URL from the preview server (must have called .preview() before)
 *
 *   Preview
 *   .preview()        - Async. Starts a preview server. Note this can’t be running in same fixture as .dev() as they share ports. Also, you must call `server.close()` before test exit
 *
 *   Clean-up
 *   .clean()          - Async. Removes the project’s dist folder.
 */
export async function loadFixture(inlineConfig) {
	if (!inlineConfig || !inlineConfig.root)
		throw new Error("Must provide { root: './fixtures/...' }");

	// load config
	let cwd = inlineConfig.root;
	delete inlineConfig.root;
	if (typeof cwd === 'string') {
		try {
			cwd = new URL(cwd.replace(/\/?$/, '/'));
		} catch (err1) {
			cwd = new URL(cwd.replace(/\/?$/, '/'), import.meta.url);
		}
	}

	/** @type {import('../src/core/logger/core').LogOptions} */
	const logging = defaultLogging;

	// Load the config.
	let { astroConfig: config } = await openConfig({
		cwd: fileURLToPath(cwd),
		logging,
		cmd: 'dev',
	});
	config = merge(config, { ...inlineConfig, root: cwd });

	// HACK: the inline config doesn't run through config validation where these normalizations usually occur
	if (typeof inlineConfig.site === 'string') {
		config.site = new URL(inlineConfig.site);
	}
	if (inlineConfig.base && !inlineConfig.base.endsWith('/')) {
		config.base = inlineConfig.base + '/';
	}
	let settings = createSettings(config, fileURLToPath(cwd));
	if (config.integrations.find((integration) => integration.name === '@astrojs/mdx')) {
		// Enable default JSX integration. It needs to come first, so unshift rather than push!
		const { default: jsxRenderer } = await import('astro/jsx/renderer.js');
		settings.renderers.unshift(jsxRenderer);
	}

	/** @type {import('@astrojs/telemetry').AstroTelemetry} */
	const telemetry = {
		record() {
			return Promise.resolve();
		},
	};

	const resolveUrl = (url) =>
		`http://${config.server.host}:${config.server.port}${url.replace(/^\/?/, '/')}`;

	// A map of files that have been edited.
	let fileEdits = new Map();

	const resetAllFiles = () => {
		for (const [, reset] of fileEdits) {
			reset();
		}
		fileEdits.clear();
	};

	const onNextChange = () =>
		devServer
			? new Promise((resolve) => devServer.watcher.once('change', resolve))
			: Promise.reject(new Error('No dev server running'));

	// After each test, reset each of the edits to their original contents.
	if (typeof afterEach === 'function') {
		afterEach(resetAllFiles);
	}
	// Also do it on process exit, just in case.
	process.on('exit', resetAllFiles);

	let fixtureId = new Date().valueOf();
	let devServer;

	return {
		build: (opts = {}) => {
			process.env.NODE_ENV = 'production';
			return build(settings, { logging, telemetry, ...opts });
		},
		sync: (opts) => sync(settings, { logging, fs, ...opts }),
		check: async (opts) => {
			return await check(settings, { logging, ...opts });
		},
		startDevServer: async (opts = {}) => {
			process.env.NODE_ENV = 'development';
			devServer = await dev(settings, { logging, telemetry, ...opts });
			config.server.host = parseAddressToHost(devServer.address.address); // update host
			config.server.port = devServer.address.port; // update port
			return devServer;
		},
		config,
		resolveUrl,
		fetch: (url, init) => fetch(resolveUrl(url), init),
		preview: async (opts = {}) => {
			process.env.NODE_ENV = 'production';
			const previewServer = await preview(settings, {
				logging,
				telemetry,
				...opts,
			});
			config.server.host = parseAddressToHost(previewServer.host); // update host
			config.server.port = previewServer.port; // update port
			return previewServer;
		},
		pathExists: (p) => fs.existsSync(new URL(p.replace(/^\//, ''), config.outDir)),
		readFile: (filePath, encoding) =>
			fs.promises.readFile(
				new URL(filePath.replace(/^\//, ''), config.outDir),
				encoding === undefined ? 'utf8' : encoding
			),
		readdir: (fp) => fs.promises.readdir(new URL(fp.replace(/^\//, ''), config.outDir)),
		glob: (p) =>
			fastGlob(p, {
				cwd: fileURLToPath(config.outDir),
			}),
		clean: async () => {
			await fs.promises.rm(config.outDir, {
				maxRetries: 10,
				recursive: true,
				force: true,
			});
		},
		loadTestAdapterApp: async (streaming) => {
			const url = new URL(`./server/entry.mjs?id=${fixtureId}`, config.outDir);
			const { createApp, manifest } = await import(url);
			const app = createApp(streaming);
			app.manifest = manifest;
			return app;
		},
		editFile: async (filePath, newContentsOrCallback) => {
			const fileUrl = new URL(filePath.replace(/^\//, ''), config.root);
			const contents = await fs.promises.readFile(fileUrl, 'utf-8');
			const reset = () => {
				fs.writeFileSync(fileUrl, contents);
			};
			// Only save this reset if not already in the map, in case multiple edits happen
			// to the same file.
			if (!fileEdits.has(fileUrl.toString())) {
				fileEdits.set(fileUrl.toString(), reset);
			}
			const newContents =
				typeof newContentsOrCallback === 'function'
					? newContentsOrCallback(contents)
					: newContentsOrCallback;
			const nextChange = onNextChange();
			await fs.promises.writeFile(fileUrl, newContents);
			await nextChange;
			return reset;
		},
		resetAllFiles,
	};
}

/**
 * @param {string} [address]
 */
function parseAddressToHost(address) {
	if (address?.startsWith('::')) {
		return `[${address}]`;
	}
	return address;
}

/**
 * Basic object merge utility. Returns new copy of merged Object.
 * @param {Object} a
 * @param {Object} b
 * @returns {Object}
 */
function merge(a, b) {
	const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);
	const c = {};
	for (const k of allKeys) {
		const needsObjectMerge =
			typeof a[k] === 'object' &&
			typeof b[k] === 'object' &&
			(Object.keys(a[k]).length || Object.keys(b[k]).length) &&
			!Array.isArray(a[k]) &&
			!Array.isArray(b[k]);
		if (needsObjectMerge) {
			c[k] = merge(a[k] || {}, b[k] || {});
			continue;
		}
		c[k] = a[k];
		if (b[k] !== undefined) c[k] = b[k];
	}
	return c;
}

const cliPath = fileURLToPath(new URL('../astro.js', import.meta.url));

/** Returns a process running the Astro CLI. */
export function cli(/** @type {string[]} */ ...args) {
	const spawned = execa('node', [cliPath, ...args], {
		env: { ASTRO_TELEMETRY_DISABLED: true },
	});

	spawned.stdout.setEncoding('utf8');

	return spawned;
}

export async function parseCliDevStart(proc) {
	let stdout = '';
	let stderr = '';

	for await (const chunk of proc.stdout) {
		stdout += chunk;
		if (chunk.includes('Local')) break;
	}
	if (!stdout) {
		for await (const chunk of proc.stderr) {
			stderr += chunk;
			break;
		}
	}

	proc.kill();
	stdout = stripAnsi(stdout);
	stderr = stripAnsi(stderr);

	if (stderr) {
		throw new Error(stderr);
	}

	const messages = stdout
		.split('\n')
		.filter((ln) => !!ln.trim())
		.map((ln) => ln.replace(/[🚀┃]/g, '').replace(/\s+/g, ' ').trim());

	return { messages };
}

export async function cliServerLogSetup(flags = [], cmd = 'dev') {
	const proc = cli(cmd, ...flags);

	const { messages } = await parseCliDevStart(proc);

	const local = messages.find((msg) => msg.includes('Local'))?.replace(/Local\s*/g, '');
	const network = messages.find((msg) => msg.includes('Network'))?.replace(/Network\s*/g, '');

	return { local, network };
}

export const isLinux = os.platform() === 'linux';
export const isMacOS = os.platform() === 'darwin';
export const isWindows = os.platform() === 'win32';

export function fixLineEndings(str) {
	return str.replace(/\r\n/g, '\n');
}

export async function* streamAsyncIterator(stream) {
	const reader = stream.getReader();

	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) return;
			yield value;
		}
	} finally {
		reader.releaseLock();
	}
}
