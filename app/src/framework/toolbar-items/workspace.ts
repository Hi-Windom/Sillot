import { workspaceMenu } from "../../menus/workspace";
import { getWorkspaceName } from "../../util/noRelyPCFunction";
import { ToolbarItem } from "../toolbar-item";

export class WorkspaceItem extends ToolbarItem {
    constructor() {
        super();
        this.element = `<div id="barWorkspace" class="toolbar__item">
        <span class="toolbar__text">${getWorkspaceName()}</span>
        <svg class="toolbar__svg"><use xlink:href="#iconDown"></use></svg>
    </div>`;
    }

    onClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        workspaceMenu(target.getBoundingClientRect());
        event.stopPropagation();
    }
}
