/*
需要在 react-hot-toast 的 index.d.ts 中修改声明，具体如下：
// declare const Toaster: react.FC<ToasterProps>;
declare const Toaster: React;
*/
import toast, { Toaster } from 'react-hot-toast';
import * as React from "react";
import * as ReactDOM from "react-dom/client";

export class HotToast {
  public readonly root: any;
  constructor(props: {
    id: string;
  }) {
    this.root = ReactDOM.createRoot(document.getElementById(props.id));
    this.root.render(<><Toaster /></>)
  }

  public alert(message: string, options?: any) {
    toast(message, options);
  }
}