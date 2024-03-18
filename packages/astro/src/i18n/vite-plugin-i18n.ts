import type * as vite from 'vite';
import type { AstroConfig, AstroSettings } from '../@types/astro.js';
import { AstroError } from '../core/errors/errors.js';
import { AstroErrorData } from '../core/errors/index.js';

const virtualModuleId = 'astro:i18n';

type AstroInternationalization = {
	settings: AstroSettings;
};

export interface I18nInternalConfig
	extends Pick<AstroConfig, 'base' | 'site' | 'trailingSlash'>,
		Pick<AstroConfig['build'], 'format'> {
	i18n: AstroConfig['i18n'];
	isBuild: boolean;
}

export default function astroInternationalization({
	settings,
}: AstroInternationalization): vite.Plugin {
	const {
		base,
		build: { format },
		i18n,
		site,
		trailingSlash,
	} = settings.config;
	return {
		name: 'astro:i18n',
		enforce: 'pre',
		config(config, { command }) {
			const i18nConfig: I18nInternalConfig = {
				base,
				format,
				site,
				trailingSlash,
				i18n,
				isBuild: command === 'build',
			};
			return {
				define: {
					__ASTRO_INTERNAL_I18N_CONFIG__: JSON.stringify(i18nConfig),
				},
			};
		},
		resolveId(id) {
			if (id === virtualModuleId) {
				if (i18n === undefined) throw new AstroError(AstroErrorData.i18nNotEnabled);
				return this.resolve('astro/virtual-modules/i18n.js');
			}
		},
	};
}
