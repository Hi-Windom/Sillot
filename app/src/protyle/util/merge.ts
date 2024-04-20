export const merge = (...options: any[]) => {
    // window.sout.tracker("invoked"); // 这里调用频繁
    const target: any = {};
    const merger = (obj: any) => {
        for (const prop in obj) {
            // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                    target[prop] = merge(target[prop], obj[prop]);
                } else {
                    target[prop] = obj[prop];
                }
            }
        }
    };
    for (let i = 0; i < options.length; i++) {
        merger(options[i]);
    }
    return target;
};
