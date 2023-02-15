import { editor } from "../../config/editor";
import { updateHotkeyTip } from "../../protyle/util/compatibility";
import { ToolbarItem } from "../toolbar-item";

export class ReadonlyItem extends ToolbarItem {
    constructor() {
        super();
        this.element = `<div id="barReadonly" class="toolbar__item b3-tooltips b3-tooltips__sw${window.siyuan.config.editor.readOnly ? " toolbar__item--active" : ""}" aria-label="${window.siyuan.languages.use} ${window.siyuan.config.editor.readOnly ? window.siyuan.languages.editMode : window.siyuan.languages.editReadonly} ${updateHotkeyTip(window.siyuan.config.keymap.general.editMode.custom)}">
             <svg><use xlink:href="#icon${window.siyuan.config.editor.readOnly ? "Preview" : "Edit"}"></use></svg>
         </div>`;
    }

    onClick(): void {
        editor.setMode();
    }
}