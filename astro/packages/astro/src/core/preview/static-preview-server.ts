import type http from 'http';
import { performance } from 'perf_hooks';
import enableDestroy from 'server-destroy';
import { fileURLToPath } from 'url';
import { preview, type PreviewServer as VitePreviewServer } from 'vite';
import type { AstroSettings } from '../../@types/astro';
import type { LogOptions } from '../logger/core';
import { error, info } from '../logger/core.js';
import * as msg from '../messages.js';
import { getResolvedHostForHttpServer } from './util.js';
import { vitePluginAstroPreview } from './vite-plugin-astro-preview.js';

export interface PreviewServer {
	host?: string;
	port: number;
	server: http.Server;
	closed(): Promise<void>;
	stop(): Promise<void>;
}

export default async function createStaticPreviewServer(
	settings: AstroSettings,
	logging: LogOptions
): Promise<PreviewServer> {
	const startServerTime = performance.now();

	let previewServer: VitePreviewServer;
	try {
		previewServer = await preview({
			configFile: false,
			base: settings.config.base,
			appType: 'mpa',
			build: {
				outDir: fileURLToPath(settings.config.outDir),
			},
			preview: {
				host: settings.config.server.host,
				port: settings.config.server.port,
				headers: settings.config.server.headers,
				open: settings.config.server.open,
			},
			plugins: [vitePluginAstroPreview(settings)],
		});
	} catch (err) {
		if (err instanceof Error) {
			error(logging, 'astro', err.stack || err.message);
		}
		throw err;
	}

	enableDestroy(previewServer.httpServer);

	// Log server start URLs
	info(
		logging,
		null,
		msg.serverStart({
			startupTime: performance.now() - startServerTime,
			resolvedUrls: previewServer.resolvedUrls,
			host: settings.config.server.host,
			base: settings.config.base,
		})
	);

	// Resolves once the server is closed
	function closed() {
		return new Promise<void>((resolve, reject) => {
			previewServer.httpServer.addListener('close', resolve);
			previewServer.httpServer.addListener('error', reject);
		});
	}

	return {
		host: getResolvedHostForHttpServer(settings.config.server.host),
		port: settings.config.server.port,
		closed,
		server: previewServer.httpServer,
		stop: async () => {
			await new Promise((resolve, reject) => {
				previewServer.httpServer.destroy((err) => (err ? reject(err) : resolve(undefined)));
			});
		},
	};
}
