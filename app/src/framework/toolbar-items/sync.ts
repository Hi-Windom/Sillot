import { updateHotkeyTip } from "../../protyle/util/compatibility";
import { syncGuide } from "../../sync/syncGuide";
import { needSubscribe } from "../../util/needSubscribe";
import { ToolbarItem } from "../toolbar-item";

export class SyncItem extends ToolbarItem {
    constructor() {
        super();
        this.element = `<div id="barSync" class="toolbar__item b3-tooltips b3-tooltips__se" aria-label="${window.siyuan.config.sync.stat || (window.siyuan.languages.syncNow + " " + updateHotkeyTip(window.siyuan.config.keymap.general.syncNow.custom))}">
        <svg><use xlink:href="#iconCloudSucc"></use></svg>
    </div>`;
    }

    onMount() {
        const iconElement = this.el;
        const useElement = iconElement.querySelector("use");
        iconElement.classList.remove("toolbar__item--active");
        if (!window.siyuan.config.sync.enabled || (0 === window.siyuan.config.sync.provider && needSubscribe(""))) {
            iconElement.setAttribute("aria-label", window.siyuan.languages["_kernel"]["53"]);
            useElement.setAttribute("xlink:href", "#iconCloudOff");
        } else {
            useElement.setAttribute("xlink:href", "#iconCloudSucc");
        }
    }

    onClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        syncGuide(target);
        event.stopPropagation();
    }
}