import { updateHotkeyTip } from "../../protyle/util/compatibility";
import { goBack } from "../../util/backForward";
import { ToolbarItem } from "../toolbar-item";

export class BackItem extends ToolbarItem {
    constructor() {
        super();
        this.element = `<button id="barBack" data-menu="true" class="toolbar__item toolbar__item--disabled b3-tooltips b3-tooltips__se" aria-label="${window.siyuan.languages.goBack} ${updateHotkeyTip(window.siyuan.config.keymap.general.goBack.custom)}">
             <svg><use xlink:href="#iconBack"></use></svg>
         </button>`;
    }

    onClick(): void {
        goBack();
    }
}