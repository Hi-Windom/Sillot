import { updateHotkeyTip } from "../../protyle/util/compatibility";
import { openSearch } from "../../search/spread";
import { ToolbarItem } from "../toolbar-item";

export class SearchItem extends ToolbarItem {
    constructor() {
        super();
        this.element = `<div id="barSearch" class="toolbar__item b3-tooltips b3-tooltips__sw" aria-label="${window.siyuan.languages.globalSearch} ${updateHotkeyTip(window.siyuan.config.keymap.general.globalSearch.custom)}">
             <svg><use xlink:href="#iconSearch"></use></svg>
         </div>`;
    }

    onClick(): void {
        openSearch(window.siyuan.config.keymap.general.globalSearch.custom);
    }
}