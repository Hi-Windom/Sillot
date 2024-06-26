import type {Tab} from "../Tab";
import {Model} from "../Model";
import type {App} from "../../index";
import type {Protyle} from "../../protyle";

export class Custom extends Model {
    public element: Element;
    public tab: Tab;
    public data: any;
    public type: string;
    public init: (custom: Custom) => void;
    public destroy: () => void;
    public beforeDestroy: () => void;
    public resize: () => void;
    public update: () => void;
    public editors: Protyle[] = [];

    constructor(options: {
        app: App,
        type: string,
        tab: Tab,
        data: any,
        destroy?: () => void,
        beforeDestroy?: () => void,
        resize?: () => void,
        update?: () => void,
        init: (custom: Custom) => void
    }) {
        super({app: options.app, id: options.tab.id});
        if (window.siyuan.config.fileTree.openFilesUseCurrentTab) {
            options.tab.headElement?.classList.add("item--unupdate");
        }

        this.element = options.tab.panelElement;
        this.tab = options.tab;
        this.data = options.data;
        this.type = options.type;
        this.init = options.init;
        this.destroy = options.destroy;
        this.beforeDestroy = options.beforeDestroy;
        this.resize = options.resize;
        this.update = options.update;
        this.init(this);
    }
}
