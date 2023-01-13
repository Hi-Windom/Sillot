import * as API from "../utils/api.min.js";
import * as config from "../config.js";
var fs = null;
if (API.isDesktopAppMode()) {
  fs = require("fs");
}

function createAndroidSofillToolbar() {
  if (config.clientMode != "body--mobile") {return;}
  var SofillToolbar = document.getElementById("SofillToolbar");
  if (SofillToolbar == null) {
      var toolbarEdit = document.getElementById("toolbarEdit");
      SofillToolbar = API.insertCreateBefore(
        toolbarEdit,
        "div",
        "SofillToolbar"
      );
      SofillToolbar.style.position = "relative";
      SofillToolbar.style.height = "25px";
      SofillToolbar.style.overflowY = "scroll";
      SofillToolbar.style.paddingTop = "7px";
      SofillToolbar.style.marginRight = "3px";
      SofillToolbar.style.marginLeft = "10px";
  }
}

function AndroidChangeColor() {
  if (config.clientMode != "body--mobile") {return;}
  if (document.getElementById(config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR)){return;}
  var SofillToolbar = document.getElementById("SofillToolbar");
  const addButton = API.addinsertCreateElement(SofillToolbar, "div");
  addButton.id = config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
  addButton.style.width = "17px";
  addButton.style.height = "100%";
  addButton.style.float = "left";
  addButton.style.marginLeft = "10px";
  addButton.style.backgroundImage =
    "url(/appearance/themes/Sofill-/src/icon/S2.svg)";
  addButton.style.backgroundRepeat = "no-repeat";
  addButton.style.backgroundPosition = "left top";
  addButton.style.backgroundSize = "100%";
  addButton.addEventListener("click", (e) => {
    const latest_color_href = window.sofill.iter.next().value;
    switch (window.sofill.funs.getThemeMode) {
      case "dark":
        localStorage.setItem(config.latest_DC_ID, latest_color_href);
        localStorage.setItem("SC_winsay_cp_custom__DS", latest_color_href);
        var snode = document.getElementById("SC_winsay_cp_custom__DS");
        if (snode) {
          snode.value = latest_color_href;
        }
        break;
      case "light":
      default:
        localStorage.setItem(config.latest_LC_ID, latest_color_href);
        localStorage.setItem("SC_winsay_cp_custom__LS", latest_color_href);
        var snode = document.getElementById("SC_winsay_cp_custom__LS");
        if (snode) {
          snode.value = latest_color_href;
        }
        if (localStorage.getItem("SC_winsay_cp_custom__defaultS_auto")) {
          console.log(latest_color_href);
          let writeData = `@import url("preview-base-light.css"); @import url("${latest_color_href.replace("root", "preview")}?r=${Math.random()}");`;
          fs
            ? fs.writeFile(
                `${config.S2_BASE_ABS}defaultS.css`,
                writeData,
                "utf-8",
                function (err) {
                  if (err) {
                    console.error(err);
                  } else {
                    console.log("Write successfully~~");
                  }
                }
              )
            : console.log("platform not supported");
        }
        break;
    }
    window.sofill.funs.updateStyle(
      config.IDs.STYLE_COLOR,
      `${config.S2_BASE}${latest_color_href}`
    );
  });
}
function iterLC() {
  let colors_href = [];
  let colorList = [];
  let latest_color_href = localStorage.getItem(config.latest_LC_ID);
  window.sofill.iter = config.Iterator(colors_href);
  if (latest_color_href) {
    colorList = config.colors;
    colorList.forEach((color) => colors_href.push(`${color}`));
    /* 加载配色文件 */
    window.sofill.funs.updateStyle(
      config.IDs.STYLE_COLOR,
      `${config.S2_BASE}${latest_color_href}`
    );
    // 将迭代器调整为当前配色
    for (let i = 0; i < colorList.length; ++i) {
      if (window.sofill.iter.next().value === latest_color_href) break;
    }
  } else {
    // 支持修改默认形态 #234
    new Promise(function (response) {
      var url = `http://127.0.0.1:6806/api/file/getFile`;
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("POST", url, true);
      httpRequest.setRequestHeader("Content-type", "application/json");
      var obj = {
        path: config.config_UI,
      };
      httpRequest.send(JSON.stringify(obj));
      // 响应后的回调函数
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var json = httpRequest.responseText;
          console.log(json);
          response(JSON.parse(json));
        }
      };
    }).then(function (response) {
      colorList = config.colors;
      colorList.forEach((color) => colors_href.push(`${color}`));
      window.sofill.iter = config.Iterator(colors_href);
      localStorage.setItem(config.latest_LC_ID, response.color.light);
      window.sofill.funs.updateStyle(
        config.IDs.STYLE_COLOR,
        `${config.S2_BASE}${response.color.light}`
      );
      // 将迭代器调整为当前配色
      for (let i = 0; i < colorList.length; ++i) {
        if (window.sofill.iter.next().value === response.color.light) break;
      }
    });
  }
}
function iterDC() {
  let colors_href = [];
  let colorList = [];
  let latest_color_href = localStorage.getItem(config.latest_DC_ID);
  window.sofill.iter = config.Iterator2(colors_href);
  if (latest_color_href) {
    colorList = config.colors2;
    colorList.forEach((color) => colors_href.push(`${color}`));
    /* 加载配色文件 */
    window.sofill.funs.updateStyle(
      config.IDs.STYLE_COLOR,
      `${config.S2_BASE}${latest_color_href}`
    );
    // 将迭代器调整为当前配色
    for (let i = 0; i < colorList.length; ++i) {
      if (window.sofill.iter.next().value === latest_color_href) break;
    }
  } else {
    // 支持修改默认形态 #234
    new Promise(function (response) {
      var url = `http://127.0.0.1:6806/api/file/getFile`;
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("POST", url, true);
      httpRequest.setRequestHeader("Content-type", "application/json");
      var obj = {
        path: config.config_UI,
      };
      httpRequest.send(JSON.stringify(obj));
      // 响应后的回调函数
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var json = httpRequest.responseText;
          console.log(json);
          response(JSON.parse(json));
        }
      };
    }).then(function (response) {
      colorList = config.colors2;
      colorList.forEach((color) => colors_href.push(`${color}`));
      window.sofill.iter = config.Iterator2(colors_href);
      localStorage.setItem(config.latest_DC_ID, response.color.dark);
      window.sofill.funs.updateStyle(
        config.IDs.STYLE_COLOR,
        `${config.S2_BASE}${response.color.dark}`
      );
      // 将迭代器调整为当前配色
      for (let i = 0; i < colorList.length; ++i) {
        if (window.sofill.iter.next().value === response.color.dark) break;
      }
    });
  }
}
function DesktopChangeColor() {
  const drag = document.getElementById("drag"); // 标题栏
  if (config.themeStyle) {
    const button_change_color = document.createElement("button"); // 切换主题颜色按钮
    button_change_color.id = config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
    button_change_color.className = "toolbar__item b3-tooltips b3-tooltips__sw";
    button_change_color.ariaLabel = "形态切换（实验性）";
    button_change_color.innerHTML = `<svg><use xlink:href="#iconTheme"></use></svg>`;
    button_change_color.addEventListener("click", (e) => {
      const latest_color_href = window.sofill.iter.next().value;
      switch (window.sofill.funs.getThemeMode) {
        case "dark":
          localStorage.setItem(config.latest_DC_ID, latest_color_href);
          localStorage.setItem("SC_winsay_cp_custom__DS", latest_color_href);
          var snode = document.getElementById("SC_winsay_cp_custom__DS");
          if (snode) {
            snode.value = latest_color_href;
          }
          break;
        case "light":
        default:
          localStorage.setItem(config.latest_LC_ID, latest_color_href);
          localStorage.setItem("SC_winsay_cp_custom__LS", latest_color_href);
          var snode = document.getElementById("SC_winsay_cp_custom__LS");
          if (snode) {
            snode.value = latest_color_href;
          }
          if (localStorage.getItem("SC_winsay_cp_custom__defaultS_auto")) {
            console.log(latest_color_href);
            let writeData = `@import url("preview-base-light.css"); @import url("${latest_color_href.replace("root", "preview")}?r=${Math.random()}");`;
            fs
              ? fs.writeFile(
                  `${config.S2_BASE_ABS}defaultS.css`,
                  writeData,
                  "utf-8",
                  function (err) {
                    if (err) {
                      console.error(err);
                    } else {
                      console.log("Write successfully~~");
                    }
                  }
                )
              : console.log("platform not supported");
          }
          break;
      }
      window.sofill.funs.updateStyle(
        config.IDs.STYLE_COLOR,
        `${config.S2_BASE}${latest_color_href}`
      );
    });
    if (
      document.getElementById(config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR) == null
    ) {
      drag.insertAdjacentElement("afterend", button_change_color);
    }
  }
}

