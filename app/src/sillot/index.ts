import { highlightRender } from "../protyle/render/highlightRender";
const lodash = require("lodash");
import { exAce } from "./ace";
import { Toastify } from "./react-toastify";
import { HotToast } from "./react-hot-toast";
import * as React from "react"; // 兼容性好
import * as ReactDOM from "react-dom"; // 兼容性好
import Swal from "sweetalert2";
import {sout} from 'sofill/core'
import { MusicPlayer } from "./react-music-player";
import VConsole from 'vconsole';
import {
  focusBlock,
  focusByOffset,
  focusSideBlock,
  focusByRange,
} from "../protyle/util/selection";
import { bS } from "./bridge";

export class SillotEnv {
  constructor() {
    window.sout = sout();
    window.Sillot = {
      status: { IDBloaded: false, disableDocSetPadding: false },
      funs: { hljsRender: highlightRender },
      lute: null,
      android: {},
    };
    window.__ = {
      ace: null,
      Swal: Swal,
      toastify: new Toastify({ id: "app1", limit: 5, theme: "colored" }),
      hottt: new HotToast({ id: "app3" }),
    };
    window._ = lodash;
    window.React = React;
    window.ReactDOM = ReactDOM;
    exAce();
    // new MusicPlayer({id: 'app4'})
    window.nodebugger = {
      focusBlock: focusBlock,
      focusByOffset: focusByOffset,
      focusSideBlock: focusSideBlock,
      focusByRange: focusByRange,
      /// #if !BROWSER
      bS: new bS(),
      ///#endif
    };
    window.vConsole = new VConsole({ theme: 'dark' });
    window.vConsole.hideSwitch();

    // 接下来即可照常使用 `console` 等方法
    console.log(window.vConsole.version);
    // 结束调试后，可移除掉
    // window.vConsole.destroy();

  }
}
