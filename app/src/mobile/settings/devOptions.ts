import {openModel} from "../menu/model";

export const initDevOptions = () => {
    window.sout.tracker("invoked");
    openModel({
        title: "开发者选项",
        icon: "iconBug",
        html: genHTML(),
        bindEvent(modelMainElement: HTMLElement) {
            modelMainElement.firstElementChild.addEventListener("click", (event) => {
                const target = event.target as HTMLElement;
                while (target && !target.isSameNode(modelMainElement)) {
                    if (target.id === "toggle_vConsole") {
                        if (document.querySelector("#toolbarConsole")?.getAttribute("data-mode") === "0") {
                            window.vConsole?.showSwitch();
                            document.querySelector("#toolbarConsole")?.setAttribute("data-mode", "1");
                          } else {
                            window.vConsole?.hideSwitch();
                            document.querySelector("#toolbarConsole")?.setAttribute("data-mode", "0");
                          }
                        event.preventDefault();
                        event.stopPropagation();
                        break;
                    }
                    if (target.id.startsWith("JSAndroid_")) {
                        const functionName = target.id.replace("JSAndroid_", "");
                        console.log("target: window.JSAndroid.", functionName)
                         // 使用Object.prototype.hasOwnProperty来检查函数是否存在
                        if (Object.prototype.hasOwnProperty.call(window.JSAndroid, functionName) && typeof window.JSAndroid[functionName] === 'function') {
                            // 调用对应的函数
                            window.JSAndroid[functionName]();
                        }
                        event.preventDefault();
                        event.stopPropagation();
                        break;
                    }
                    // if (target.id === "JSAndroid_androidReboot") {
                    //     window.JSAndroid?.androidReboot();
                    //     event.preventDefault();
                    //     event.stopPropagation();
                    //     break;
                    // }
                }
            })
        }
    });
};

function genHTML() {
    return /*html*/ `
<div>
    <div class="b3-label">
        切换 vConsole 浮标是否显示
        <div class="fn__hr"></div>
        <button class="b3-button b3-button--outline fn__block" id="toggle_vConsole">
            <svg><use xlink:href="#iconTerminal"></use></svg> 切换 vConsole 浮标是否显示
        </button>
        <div class="b3-label__text">如果已经显示，则隐藏；如果已经隐藏，则显示。</div>
    </div>
    <div class="b3-label">
        使用非捆绑的前端产物
        <div class="fn__hr"></div>
        <button disabled class="b3-button b3-button--outline fn__block" id="unbundled_web">
        使用非捆绑的前端产物
        </button>
        <div class="b3-label__text">TODO</div>
    </div>
    <div class="b3-label">
        JSAndroid 接口测试
        <div class="fn__hr"></div>
        <button class="b3-button b3-button--outline fn__block" id="JSAndroid_androidReboot">
        androidReboot
        </button>
        <div class="fn__hr"></div>
        <button class="b3-button b3-button--outline fn__block" id="JSAndroid_restartSillotAndroid">
        restartSillotAndroid
        </button>
        <div class="fn__hr"></div>
        <button class="b3-button b3-button--outline fn__block" id="JSAndroid_exitSillotAndroid">
        exitSillotAndroid
        </button>
        <div class="b3-label__text">嘿嘿嘿</div>
    </div>
</div>
    `
}
