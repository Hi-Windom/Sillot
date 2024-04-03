import {addScript, addScriptSync} from "../protyle/util/addScript";
import {Constants} from "../constants";
import {onMessage} from "./util/onMessage";
import {genUUID} from "../util/genID";
import {hasClosestBlock, hasClosestByAttribute, hasTopClosestByClassName} from "../protyle/util/hasClosest";
import {Model} from "../layout/Model";
import "../assets/scss/mobile.scss";
import {Menus} from "../menus";
import {addBaseURL, getIdFromSYProtocol, isSYProtocol, setNoteBook} from "../util/pathName";
import {handleTouchEnd, handleTouchMove, handleTouchStart} from "./util/touch";
import {fetchGet, fetchPost} from "../util/fetch";
import {initFramework} from "./util/initFramework";
import {addGA, initAssets, loadAssets} from "../util/assets";
import {bootSync} from "../dialog/processSystem";
import {initMessage, showMessage} from "../dialog/message";
import {goBack} from "./util/MobileBackFoward";
import {hideKeyboardToolbar, showKeyboardToolbar} from "./util/keyboardToolbar";
import {getLocalStorage, writeText} from "../protyle/util/compatibility";
import {getCurrentEditor, openMobileFileById} from "./editor";
import {getSearch} from "../util/functions";
import {initRightMenu} from "./menu";
import {openChangelog} from "../boot/openChangelog";
import {registerServiceWorker} from "../util/serviceWorker";
import {loadPlugins} from "../plugin/loader";
import { SillotEnv } from "../sillot";
import {saveScroll} from "../protyle/scroll/saveScroll";
import {removeBlock} from "../protyle/wysiwyg/remove";
import {isNotEditBlock} from "../protyle/wysiwyg/getBlock";
import {updateCardHV} from "../card/util";
import { exportIDB } from "../sillot/util/sillot-idb-backup-and-restore";
import {hideAllElements, hideElements} from "../protyle/ui/hideElements";

class App {
    public plugins: import("../plugin").Plugin[] = [];
    public appId: string;

