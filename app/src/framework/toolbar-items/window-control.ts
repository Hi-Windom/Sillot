import { ToolbarItem } from "../toolbar-item";

export class WindowsControlItem extends ToolbarItem {
    constructor() {
        super();
        this.element = "<div class=\"fn__flex\" id=\"windowControls\"></div>";
    }
}
