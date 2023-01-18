import { insertCPintro } from "../../script/CP.js";

setTimeout(() => {
  let inDom1 = document.querySelector("#barDock > .b3-menu");
  insertCPintro(
    inDom1.children[0],
    "beforebegin",
    "Sofill-CDUI-2",
    "Sofill-CDUI-btn b3-menu__item",
    `<svg class="b3-menu__icon Sofill-CDUI-btn__icon" "=""><use xlink:href="#iconSettings"></use></svg><span class="b3-menu__label">主题设置</span>`
  );
}, 1000);