    constructor() {
        if (!window.webkit?.messageHandlers && !window.JSAndroid) {
            registerServiceWorker(`${Constants.SERVICE_WORKER_PATH}?v=${Constants.SIYUAN_VERSION}`);
        }
        addScriptSync(`${Constants.PROTYLE_CDN}/js/lute/lute.min.js?v=${Constants.SIYUAN_VERSION}`, "protyleLuteScript");
        addScript(`${Constants.PROTYLE_CDN}/js/protyle-html.js?v=${Constants.SIYUAN_VERSION}`, "protyleWcHtmlScript");
        addBaseURL();
        this.appId = Constants.SIYUAN_APPID;
        window.siyuan = {
            zIndex: 10,
            notebooks: [],
            transactions: [],
            reqIds: {},
            backStack: [],
            dialogs: [],
            blockPanels: [],
            mobile: {},
            ws: new Model({
                app: this,
                id: genUUID(),
                type: "main",
                msgCallback: (data) => {
                    this.plugins.forEach((plugin) => {
                        plugin.eventBus.emit("ws-main", data);
                    });
                    onMessage(this, data);
                }
            })
        };
        new SillotEnv();
        window.Sillot.androidRestartSiYuan = ()=>{
            const overlay = document.querySelector('#SillotOverlay') as HTMLElement;
            overlay.style.display = "block";
            exportIDB().then(() => {
            hideAllElements(["util"]);
            fetchPost("/api/sillot/androidReboot", {force: true}, (response) => {
                window.location.href = "siyuan://androidRestartSiYuan";
            });
            })
        };
        // 不能使用 touchstart，否则会被 event.stopImmediatePropagation() 阻塞
        window.addEventListener("click", (event: MouseEvent & { target: HTMLElement }) => {
            if (!window.siyuan.menus.menu.element.contains(event.target) && !hasClosestByAttribute(event.target, "data-menu", "true")) {
                window.siyuan.menus.menu.remove();
            }
            const copyElement = hasTopClosestByClassName(event.target, "protyle-action__copy");
            if (copyElement) {
                let text = copyElement.parentElement.nextElementSibling.textContent.trimEnd();
                text = text.replace(/\u00A0/g, " "); // Replace non-breaking spaces with normal spaces when copying https://github.com/siyuan-note/siyuan/issues/9382
                writeText(text);
                showMessage(window.siyuan.languages.copied, 2000);
                event.preventDefault();
            }
        });
        window.addEventListener("beforeunload", () => {
            window.siyuan.mobile.editor?.protyle ? saveScroll(window.siyuan.mobile.editor.protyle) : null;
        }, false);
        window.addEventListener("pagehide", () => {
            window.siyuan.mobile.editor?.protyle ? saveScroll(window.siyuan.mobile.editor.protyle) : null;
        }, false);
        // 判断手机横竖屏状态
        window.matchMedia("(orientation:portrait)").addEventListener("change", () => {
            updateCardHV();
        });
        fetchPost("/api/system/getConf", {}, async (confResponse) => {
            confResponse.data.conf.keymap = Constants.SIYUAN_KEYMAP;
            window.siyuan.config = confResponse.data.conf;
            await loadPlugins(this);
            getLocalStorage(() => {
                fetchGet(`/appearance/langs/${window.siyuan.config.appearance.lang}.json?v=${Constants.SIYUAN_VERSION}`, (lauguages: IObject) => {
                    window.siyuan.languages = lauguages;
                    window.siyuan.menus = new Menus(this);
                    document.title = window.siyuan.languages.siyuanNote;
                    bootSync();
                    loadAssets(confResponse.data.conf.appearance);
                    initMessage();
                    initAssets();
                    fetchPost("/api/setting/getCloudUser", {}, userResponse => {
                        window.siyuan.user = userResponse.data;
                        fetchPost("/api/system/getEmojiConf", {}, emojiResponse => {
                            window.siyuan.emojis = emojiResponse.data as IEmoji[];
                            setNoteBook(() => {
                                initRightMenu(this); // 前置避免 initFramework crash 影响
                                console.log("initRightMenu() resolved");
                                initFramework(this, confResponse.data.start);
                                console.log("initFramework() resolved");
                                openChangelog();
                            });
                        });
                    });
                    addGA();
                });
            });
            document.addEventListener("touchstart", handleTouchStart, false);
            document.addEventListener("touchmove", handleTouchMove, false);
            document.addEventListener("touchend", (event) => {
                handleTouchEnd(event, siyuanApp);
            }, false);
            // 移动端删除键 https://github.com/siyuan-note/siyuan/issues/9259
            window.addEventListener("keydown", (event) => {
                if (getSelection().rangeCount > 0) {
                    const range = getSelection().getRangeAt(0);
                    const editor = getCurrentEditor();
                    if (range.toString() === "" &&
                        editor && editor.protyle.wysiwyg.element.contains(range.startContainer) &&
                        !event.altKey && (event.key === "Backspace" || event.key === "Delete")) {
                        const nodeElement = hasClosestBlock(range.startContainer);
                        if (nodeElement && isNotEditBlock(nodeElement)) {
                            nodeElement.classList.add("protyle-wysiwyg--select");
                            removeBlock(editor.protyle, nodeElement, range, event.key);
                            event.stopPropagation();
                            event.preventDefault();
                            return;
                        }
                    }
                }
            });
        });
    }
}

const siyuanApp = new App();

// https://github.com/siyuan-note/siyuan/issues/8441
window.reconnectWebSocket = () => {
    window.siyuan.ws.send("ping", {});
    window.siyuan.mobile.files.send("ping", {});
    window.siyuan.mobile.editor?.protyle.ws.send("ping", {});
    window.siyuan.mobile.popEditor?.protyle.ws.send("ping", {});
};
window.goBack = goBack;
window.showKeyboardToolbar = (height) => {
    document.getElementById("keyboardToolbar").setAttribute("data-keyboardheight", (height ? height : window.outerHeight / 2 - 42).toString());
    showKeyboardToolbar();
};
window.hideKeyboardToolbar = hideKeyboardToolbar;
window.openFileByURL = (openURL) => {
    if (openURL && isSYProtocol(openURL)) {
        openMobileFileById(siyuanApp, getIdFromSYProtocol(openURL),
            getSearch("focus", openURL) === "1" ? [Constants.CB_GET_ALL, Constants.CB_GET_HL] : [Constants.CB_GET_HL, Constants.CB_GET_CONTEXT, Constants.CB_GET_ROOTSCROLL]);
        return true;
    }
    return false;
};
