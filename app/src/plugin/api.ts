import { Framework } from "../framework";
import { ToolbarItem } from "../framework/toolbar-item";

export const apiGenerate = (framework: Framework) => ({
    addToolbarLeft: (toolbarItem: ToolbarItem) => {
        framework.toolbar.addLeft(toolbarItem);
    },
    addToolbarRight: (toolbarItem: ToolbarItem) => {
        framework.toolbar.addRight(toolbarItem);
    },
});
