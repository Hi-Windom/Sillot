import {
  addinsertCreateElement,
} from "./../../utils/api.min.js";
import * as config from "./../../config.js";

/** 为打开文档的标题下显示文档创建日期 */
function showDocumentCreationDate() {
  setInterval(DocumentCreationDate, 300);
}

function DocumentCreationDate() {
  var allDocumentTitleElement = getAllDocumentTitleElement();
  for (let index = 0; index < allDocumentTitleElement.length; index++) {
    const element = allDocumentTitleElement[index];
    var documentCreatTimeElement = creatTimeSpanElement(element.parentElement);
    var spanTxt = documentCreatTimeElement.innerText;
    if (spanTxt == "" || spanTxt == "日期获取中……") {
      var documentCreatTimeTxt = getDocumentTime(element);
      documentCreatTimeElement.innerText = documentCreatTimeTxt;
    }
  }
}

/**获取所有打开文档的标题元素 */
function getAllDocumentTitleElement() {
  return document.querySelectorAll(".protyle-title__input");
}

/**为文档标题元素下创建时间容器元素 */
function creatTimeSpanElement(tilteElement) {
  var item = tilteElement.children;
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    if (element.getAttribute("documentCreatTimeElement") != null) {
      return element;
    }
  }
  var documentCreatTimeElement = addinsertCreateElement(tilteElement, "span");
  documentCreatTimeElement.setAttribute("documentCreatTimeElement", "true");
  documentCreatTimeElement.style.display = "block";
  documentCreatTimeElement.style.marginLeft = "7px";
  documentCreatTimeElement.style.marginBottom = "0px";
  documentCreatTimeElement.style.fontSize = "70%";
  documentCreatTimeElement.style.color = "#484550";
  documentCreatTimeElement.style.opacity = "0.58";
  return documentCreatTimeElement;
}

/** 获得这个文档的创建时间 */
function getDocumentTime(tilteElement) {
  var tS =
    tilteElement.parentElement.previousElementSibling.getAttribute(
      "data-node-id"
    );
  if (tS == null) {
    return "";
  }
  var year = tS.substring(0, 4);
  var moon = tS.substring(4, 6);
  var day = tS.substring(6, 8);
  var hour = tS.substring(8, 10);
  var minute = tS.substring(10, 12);
  var second = tS.substring(12, 14);
  return "since " + year + "-" + moon + "-" + day;
}


(function (w, und) {
  Refresh();
})(window, undefined);

function Refresh() {
  if (config.clientMode != "body--mobile") {
    setTimeout(() => {
      showDocumentCreationDate(); //为打开文档标题下面显示文档创建日期
    }, 500);
  }
}
