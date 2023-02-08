import { BaseComponent } from "./component";
import { Plugin } from "./plugin";

const components: { [key: string]: any } = {
    "siyuan": {
        Plugin,
        BaseComponent
    }
};

export const __require = (name: string) => {
    if (components[name]) {
        return components[name];
    }
    throw new Error(`module ${name} not found`);
};
