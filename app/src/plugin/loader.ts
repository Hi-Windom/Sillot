import { Plugin } from "./plugin";
import { InternalPlugins } from "./config";
import { loadPluginFromServer } from "./request";
import { Framework } from "../framework";
import { apiGenerate } from "./api";
import { modules } from "./module";

let components: { [key: string]: any };

export class PluginLoader {
    plugins: Map<string, Plugin>;
    framework: Framework;

    constructor(framework: Framework) {
        this.framework = framework;
        this.plugins = new Map();
    }

    async loadPlugin(pluginName: string) {
        if (!components) {
            this.generateRequiredModules();
        }
        if (InternalPlugins.find((v) => v === pluginName)) {
            return await this.loadInternalPlugin(pluginName);
        }
        const exports: { [key: string]: any } = {};
        const module = { exports };
        const { pluginScript, name } = await this.getPlugin(pluginName);
        if (!pluginScript || !name) {
            return;
        }
        function run(script: string, name: string) {
            return eval("\"use strict\"; (function anonymous(require,module,exports){".concat(script, "\n})\n//# sourceURL=").concat(name, "\n"));
        }
        const __require = (name: string) => {
            if (components[name]) {
                return components[name];
            }
            throw new Error(`module ${name} not found`);
        };
        run(pluginScript, name)(__require, module, exports);
        let pluginConstructor;
        if (!(pluginConstructor = (module.exports || exports).default || module.exports)) {
            throw new Error(`Failed to load plugin ${pluginName}. No exports detected.`);
        }
        const plug = new pluginConstructor();
        if (!(plug instanceof Plugin)) {
            throw new Error(`Failed to load plugin ${pluginName}`);
        }

        plug.onload();
        this.plugins.set(pluginName, plug);
    }

    async loadInternalPlugin(name: string) {
        try {
            const mod = await require("../internal/plugin/" + name);
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
        const result = await loadPluginFromServer(pluginName);
        const { name, content } = result || { name: "", content: "" };
        return {
            pluginScript: content,
            name,
        };
    }

    generateRequiredModules() {
        components = {
            "siyuan": {
                ...modules,
                ...apiGenerate(this.framework),
            }
        };
    }
}

