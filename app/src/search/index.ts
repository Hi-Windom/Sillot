import {Model} from "../layout/Model";
import type {Tab} from "../layout/Tab";
import type {Protyle} from "../protyle";
import {genSearch} from "./util";
import {setPanelFocus} from "../layout/util";
import type {App} from "../index";
import {clearOBG} from "../layout/dock/util";

export class Search extends Model {
    public element: HTMLElement;
    public config: Config.IUILayoutTabSearchConfig;
    public editors: { edit: Protyle, unRefEdit: Protyle };

    constructor(options: { tab: Tab, config: Config.IUILayoutTabSearchConfig, app: App }) {
        super({
            app: options.app,
            id: options.tab.id,
        });
        if (window.siyuan.config.fileTree.openFilesUseCurrentTab) {
            options.tab.headElement?.classList.add("item--unupdate");
        }
        this.element = options.tab.panelElement as HTMLElement;
        this.config = options.config;
        this.editors = genSearch(options.app, this.config, this.element);
        this.element.addEventListener("click", () => {
            clearOBG();
            setPanelFocus(this.element.parentElement.parentElement);
        });
    }

    public updateSearch(text: string, replace: boolean) {
        const inputElement = this.element.querySelector(".b3-text-field") as HTMLInputElement;
        if (text === "") {
            inputElement.select();
            return;
        }
        const oldText = inputElement.value;
        if (oldText === text) {
            return;
        }
        if (!replace) {
            if (oldText.indexOf(text) > -1) {
                text = oldText.replace(text + " ", "").replace(" " + text, "");
            } else if (oldText !== "") {
                text = oldText + " " + text;
            }
        }
        inputElement.value = text;
        inputElement.select();
        inputElement.dispatchEvent(new CustomEvent("input"));
    }
}
