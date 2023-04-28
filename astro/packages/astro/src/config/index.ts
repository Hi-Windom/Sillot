import type { UserConfig } from 'vite';
import type { AstroUserConfig } from '../@types/astro';
import type { LogOptions } from '../core/logger/core';

export function defineConfig(config: AstroUserConfig) {
	return config;
}

export function getViteConfig(inlineConfig: UserConfig) {
	// Return an async Vite config getter which exposes a resolved `mode` and `command`
	return async ({ mode, command }: { mode: string; command: 'serve' | 'build' }) => {
		// Vite `command` is `serve | build`, but Astro uses `dev | build`
		const cmd = command === 'serve' ? 'dev' : command;

		// Use dynamic import to avoid pulling in deps unless used
		const [
			{ mergeConfig },
			{ nodeLogDestination },
			{ openConfig, createSettings },
			{ createVite },
			{ runHookConfigSetup, runHookConfigDone },
		] = await Promise.all([
			import('vite'),
			import('../core/logger/node.js'),
			import('../core/config/index.js'),
			import('../core/create-vite.js'),
			import('../integrations/index.js'),
		]);
		const logging: LogOptions = {
			dest: nodeLogDestination,
			level: 'info',
		};
		const { astroConfig: config } = await openConfig({
			cmd,
			logging,
		});
		const settings = createSettings(config, inlineConfig.root);
		await runHookConfigSetup({ settings, command: cmd, logging });
		const viteConfig = await createVite(
			{
				mode,
			},
			{ settings, logging: logging, mode }
		);
		await runHookConfigDone({ settings, logging });
		return mergeConfig(viteConfig, inlineConfig);
	};
}
