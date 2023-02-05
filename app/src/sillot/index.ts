import { highlightRender } from "../protyle/markdown/highlightRender";
const lodash = require('lodash');
const localforage = require('localforage');
import { exAce } from './ace'
import { exApp1 } from './vue-toast-notification'
import { Toastify } from './react-toastify'
import { HotToast } from "./react-hot-toast";
import * as React from 'react'; // 兼容性好
import * as ReactDOM from 'react-dom'; // 兼容性好
import Swal from 'sweetalert2'
import { exSout } from "./util/sout";
import {eMonaco} from './monaco-editor.js'

export class SillotEnv {
  constructor() {
    exSout();
    window.Sillot = { status: { IDBloaded: false, disableDocSetPadding: false }, funs: { hljsRender: highlightRender } }
    window.__ = {
      ace: null,
      Swal: Swal,
      localforage: localforage,
      toast: null,
      toastify: new Toastify({ id: 'app1', limit: 5, theme: "colored" }),
      hottt: new HotToast({id: "app3"}),
    }
    window._ = lodash;
    exApp1();
    window.React = React;
    window.ReactDOM = ReactDOM;
    exAce();
    // eMonaco();
  }
}