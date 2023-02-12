import { Framework } from "../framework";
import { PluginLoader } from "./loader";

export class PluginSystem {
    framework: Framework;
    pluginLoader: PluginLoader;

    constructor(framework: Framework) {
        this.framework = framework;
        this.pluginLoader = new PluginLoader(framework);
    }

    init() {
        this.pluginLoader.loadPlugin("test");
        this.pluginLoader.loadPlugin("test1");
    }
}