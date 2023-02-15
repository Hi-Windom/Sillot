import { MenuItem } from "../../menus/Menu";
import { setMode } from "../../util/assets";
import { ToolbarItem } from "../toolbar-item";

export class ModeItem extends ToolbarItem {
    constructor() {
        super();
        this.element = `<div id="barMode" class="toolbar__item b3-tooltips b3-tooltips__sw" aria-label="${window.siyuan.languages.appearanceMode}">
             <svg><use xlink:href="#icon${window.siyuan.config.appearance.modeOS ? "Mode" : (window.siyuan.config.appearance.mode === 0 ? "Light" : "Dark")}"></use></svg>
         </div>`;
    }

    onClick(event: MouseEvent): void {
        const target = event.target as Element;
        if (!window.siyuan.menus.menu.element.classList.contains("fn__none") &&
            window.siyuan.menus.menu.element.getAttribute("data-name") === "barmode") {
            window.siyuan.menus.menu.remove();
            return;
        }
        window.siyuan.menus.menu.remove();
        window.siyuan.menus.menu.element.setAttribute("data-name", "barmode");
        window.siyuan.menus.menu.append(new MenuItem({
            label: window.siyuan.languages.themeLight,
            icon: "iconLight",
            current: window.siyuan.config.appearance.mode === 0 && !window.siyuan.config.appearance.modeOS,
            click: () => {
                setMode(0);
            }
        }).element);
        window.siyuan.menus.menu.append(new MenuItem({
            label: window.siyuan.languages.themeDark,
            current: window.siyuan.config.appearance.mode === 1 && !window.siyuan.config.appearance.modeOS,
            icon: "iconDark",
            click: () => {
                setMode(1);
            }
        }).element);
        window.siyuan.menus.menu.append(new MenuItem({
            label: window.siyuan.languages.themeOS,
            current: window.siyuan.config.appearance.modeOS,
            icon: "iconMode",
            click: () => {
                setMode(2);
            }
        }).element);
        const rect = target.getBoundingClientRect();
        window.siyuan.menus.menu.popup({ x: rect.left, y: rect.top }, true);
        event.stopPropagation();
    }
}