import * as config from "../config.js";
import * as API from "../utils/api.min.js";
var fs = null;
var oncePath = `${config.winsay_ROOT_ABS}/script/module/AlertOnce.js`;
if (API.isDesktopAppMode()) {
  fs = require("fs");
  new Promise(async function (response) {
    if (document.body.classList.contains("branch--Sillot")) {
      let testdata = {
        f: "Sofill-CPuserData.json",
      };
      let rere = await API.getConfigesStore(testdata);
      let y = await API.LocalStorage.init(
        !API.isEmpty(rere),
        rere.data.winsay,
        "Sofill-CPuserData"
      );
      response(y);
    }
  }).then(function (response) {
    console.log(response);
    setTimeout(() => {
      window.sofill.funs.loadScript(
        window.sofill.funs.addURLParam(
          "/appearance/themes/Sofill-/script/CP.js?r=" + Math.random()
        ),
        undefined,
        true
      );
    }, 200);
  });
}

window.sofill.ekits.gites = {
  UPath: `/appearance/themes/Sofill=/eHiWindom/gites/`,
};
window.sofill.ekits.lnco = {};

// 初始化获取用户配置
let SC_winsay_cp_appearance__TabBarMode = API.LocalStorage.getItem(
  "SC_winsay_cp_appearance__TabBarMode"
);

async function ghostTabBar() {
  if (!API.isEmpty(SC_winsay_cp_appearance__TabBarMode)) {
    window.sofill.funs.updateStyle(
      "TabBar",
      `/appearance/themes/Sofill-/style/sweet/${SC_winsay_cp_appearance__TabBarMode}`
    );
    // console.log(SC_winsay_cp_appearance__TabBarMode);
  } else {
    new Promise(function (response) {
      var url = `http://127.0.0.1:6806/api/file/getFile`;
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("POST", url, true);
      httpRequest.setRequestHeader("Content-type", "application/json");
      var obj = { path: config.config_UI };
      httpRequest.send(JSON.stringify(obj));
      // 响应后的回调函数
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var json = httpRequest.responseText;
          response(JSON.parse(json));
        }
      };
    }).then(function (response) {
      window.sofill.funs.updateStyle(
        "TabBar",
        `/appearance/themes/Sofill-/style/sweet/${response.style.TabBar}`
      );
      console.log("use default");
    });
  }
}

ghostTabBar();

window.sofill.funs.updateStyle("MI", `/appearance/themes/Sofill-/style/MI.css`);
/* 根据不同设备加载样式配置文件 */
switch (window.sofill.OS) {
  case "android":
    window.sofill.funs.updateStyle(
      "Mobile",
      `/appearance/themes/Sofill-/style/Mobile/Android.css`
    );
    break;
  default:
    window.sofill.funs.updateStyle(
      "fonts",
      `${window.sofill.ekits.gites.UPath}style/fonts.css`
    );
    break;
}

// 改善开启自定义主题的体验
window.sofill.funs.updateStyle(
  "Init",
  `/appearance/themes/Sofill-/style/Init.min.css`
);
window.sofill.funs.updateStyle(
  "SCC",
  `/appearance/themes/Sofill-/style/SCC.css`
);
window.sofill.funs.updateStyle(
  "Popup",
  `/appearance/themes/Sofill-/style/Popup.css`
);
window.sofill.funs.updateStyle(
  "Patch",
  `/appearance/themes/Sofill-/style/Patch.css`
);

window.sofill.funs.updateStyle(
  "MI-ToolBar-Auto",
  `/appearance/themes/Sofill-/style/sweet/MI-ToolBar-Auto.css`
);
window.sofill.funs.updateStyle(
  "Funs-list2",
  `/appearance/themes/Sofill-/style/Funs-list2.min.css`
);
window.sofill.funs.updateStyle(
  "Funs-ScrollView",
  `/appearance/themes/Sofill-/style/Funs-ScrollView.css`
);

// 根据主题加载
window.sofill.funs.updateStyle("CP", `/appearance/themes/Sofill-/style/CP.css`);
switch (config.ThemeName) {
  case "Sofill=":
    window.sofill.funs.updateStyle(
      "CP-themely",
      `/appearance/themes/Sofill=/style/CP-lili.css`
    );
    break;
  case "Sofill-":
  default:
    window.sofill.funs.updateStyle(
      "CP-themely",
      `/appearance/themes/Sofill-/style/CP-winsay.css`
    );
    break;
}

var kernelVersion = window.siyuan.config.system.kernelVersion;
var oldVersion = "2.6.1";
var cv_result = API.compareVersion(oldVersion, kernelVersion);
var AutoCheckSilently = API.LocalStorage.getItem(
  "SC_winsay_cp_search__about_AutoCheckSilently"
);
switch (cv_result) {
  case 1:
  case 0:
    if (!(AutoCheckSilently && AutoCheckSilently == "true")) {
      setTimeout(() => {
        API.通知(
          `主题已停止支援思源 ${oldVersion} 及更早版本，建议更新思源版本<br><a href="https://github.com/Hi-Windom/winsay/issues?q=is%3Aissue+label%3AAbolishment+is%3Aclosed+label%3A%E9%80%82%E9%85%8D%E6%80%9D%E6%BA%90" target="_blank" style="color: #58c">更多信息</a>`,
          8000
        );
      }, 3000);
    }
    break;
  default:
    break;
}

