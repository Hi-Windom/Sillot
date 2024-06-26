import { unmountAllMobileSettingsPanelReactRoots } from "../../sillot/util/react";
import {activeBlur, hideKeyboardToolbar} from "./keyboardToolbar";

export const closePanel = () => {
    window.sout.tracker("invoked");
    document.getElementById("menu").style.transform = "";
    document.getElementById("sidebar").style.transform = "";
    document.getElementById("model").style.transform = "";
    const maskElement = document.querySelector(".side-mask") as HTMLElement;
    maskElement.classList.add("fn__none");
    maskElement.style.opacity = "";
    window.siyuan.menus.menu.remove();
    unmountAllMobileSettingsPanelReactRoots();
};

export const closeModel = () => {
    window.sout.tracker("invoked");
    document.getElementById("model").style.transform = "";
    activeBlur();
    hideKeyboardToolbar();
    unmountAllMobileSettingsPanelReactRoots();
};
