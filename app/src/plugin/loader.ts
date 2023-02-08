import { Plugin } from "./plugin";
import { __require } from "./module";
import { InternalPlugins } from "./config";
import { loadPluginFromServer } from "./api";

export class PluginLoader {
    plugins: Map<string, Plugin>;

    constructor() {
        this.plugins = new Map();
    }

    async loadPlugin(pluginName: string) {
        if (InternalPlugins.find((v) => v === pluginName)) {
            return await this.loadInternalPlugin(pluginName);
        }
        const exports: { [key: string]: any } = {};
        const module = { exports };
        const { pluginScript, name } = await this.getPlugin(pluginName);
        function run(script: string, name: string) {
            return eval("(function anonymous(require,module,exports){".concat(script, "\n})\n//# sourceURL=").concat(name, "\n"));
        }
        run(pluginScript, name)(__require, module, exports);
        let pluginConstructor;
        if (!(pluginConstructor = (module.exports || exports).default || module.exports)) {
            throw new Error(`Failed to load plugin ${pluginName}. No exports detected.`);
        }
        const plug = new pluginConstructor();
        if (!(plug instanceof Plugin)){
            throw new Error(`Failed to load plugin ${pluginName}`);
        }

        plug.onload();
        this.plugins.set(pluginName, plug);
    }

    async loadInternalPlugin(name: string) {
        try {
            const mod = await import("../internal/plugin/" + name);
            const plugin = mod.default;
            const plug = new plugin();
            plug.onload();
            this.plugins.set(name, plug);
        } catch (e) {
            console.error(`plugin ${name} load failed: `, e);
        }
    }

    async unloadPlugin(pluginName: string) {
        const plugin = this.plugins.get(pluginName);
        if (!plugin) {
            return;
        }
        await plugin.onunload();
        this.plugins.delete(pluginName);
    }

    async getPlugin(pluginName: string): Promise<{ pluginScript: string; name: string; }> {
        const { name, content } = await loadPluginFromServer(pluginName);
        return {
            pluginScript: content,
            name,
        };
    }
}

