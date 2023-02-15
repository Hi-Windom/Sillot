import { htmlToElem, insertAfter, insertBefore } from "../util/element";
import { ToolbarItem } from "./toolbar-item";
import { BackItem } from "./toolbar-items/back";
import { ForwardItem } from "./toolbar-items/forward";
import { ModeItem } from "./toolbar-items/mode";
import { ReadonlyItem } from "./toolbar-items/readonly";
import { SearchItem } from "./toolbar-items/search";
import { SyncItem } from "./toolbar-items/sync";
import { VipItem } from "./toolbar-items/vip";
import { WindowsControlItem } from "./toolbar-items/window-control";
import { WorkspaceItem } from "./toolbar-items/workspace";

/**
 * 框架顶部工具栏，包括左上角按钮组，中部标题，右上角按钮组
 */
export class Toolbar {
    element: HTMLElement;

    leftItems: ToolbarItem[];

    rightItems: ToolbarItem[];

    titleItem: ToolbarItem;

    constructor() {
        this.leftItems = [];
        this.rightItems = [];
        this.element = document.getElementById("toolbar");
        if (!this.element) {
            throw Error("Toolbar element not found");
        }
        this.init();
    }

    private init() {
        // middle title
        this.addTitle(new TitleItem());
        // left
        this.addLeft(new WorkspaceItem());
        this.addLeft(new SyncItem());
        this.addLeft(new BackItem());
        this.addLeft(new ForwardItem());
        // right
        this.addRight(new WindowsControlItem());
        this.addRight(new ModeItem());
        this.addRight(new ReadonlyItem());
        this.addRight(new SearchItem());
        this.addRight(new VipItem());
    }

    addLeft(item: ToolbarItem) {
        this.leftItems.push(item);
        const el = htmlToElem(item.element);
        if (!el) {
            return;
        }
        el.addEventListener("click", (e: MouseEvent) => {
            item.onClick(e);
        });
        item.setEl(el);
        item.setParentEl(this.element);
        insertBefore(el, this.titleItem.el);
        item.onMount();
    }

    private addTitle(item: ToolbarItem) {
        this.titleItem = item;
        const el = htmlToElem(item.element);
        item.setEl(el);
        item.setParentEl(this.element);
        this.element.appendChild(el);
    }

    addRight(item: ToolbarItem) {
        this.rightItems.push(item);
        const el = htmlToElem(item.element);
        if (!el) {
            return;
        }
        el.addEventListener("click", (e: MouseEvent) => item.onClick(e));
        item.setEl(el);
        item.setParentEl(this.element);
        insertAfter(el, this.titleItem.el);
        item.onMount();
    }
}

export class TitleItem extends ToolbarItem {
    constructor() {
        super();
        this.element = '<div class="fn__flex-1 fn__ellipsis" id="drag"><span class="fn__none">开发版，使用前请进行备份 Development version, please backup before use</span></div>';
    }
}

