import * as API from "./../utils/api.min.js";
import * as config from "./../config.js";
if (API.isDesktopAppMode()) {
  const { globalShortcut } = require("@electron/remote");
  globalShortcut.register("CommandOrControl+alt+P", () => {
    console.info("predefined shortcut");
  });
}

// 初始缩放比例
let originPixelRatio = localStorage.SC_winsay_data_devicePixelRatio;
if (!originPixelRatio) {
  originPixelRatio = window.devicePixelRatio;
  // 整数才保存
  if (Number.isInteger(originPixelRatio)) {
    localStorage.SC_winsay_data_devicePixelRatio = originPixelRatio;
  }
}
// 来源：https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/
let lastPixelRatio = originPixelRatio;
window.addEventListener("resize", function () {
  let currentPixelRatio = window.devicePixelRatio;
  if (currentPixelRatio !== lastPixelRatio) {
    console.log(
      "缩放比例是：" +
        Math.round(1000 * (currentPixelRatio / originPixelRatio)) / 10 +
        "%（100%基准为软件初始缩放，并非实际缩放，仅供参考）"
    );
  }
  // 记住上一次的设备像素比
  lastPixelRatio = currentPixelRatio;
});

function ExtendProtyleToolbar() {
  setInterval(() => {
    var all_protyle_toolbar = document.querySelectorAll(
      ".fn__flex-1.protyle .protyle-toolbar"
    );
    all_protyle_toolbar.forEach(function (protyle_toolbar) {
      if (
        protyle_toolbar.querySelectorAll(".sc_protyle_toolbar_search").length ==
        0
      ) {
        var divider = document.createElement("div");
        divider.className = "protyle-toolbar__divider";
        protyle_toolbar.insertAdjacentElement("beforeend", divider);
        var sbutton = document.createElement("button");
        sbutton.className =
          "protyle-toolbar__item b3-tooltips b3-tooltips__ne sc_protyle_toolbar_search";
        // sbutton.id = "sc_protyle_toolbar_search";
        sbutton.setAttribute("data-type", "search");
        sbutton.setAttribute("aria-label", "搜索选中文本");
        sbutton.innerHTML = `<svg><use xlink:href="#iconSearch"></use></svg>`;
        protyle_toolbar.insertAdjacentElement("beforeend", sbutton);
        protyle_toolbar.addEventListener(
          "click",
          (event) => {
            if (
              event.target.classList.contains("sc_protyle_toolbar_search") ||
              event.target.parentNode.classList.contains(
                "sc_protyle_toolbar_search"
              )
            ) {
              var text = window.getSelection().toString();
              window.open(`https://cn.bing.com/search?q=${text}`, "_blank");
              event.stopPropagation();
            }
          },
          true
        );
      }
    });
  }, 2000);
}
setTimeout(() => {
  ExtendProtyleToolbar();
}, 200);