switch (API.compareVersion("2.7.0", kernelVersion)) {
  case -1:
  case 0:
    window.sofill.funs.updateStyle(
      "v2_7_0",
      `/appearance/themes/Sofill-/VP/v2_7/v2_7_0.css`
    );
    window.sofill.funs.loadScript(
      window.sofill.funs.addURLParam(
        "/appearance/themes/Sofill-/VP/v2_7/v2_7_0.js"
      ),
      undefined,
      true
    );
    break;
  default:
    break;
}

let inited = API.LocalStorage.getItem("SC_winsay_cp_inited");
if (inited != "true") {
  API.LocalStorage.setItem("SC_winsay_cp_system__SelfProtection", "true");
  API.LocalStorage.setItem("SC_winsay_cp_editor__LH_Adaptive", "true");
  API.LocalStorage.setItem("SC_winsay_cp_editor__ListAutoIndent", "true");
  API.LocalStorage.setItem("SC_winsay_cp_editor__HintHint-index", "true");
  API.LocalStorage.setItem("SC_winsay_cp_editor__BlockTable_FontSize", "92%");
  API.LocalStorage.setItem(
    "SC_winsay_cp_editor__Block-Inline-link__block-ref-content",
    "⁅⁅ ⁆⁆"
  );
  API.LocalStorage.setItem(
    "SC_winsay_cp_editor__block__popover--open__PinSense",
    "1"
  );
  API.LocalStorage.setItem(
    "SC_winsay_cp_appearance__ToolBarMode__NotFocus__bgColor",
    "var(--b3-theme-surface-lighter)"
  );
  API.LocalStorage.setItem("SC_winsay_cp_appearance__ShowWebIcon", "true");
  API.LocalStorage.setItem("SC_winsay_cp_appearance__ShowFileIcon", "true");
  API.LocalStorage.setItem(
    "SC_winsay_cp_appearance__status_msg_opacity",
    "0.9"
  );
  API.LocalStorage.setItem(
    "SC_winsay_cp_appearance__strengthen_backlinkList_panel_border",
    "true"
  );
  API.LocalStorage.setItem("SC_winsay_cp_filetree__Adaptive_display", "true");
  API.LocalStorage.setItem("SC_winsay_cp_search__index", "true");
  API.LocalStorage.setItem("SC_winsay_cp_search__layout", "layout-Auto.css");
  //初始化完成
  API.LocalStorage.setItem("SC_winsay_cp_inited", "true");
}

if (config.clientMode == "body--mobile") {
  window.sofill.funs.loadScript(
    window.sofill.funs.addURLParam(
      "/appearance/themes/Sofill-/script/lib/hammer.min.js"
    ),
    "module",
    true
  );
  window.sofill.funs.loadScript(
    window.sofill.funs.addURLParam(
      "/appearance/themes/Sofill-/script/sweet/MobileMagicBall.js"
    ),
    undefined,
    true
  );
}

let urlParam1 = API.getUrlParam(window.location.href, "action");
let urlParam2 = API.getUrlParam(window.location.href, "name");
let urlParam3 = API.getUrlParam(window.location.href, "args");
if (urlParam1 && urlParam2) {
  switch (urlParam1) {
    case "updateTheme":
      document.querySelector("#toolbar #barSetting").click();
      document
        .querySelector('.b3-tab-bar:not(.sc-custom-nav) [data-name="bazaar"]')
        .click();
      setTimeout(() => {
        document
          .querySelector(
            `#configBazaarTheme [class="b3-card__actions"][data-name="${urlParam2}"]>[data-type="install-t"]`
          )
          .click();
      }, 500);
      break;
    case "next":
      if (urlParam2 == "update-winsay") {
        // window.location.replace(
        //   `http://${urlParam3}/stage/build/desktop/?action=updateTheme&name=Sofill-&args=null`
        // );
        window.open(
          `http://${decodeURIComponent(
            urlParam3
          )}/stage/build/desktop/?action=updateTheme&name=Sofill-&args=null`,
          "_self"
        );
      }
    default:
      break;
  }
}

if (!document.body.classList.contains("branch--Sillot")) {
  fs
    ? fs.access(oncePath, function (err) {
        if (!err) {
          setTimeout(() => {
            window.sofill.funs.loadScript(
              window.sofill.funs.addURLParam(
                "/appearance/themes/Sofill-/script/module/AlertOnce.js"
              ),
              undefined,
              true
            );
            setTimeout(() => {
              fs.unlink(oncePath, function (err) {
                if (err) {
                  throw err;
                }
                console.log("一次性通知已销毁");
              });
            }, 3000);
            return;
          }, 2000);
        }
      })
    : null;
}
