import type * as http from 'node:http';
import type { AddressInfo } from 'node:net';
import type { AstroInlineConfig, AstroSettings } from '../../@types/astro.js';

import nodeFs from 'node:fs';
import * as vite from 'vite';
import { injectImageEndpoint } from '../../assets/endpoint/config.js';
import {
	runHookConfigDone,
	runHookConfigSetup,
	runHookServerDone,
	runHookServerStart,
} from '../../integrations/index.js';
import { createVite } from '../create-vite.js';
import type { Logger } from '../logger/core.js';
import { apply as applyPolyfill } from '../polyfill.js';

export interface Container {
	fs: typeof nodeFs;
	logger: Logger;
	settings: AstroSettings;
	viteServer: vite.ViteDevServer;
	inlineConfig: AstroInlineConfig;
	restartInFlight: boolean; // gross
	handle: (req: http.IncomingMessage, res: http.ServerResponse) => void;
	close: () => Promise<void>;
}

export interface CreateContainerParams {
	logger: Logger;
	settings: AstroSettings;
	inlineConfig?: AstroInlineConfig;
	isRestart?: boolean;
	fs?: typeof nodeFs;
}

export async function createContainer({
	isRestart = false,
	logger,
	inlineConfig,
	settings,
	fs = nodeFs,
}: CreateContainerParams): Promise<Container> {
	// Initialize
	applyPolyfill();
	settings = await runHookConfigSetup({
		settings,
		command: 'dev',
		logger: logger,
		isRestart,
	});

	settings = injectImageEndpoint(settings, 'dev');

	const {
		base,
		server: { host, headers, open: serverOpen },
	} = settings.config;
	// Open server to the correct path. We pass the `base` here as we didn't pass the
	// base to the initial Vite config
	const open = typeof serverOpen == 'string' ? serverOpen : serverOpen ? base : false;

	// The client entrypoint for renderers. Since these are imported dynamically
	// we need to tell Vite to preoptimize them.
	const rendererClientEntries = settings.renderers
		.map((r) => r.clientEntrypoint)
		.filter(Boolean) as string[];

	const viteConfig = await createVite(
		{
			mode: 'development',
			server: { host, headers, open },
			optimizeDeps: {
				include: rendererClientEntries,
			},
		},
		{ settings, logger, mode: 'dev', command: 'dev', fs }
	);
	await runHookConfigDone({ settings, logger });
	const viteServer = await vite.createServer(viteConfig);

	const container: Container = {
		inlineConfig: inlineConfig ?? {},
		fs,
		logger,
		restartInFlight: false,
		settings,
		viteServer,
		handle(req, res) {
			viteServer.middlewares.handle(req, res, Function.prototype);
		},
		// TODO deprecate and remove
		close() {
			return closeContainer(container);
		},
	};

	return container;
}

async function closeContainer({ viteServer, settings, logger }: Container) {
	await viteServer.close();
	await runHookServerDone({
		config: settings.config,
		logger,
	});
}

export async function startContainer({
	settings,
	viteServer,
	logger,
}: Container): Promise<AddressInfo> {
	const { port } = settings.config.server;
	await viteServer.listen(port);
	const devServerAddressInfo = viteServer.httpServer!.address() as AddressInfo;
	await runHookServerStart({
		config: settings.config,
		address: devServerAddressInfo,
		logger,
	});

	return devServerAddressInfo;
}
