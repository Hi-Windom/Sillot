// import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import loader from "@monaco-editor/loader";
const path = require("path");

function ensureFirstBackSlash(str) {
  return str.length > 0 && str.charAt(0) !== "/" ? "/" + str : str;
}

function uriFromPath(_path) {
  const pathName = path.resolve(_path).replace(/\\/g, "/");
  return encodeURI("file://" + ensureFirstBackSlash(pathName));
}

export function eMonaco() {
  (function () {
    // create div to avoid needing a HtmlWebpackPlugin template
    var d = document.createElement("div");
    d.id = "root1";
    d.setAttribute(
      "style",
      "width:800px; height:600px; border:1px solid #ccc;"
    );
    document.body.appendChild(d);
  })();
	/// #if !BROWSER
  let pp = path.join(__dirname, "../../app/node_modules/monaco-editor/min/vs"); // 思源路径特殊
	// console.log(pp)
  loader.config({
    paths: {
      vs: uriFromPath(pp),
    },
    "vs/nls": {
      availableLanguages: {
        "*": "zh-cn",
      },
    },
  });
	/// #endif
  loader.init().then((monacoInstance) => {
    console.log("Here is the monaco instance", monacoInstance);
    monacoInstance.editor.create(document.getElementById("root1"), {
      value: "123",
      contextmenu: true,
      language: "javascript",
      theme: "vs-dark",
    });
  });
}
