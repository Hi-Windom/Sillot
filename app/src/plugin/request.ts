import { fetchPost } from "../util/fetch";
import { PluginInfo } from "./plugin";

export const loadPluginFromServer = async (name: string): Promise<PluginInfo | null> => {
    return new Promise((resolve) => {
        fetchPost("/api/bazaar/loadPlugin", { name }, (res) => {
            resolve(res.data);
        });
    });
};

export const loadInstalledPlugins = async (): Promise<any> => {
    return new Promise((resolve) => {
        fetchPost("/api/bazaar/getInstalledPlugin", (res: any) => {
            const plugins = res.data.packages;
            resolve(plugins);
        });
    });
};
