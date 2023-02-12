import { updateHotkeyTip } from "../../protyle/util/compatibility";
import { goForward } from "../../util/backForward";
import { ToolbarItem } from "../toolbar-item";

export class ForwardItem extends ToolbarItem {
    constructor() {
        super();
        this.element = `<button id="barForward" data-menu="true" class="toolbar__item toolbar__item--disabled b3-tooltips b3-tooltips__se" aria-label="${window.siyuan.languages.goForward} ${updateHotkeyTip(window.siyuan.config.keymap.general.goForward.custom)}">
             <svg><use xlink:href="#iconForward"></use></svg>
         </button>`;
    }

    onClick(): void {
        goForward();
    }
}