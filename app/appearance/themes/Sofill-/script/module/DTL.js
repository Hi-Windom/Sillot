import {
  insertCreateAfter,
  getTextWidth,
} from "./../utils/api.min.js";
import * as config from "./../config.js";


/**获取所有打开文档的标题元素 */
function getAllDocumentTitleElement() {
  return document.querySelectorAll(".protyle-title__input");
}


/** 为文档标题创建动态下划线 */
function rundynamicUnderline() {
  setInterval(dynamicUnderline, 200);
}

function dynamicUnderline() {
  var AllDocumentTitleElement = getAllDocumentTitleElement();
  for (let index = 0; index < AllDocumentTitleElement.length; index++) {
    const element = AllDocumentTitleElement[index];
    var line = createLine(element);
    var txt = getTileTxt(element);
    var maxWidth = element.offsetWidth;
    var Style = getComputedStyle(element, null);
    var font = Style.font;
    var width = getTextWidth(txt, font) + 13;
    if (width < 58) {
      width = 58;
    } //动态下划线最小宽度
    if (width > maxWidth) {
      width = maxWidth;
    } //不超过一行
    line.style.width = width + "px";
  }
}

function createLine(TitleElement) {
  var item = TitleElement.parentElement.children;
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    if (element.getAttribute("Line") != null) {
      return element;
    }
  }
  var line = insertCreateAfter(TitleElement, "div");
  line.setAttribute("Line", "true");
  line.setAttribute("class", "scc-dynamic");
  line.setAttribute("id", "doc-underline");
  line.style.opacity = "0.13";
  line.style.height = "1.3px";
  line.style.marginTop = "3.1px";
  line.style.marginBottom = "5.8px";
  line.style.backgroundImage =
    "linear-gradient(to right, #ff0000, #0070c0, #ff3399, #912997)"; //动态下划线颜色
  return line;
}

function getTileTxt(TitleElement) {
  return TitleElement.innerText;
}

(function (w, und) {
  Refresh();
})(window, undefined);

function Refresh() {
  if (config.clientMode != "body--mobile") {
    setTimeout(() => {
      rundynamicUnderline(); //为文档标题创建动态下划线
    }, 500);
  }
}
