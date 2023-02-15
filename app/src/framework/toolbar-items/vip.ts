import { openSetting } from "../../config";
import { ToolbarItem } from "../toolbar-item";

export class VipItem extends ToolbarItem {
    constructor() {
        super();
        this.element = "<div id=\"toolbarVIP\" class=\"fn__flex\"></div>";
    }

    onClick(): void {
        const dialogSetting = openSetting();
        dialogSetting.element.querySelector('.b3-tab-bar [data-name="account"]').dispatchEvent(new CustomEvent("click"));
    }
}