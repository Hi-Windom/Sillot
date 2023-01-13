import { CP } from "./XML/CPDialog.js";
import * as config from "../config.js";
class Dialog extends EventTarget {
  constructor(options) {
    super();

    // 默认配置
    let defalultOptions = {
      width: "30%",
      height: "250px",
      title: "测试标题",
      XML: "测试内容",
      dragable: false, //是否可拖拽
      maskable: true, //是否有遮罩
      isCancel: false, //是否有取消
      success() {},
      cancel() {},
    };
    // 合并配置；
    this.opts = { ...defalultOptions, ...options };
    this.init();
  }
  // 初始化组件方法
  init() {
    this.createElement();
    this.addEventListener("success", this.opts.success);
    if (!this.opts.maskable) {
      this.divEles.querySelector(".SCC-wrapper").style.display = "none";
    }
    if (this.opts.dragable) {
      this.drag();
    }
  }
  // 创建节点
  createElement() {
    let divEles = document.createElement("div");
    divEles.id = "SC-CP";
    divEles.innerHTML = `<div class="SCC-wrapper"></div><div class="b3-dialog--open"><div class="SCC-dialog b3-dialog"></div></div></div>`;
    divEles.style.display = "none";
    divEles.classList.add(config.AliaName);
    document.body.appendChild(divEles);
    this.divEles = divEles;
  }

  sure(value) {
    let success = new CustomEvent("success", {
      detail: value,
    });
    this.dispatchEvent(success);
  }
  // 关闭组件
  close() {
    this.divEles.style.display = "none";
  }
  // 销毁组件
  dispose() {
    this.divEles.remove();
  }
  // 打开组件
  async open(callback=()=>{}) {
    this.divEles.style.display = "block";
    if (typeof callback === "function") {
      callback();
    }
  }
  drag() {
    let kDialog = this.divEles.querySelector(".SCC-dialog");
    kDialog.onmousedown = function (e) {
      let x = e.clientX - this.offsetLeft;
      let y = e.clientY - this.offsetTop;
      this.onmousemove = function (e) {
        let xx = e.clientX;
        let yy = e.clientY;
        this.style.left = xx - x + "px";
        this.style.top = yy - y + "px";
      };
    };
    document.onmouseup = function () {
      kDialog.onmousemove = "";
    };
  }
}

// 通过继承扩展功能；
export class ConfirmDialog extends Dialog {
  constructor(options) {
    super(options);
    this.create();
    this.addEleEvent();
  }
  create() {
    let olds = document.querySelectorAll("#SC-ConfirmDialog");
    olds.forEach((o)=>{o.remove()});
    this.divEles.innerHTML = this.opts.XML;
    this.divEles.id = "SC-ConfirmDialog";
  }
  sure() {
    super.sure();
  }
  // 添加事件
  addEleEvent() {
    // 事件委托
    let SCCDialog = this.divEles.querySelector(".SCC-dialog");
    SCCDialog.addEventListener("click", (e) => {
      //  console.log(e.target);
      let cl = e.target.classList;
      if (cl.contains("SCC-close") || cl.contains("b3-dialog__scrim")) {
        this.dispose();
      }
      if (cl.contains("SCC-default") || cl.contains("b3-button--cancel")) {
        this.opts.cancel();
        this.dispose();
      }
      if (cl.contains("SCC-primary")) {
        this.sure();
        this.dispose();
      }
    });
  }
}
export class CPDialog extends Dialog {
  constructor(options) {
    super(options);
    this.create();
    this.addEleEvent();
  }
  create() {
    this.divEles.innerHTML = CP;
  }
  // 添加事件
  addEleEvent() {
    // 事件委托
    let SCCDialog = this.divEles.querySelector(".SCC-dialog");
    SCCDialog.addEventListener("click", (e) => {
      //  console.log(e.target);
      let cl = e.target.classList;
      if (cl.contains("SCC-close") || cl.contains("b3-dialog__scrim")) {
        this.close();
      }
      if (cl.contains("SCC-default") || cl.contains("b3-button--cancel")) {
        this.opts.cancel();
        this.close();
      }
    });
  }
}
