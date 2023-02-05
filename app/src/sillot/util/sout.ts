export function exSout() {
  window.sout = {
    log: (m: string) => { console.log('%c' + m, "color:#858585;font-size: 12px") },
    slog: (m: string) => { console.log('%c' + m, "color:#585858;font-size: 10px") },
    print: (m: string) => { console.log('%c' + m, "color:#a8c8b8;font-size: 32px") },
    info: (m: string) => { console.log('%c' + m, "color:lightblue;font-size: large") },
    success: (m: string) => { console.log('%c' + m, "color:lime;font-size: 16px") },
    warn: (m: string) => { console.warn('%c' + m, "color:yellow;font-size: 16px") },
    unsure: (m: string) => { console.log('%c' + m, "color:gold;font-size: 18px") },
    ops: (m: string) => { console.log('%c' + m, "color:orangered;font-size: 18px") },
    error: (m: string) => { console.error('%c' + m, "font-size: large") },
    good: (m: string) => { console.log('%c' + m, "color:yellow;font-size: 18px") },
    wink: (m: string) => { console.log('%c' + m, "color:PaleVioletRed;font-size: 22px") },
    bad: (m: string) => { console.log('%c' + m, "color:red;font-size: 40px") }
  }
}