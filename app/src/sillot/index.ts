import { highlightRender } from "../protyle/markdown/highlightRender";
const lodash = require("lodash");
const localforage = require("localforage");
import { exAce } from "./ace";
import { Toastify } from "./react-toastify";
import { HotToast } from "./react-hot-toast";
import * as React from "react"; // 兼容性好
import * as ReactDOM from "react-dom"; // 兼容性好
import Swal from "sweetalert2";
import exSout from "./util/sout";
import { MusicPlayer } from "./react-music-player";
import {
  focusBlock,
  focusByOffset,
  focusSideBlock,
  focusByRange,
} from "../protyle/util/selection";
import { bS } from "./bridge";

export class SillotEnv {
  constructor() {
    exSout();
    window.Sillot = {
      status: { IDBloaded: false, disableDocSetPadding: false },
      funs: { hljsRender: highlightRender },
      lute: null,
    };
    window.__ = {
      ace: null,
      Swal: Swal,
      localforage: localforage,
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
  }
}
