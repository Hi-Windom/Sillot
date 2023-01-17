import * as API from "./../utils/api.min.js";
var ball = document.createElement("div");
ball.id = "Sofill-MobileBall";
ball.style.visibility = "hidden";
ball.innerHTML = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Canonical</title><path d="M24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12C0 5.372 5.372 0 12 0c6.627 0 12 5.372 12 12zM12 2.92A9.08 9.08 0 002.92 12 9.08 9.08 0 0012 21.08 9.08 9.08 0 0021.081 12 9.08 9.08 0 0012 2.92zm0 16.722A7.64 7.64 0 014.36 12 7.64 7.64 0 0112 4.36 7.64 7.64 0 0119.641 12a7.64 7.64 0 01-7.64 7.641z"/></svg>`;
document.body.appendChild(ball);

window.sofill.history = [];

class PinchZoom {
  static hammerIt(elmid) {
    //const elm = document.getElementById(elmid);
    const elm = elmid;

    console.log("hammerIt begin elm", elm);
    const hammertime = new Hammer(elm, { touchAction: "pan-x pan-y" }); // 兼容x轴和y轴方向的滚动

    hammertime.get("pinch").set({
      enable: true,
    });

    console.log("hammertime", hammertime);

    let posX = 0,
      posY = 0,
      scale = 1,
      last_scale = 1,
      last_posX = 0,
      last_posY = 0,
      max_pos_x = 0,
      max_pos_y = 0,
      transform = "";
    const el = elm;

    hammertime.on(
      "panleft panright panup pandown tap press pdoubletap pan pinch panend pinchend",
      function (ev) {
        console.log(ev.type + " gesture detected.");
        if (elm.childNodes[1].getAttribute("contenteditable") == "true") {
          elm.style.transform = "";
          return;
        } else if (
          ev.type === "tap" &&
          window.sofill.cp.TapAlert_docReadOnly == true
        ) {
          API.通知("当前只读模式");
        }

        if (ev.type === "doubletap") {
          transform = "translate3d(0, 0, 0) " + "scale3d(2, 2, 1) ";
          scale = 2;
          last_scale = 2;
          try {
            if (
              window
                .getComputedStyle(el, null)
                .getPropertyValue("-webkit-transform")
                .toString() !== "matrix(1, 0, 0, 1, 0, 0)"
            ) {
              transform = "translate3d(0, 0, 0) " + "scale3d(1, 1, 1) ";
              scale = 1;
              last_scale = 1;
            }
          } catch (err) {}
          // tslint:disable-next-line: deprecation
          el.style.webkitTransform = transform;
          transform = "";
        }

        // pan
        if (scale !== 1) {
          posX = last_posX + ev.deltaX;
          posY = last_posY + ev.deltaY;
          max_pos_x = Math.ceil(((scale - 1) * el.clientWidth) / 2);
          max_pos_y = Math.ceil(((scale - 1) * el.clientHeight) / 2);
          if (posX > max_pos_x) {
            posX = max_pos_x;
          }
          if (posX < -max_pos_x) {
            posX = -max_pos_x;
          }
          if (posY > max_pos_y) {
            posY = max_pos_y;
          }
          if (posY < -max_pos_y) {
            posY = -max_pos_y;
          }
        }

        // pinch
        if (ev.type === "pinch") {
          scale = Math.max(0.999, Math.min(last_scale * ev.scale, 4));
        }
        if (ev.type === "pinchend") {
          last_scale = scale;
        }

        // panend
        if (ev.type === "panend") {
          last_posX = posX < max_pos_x ? posX : max_pos_x;
          last_posY = posY < max_pos_y ? posY : max_pos_y;
        }

        if (scale !== 1) {
          transform =
            "translate3d(" +
            posX +
            "px," +
            posY +
            "px, 0) " +
            "scale3d(" +
            scale +
            ", " +
            scale +
            ", 1)";
        }

        if (transform) {
          // tslint:disable-next-line: deprecation
          el.style.webkitTransform = transform;
        }
      }
    );
  }
}
setTimeout(() => {
  ball.style.visibility = "visible";
  var hammertime = new Hammer.Manager(ball);
  hammertime.add(new Hammer.Press());
  hammertime.add(new Hammer.Tap({ event: "doubletap", taps: 2 }));
  hammertime.add(new Hammer.Tap({ event: "singletap" }));
  hammertime.get("doubletap").recognizeWith("singletap");
  hammertime.get("singletap").requireFailure("doubletap");
  hammertime
    .on("doubletap", function (ev) {
      // API.通知("双击事件");
      document.body.classList.contains("music-mode")
        ? document.body.classList.remove("music-mode")
        : document.body.classList.add("music-mode");
    })
    .on("singletap", function (ev) {
      let id = API.getFocusedDocID();
      API.通知(id);
    })
    .on("press", function (ev) {
      console.log(ev); //输出拖移事件对象 alert("按压事件");
      window.location.reload();
    });
  var elm = document.querySelector("#editor>.protyle-content");
  PinchZoom.hammerIt(elm);
}, 1000);

setTimeout(() => {
  // 选择需要观察变动的节点
  const targetNode = document.querySelector(
    "#editor>.protyle-content>.protyle-background"
  );
  const targetToolbar = document.querySelector(".toolbar");

  // 观察器的配置（需要观察什么变动）
  const config = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
  };

  // 当观察到变动时执行的回调函数
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        console.log("A child node has been added or removed.");
      } else if (mutation.type === "attributes") {
        console.log(
          "The " + mutation.attributeName + " attribute was modified."
        );
        console.log(mutation);
        if (
          mutation.attributeName == "data-node-id" &&
          mutation.oldValue != null
        ) {
          window.sofill.history.push(mutation.oldValue);
          console.warn(window.sofill.history);
        }
        if (mutation.attributeName == "href") {
          let e = document.querySelector("#toolbarEdit");
          if (mutation.oldValue == "#iconEdit") {
            e.style.color = "var(--b3-font-color1)";
            e.style.filter = "saturate(5.8) brightness(0.58)";
          } else {
            e.style.color = "var(--b3-theme-on-surface)";
            e.style.filter = "none";
          }
        }
      }
    }
  };

  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback);

  // 以上述配置开始观察目标节点
  observer.observe(targetNode, config);
  observer.observe(targetToolbar, config);

  // 停止对某目标的监听
  // observer.unobserve(target);
  // 终止对所有目标的监听
  // observer.disconnect();
}, 1000);

// 节流函数
function throttle(fn, interval, _this) {
  let lastTime = 0;
  // tslint:disable-next-line:only-arrow-functions
  return function (...args) {
    const nowTime = +new Date();
    if (nowTime - lastTime >= interval) {
      fn.apply(_this, args);
      lastTime = nowTime;
    }
  };
}

ball.addEventListener("touchstart", function (e) {
  e.stopPropagation(); // 阻止冒泡

  // 删除过渡效果
  this.style.transition = "none";
  // 去除透明, 并清除定时器
  this.style.opacity = 1;
  clearTimeout(this.timer);

  this.l = this.offsetLeft; // 获取初始状态下悬浮球的左偏移量
  this.x = e.targetTouches[0].clientX; // 获取初始状态下悬浮球的上偏移量
  this.h = this.offsetTop; // 获取初次触屏点距离屏幕左端的距离
  this.y = e.targetTouches[0].clientY; // 获取初次触屏点距离屏幕顶端的距离
});

const ballMove = function (e) {
  e.stopPropagation();

  this._x = e.targetTouches[0].clientX; // 移动中实时获取触屏点距离屏幕左端的距离
  this._y = e.targetTouches[0].clientY; // 移动中实时获取触屏点距离屏幕顶端的距离
  let newLeft = this._x - (this.x - this.l); // 移动中实时计算悬浮球的左偏移量
  let newTop = this._y - (this.y - this.h); // 移动中实时计算悬浮球的上偏移量

  this.style.left = newLeft + "px";
  this.style.top = newTop + "px";
};

ball.addEventListener("touchmove", function (e) {
  if (!this.fn) {
    this.fn = throttle(ballMove, 10, this);
    this.fn(e);
  } else {
    this.fn(e);
  }
});

ball.addEventListener("touchend", function (e) {
  e.stopPropagation();

  // 弹回添加过渡效果
  this.style.transition = "all 0.3s ease";

  const ballWidth = this.offsetWidth; // 悬浮球宽度
  const ballHeight = this.offsetHeight; // 悬浮球高度
  const l = this.offsetLeft; // 手指离开屏幕时悬浮球左偏移量
  const h = this.offsetTop; // 手指离开屏幕时悬浮球上偏移量
  const clientWidth = document.documentElement.clientWidth; // 屏幕宽度
  const clientHeight = document.documentElement.clientHeight; // 屏幕高度

  // 悬浮球移出屏幕左侧, 弹回最左
  if (l <= 0) {
    this.style.left = 0 + "px";
  }
  // 悬浮球移出屏幕右侧, 弹回最右
  if (l >= clientWidth - ballWidth) {
    this.style.left = clientWidth - ballWidth + "px";
  }
  // 悬浮球移出屏幕顶部, 弹回最上
  if (h <= 0) {
    this.style.top = 0 + "px";
  } else if (h >= clientHeight - ballHeight) {
    // 悬浮球移出屏幕底部, 弹回最底
    this.style.top = clientHeight - ballHeight + "px";
  } else if (l <= (clientWidth - ballWidth) / 2) {
    // 悬浮球未移过中间线, 弹回最左, 否则弹回最右
    this.style.left = 0 + "px";
  } else {
    this.style.left = clientWidth - ballWidth + "px";
  }

  // 添加定时器, 3s后悬浮球变透明
  this.timer = setTimeout(() => {
    this.style.opacity = 0.31;
  }, 3000);
});
