import { highlightRender } from "../protyle/markdown/highlightRender";
const lodash = require('lodash');
const localforage = require('localforage');
import { exAce } from './ace'
import { Toastify } from './react-toastify'
import { HotToast } from "./react-hot-toast";
import * as React from 'react'; // 兼容性好
import * as ReactDOM from 'react-dom'; // 兼容性好
import Swal from 'sweetalert2'
import { exSout } from "./util/sout";
import {eMonaco} from './monaco-editor.js'
import { MusicPlayer } from "./react-music-player";

export class SillotEnv {
  constructor() {
    exSout();
    window.Sillot = { status: { IDBloaded: false, disableDocSetPadding: false }, funs: { hljsRender: highlightRender } }
    window.__ = {
      ace: null,
      Swal: Swal,
      localforage: localforage,
      toastify: new Toastify({ id: 'app1', limit: 5, theme: "colored" }),
      hottt: new HotToast({id: "app3"}),
    }
    window._ = lodash;
    window.React = React;
    window.ReactDOM = ReactDOM;
    exAce();
    // eMonaco();
    new MusicPlayer({id: 'app4'})
  }
}