async function changeStyleMod() {
  switch (window.sofill.funs.getThemeMode) {
    case "dark":
      iterDC();
      break;
    case "light":
    default:
      iterLC();
      break;
  }
  if (config.clientMode == "body--mobile") {
    createAndroidSofillToolbar();
    AndroidChangeColor();
  } else {
    DesktopChangeColor();
  }
}

function changeThemeModeByApp() {
  fs
    ? fs.writeFile(
        `${config.S2_BASE_ABS}defaultS.css`,
        "",
        "utf-8",
        function (err) {
          if (err) {
            console.error(err);
          } else {
            console.log("Write successfully~~");
          }
        }
      )
    : console.log("platform not supported");
  let href_color = null;
  switch (window.sofill.funs.getThemeMode) {
    case "light":
      href_color = `${config.S2_BASE}root-base-light.css`;
      config.colors2.forEach((color) =>
        API.removejscssfile(`${config.S2_BASE}${color}`, "css")
      );
      API.removejscssfile(`${config.S2_BASE}root-base-dark.css`, "css");
      break;
    case "dark":
    default:
      href_color = `${config.S2_BASE}root-base-dark.css`;
      config.colors.forEach((color) =>
        API.removejscssfile(`${config.S2_BASE}${color}`, "css")
      );
      API.removejscssfile(`${config.S2_BASE}root-base-light.css`, "css");
      break;
  }
  setTimeout(() => {
    window.sofill.funs.updateStyle(config.ID_COLOR_STYLE, href_color);
  }, 1000);
  changeStyleMod();
}

changeThemeModeByApp();

export { iterLC, iterDC };
