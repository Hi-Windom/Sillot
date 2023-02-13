// declare module 'react-dom'
declare module "monaco-editor-nls/locale/zh-hans";
declare module "*.jsx";
declare module "*.js";

// REF https://www.tslang.cn/docs/handbook/declaration-merging.html
interface Window {
  // Sillot extend
  Sillot: ISillot;
  nodebugger: any;
  _: any;
  __: ISillotDoubleUnderline;
  sout: ISout;
  React: any;
  ReactDOM: any;
}

interface ISillot {
  status: {
    IDBloaded: boolean;
    disableDocSetPadding: boolean;
  };
  funs: {
    hljsRender: any;
  };
  lute: Lute;
}

interface ISout {
  debug: boolean;
  showAll(): void;
  log(m: any): void;
  slog(m: any): void;
  print(m: any, head?: string): void;
  info(m: any, head?: string): void;
  success(m: any, head?: string): void;
  warn(m: any, head?: string): void;
  unsure(m: any, head?: string): void;
  ops(m: any, head?: string): void;
  error(m: any, head?: string): void;
  good(m: any, head?: string): void;
  wink(m: any, head?: string): void;
  bad(m: any, head?: string): void;
  tracker(m: any): void;
  table(m: Array<object>): void;
}

interface ISillotDoubleUnderline {
  ace: any;
  Swal: any;
  localforage: any;
  toastify: any;
  hottt: any;
}
