export default function exSout() {
  // 参考资料：https://juejin.cn/post/6844904007102627847
  window.sout = {
    debug: true,
    log: (m: any) => {
      if (!window.sout.debug) return
      let t = typeof m === 'string' ? '%s' : '%o'
      console.log('%c' + t, "color:#858585;font-size: 12px", m)
    },
    slog: (m: any) => {
      if (!window.sout.debug) return
      let t = typeof m === 'string' ? '%s' : '%o'
      console.log('%c' + t, "color:#585858;font-size: 10px", m)
    },
    print: (m: any, head?: string) => {
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.log('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 32px",
          head,
          "color:#a8c8b8;font-size: 32px",
          m)
      } else {
        console.log('%c' + t, "color:#a8c8b8;font-size: 32px", m)
      }
    },
    info: (m: any, head?: string) => {
      if (!window.sout.debug) return
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.log('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: large",
          head,
          "color:lightblue;font-size: large",
          m)
      } else {
        console.log('%c%s> %c' + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:lightblue;font-size: large", m)
      }
    },
    success: (m: any, head?: string) => {
      if (!window.sout.debug) return
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.log('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 16px",
          head,
          "color:lime;font-size: 16px",
          m)
      } else {
        console.log('%c%s> %c' + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:lime;font-size: 16px", m)
      }
    },
    warn: (m: any, head?: string) => {
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.warn('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 16px",
          head,
          "color:yellow;font-size: 16px",
          m)
      } else {
        console.warn('%c%s> %c' + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:yellow;font-size: 16px", m)
      }
    },
    unsure: (m: any, head?: string) => {
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.warn('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 18px",
          head,
          "color:gold;font-size: 18px",
          m)
      } else {
        console.warn('%c%s> %c' + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:gold;font-size: 18px", m)
      }
    },
    ops: (m: any, head?: string) => {
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.warn('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 18px",
          head,
          "color:orangered;font-size: 18px",
          m)
      } else {
        console.warn('%c%s> %c' + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:orangered;font-size: 18px", m)
      }
    },
    error: (m: any, head?: string) => {
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.error('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: large",
          head,
          "font-size: large",
          m)
      } else {
        console.error('%c%s> %c' + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "font-size: large", m)
      }
    },
    good: (m: any, head?: string) => {
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.log('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 18px",
          head,
          "color:yellow;font-size: 18px",
          m)
      } else {
        console.log('%c%s> %c' + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:yellow;font-size: 18px", m)
      }
    },
    wink: (m: any, head?: string) => {
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.log('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 22px",
          head,
          "color:red;font-size: 40px",
          m)
      } else {
        console.log('%c%s> %c' + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:PaleVioletRed;font-size: 22px", m)
      }
    },
    bad: (m: any, head?: string) => {
      let t = typeof m === 'string' ? '%s' : '%o'
      if (head) {
        console.log('%c%s%c' + t,
          "padding: 2px 4px;background: #000;color: #fff;border-radius: 2px;font-size: 40px",
          head,
          "color:red;font-size: 40px",
          m)
      } else {
        console.log('%c%s> %c' + t, "color:#858585;font-size: 12px", Date().split("GMT")[0].split(" ").at(-2), "color:red;font-size: 40px", m)
      }
    },
    tracker: (m: any) => {
      if (!window.sout.debug) return
      let t = typeof m === 'string' ? '%s' : '%o'
      console.log('%c%s%c' + t,
        "padding: 2px 4px;margin: 2px;background: orange;color: white;border-radius: 2px;font-size: 16px",
        (new Error()).stack.split("\n")[2].trim().split(" ")[1],
        "padding: 2px 4px;color: #1BA1E2;font-size: 16px",
        m)
    },
    showAll: () => {
      window.sout.debug = true;
      window.sout.log("test");
      window.sout.slog("test");
      window.sout.print("test");
      window.sout.info("test");
      window.sout.success("test");
      window.sout.warn("test");
      window.sout.ops("test");
      window.sout.error("test");
      window.sout.good("test");
      window.sout.wink("test");
      window.sout.bad("test");
      window.sout.tracker("test");
    }
  }
  return 0
}