import { Constants } from "./constants";
import { Menus } from "./menus";
import { Model } from "./layout/Model";
import { onGetConfig } from "./util/onGetConfig";
import "./assets/scss/base.scss";
import { initBlockPopover } from "./block/popover";
import { account } from "./config/account";
import { addScript, addScriptSync } from "./protyle/util/addScript";
import { genUUID } from "./util/genID";
import { fetchGet, fetchPost } from "./util/fetch";
import { addBaseURL, setNoteBook } from "./util/pathName";
import { openFileById } from "./editor/util";
import {
    bootSync,
    downloadProgress,
    processSync, progressBackgroundTask,
    progressLoading,
    progressStatus,
    setTitle,
    transactionError
} from "./dialog/processSystem";
import { promiseTransactions } from "./protyle/wysiwyg/transaction";
import { initMessage } from "./dialog/message";
import { resizeDrag } from "./layout/util";
import { getAllTabs } from "./layout/getAll";
import { getLocalStorage } from "./protyle/util/compatibility";
import { importIDB } from './util/sillot-idb-backup-and-restore'
import { highlightRender } from "./protyle/markdown/highlightRender";
const lodash = require('lodash');
const ace = require('brace')
require('brace/mode')
require('brace/theme/monokai')
require('brace/ext/language_tools') //很重要 自动补全 提示


class App {
    constructor() {
        addScriptSync(`${Constants.PROTYLE_CDN}/js/lute/lute.min.js?v=${Constants.SIYUAN_VERSION}`, "protyleLuteScript");
        addScript(`${Constants.PROTYLE_CDN}/js/protyle-html.js?v=${Constants.SIYUAN_VERSION}`, "protyleWcHtmlScript");
        addBaseURL();
        window.siyuan = {
            transactions: [],
            reqIds: {},
            backStack: [],
            layout: {},
            dialogs: [],
            blockPanels: [],
            ctrlIsPressed: false,
            altIsPressed: false,
            ws: new Model({
                id: genUUID(),
                type: "main",
                msgCallback: (data) => {
                    if (data) {
                        switch (data.cmd) {
                            case "progress":
                                progressLoading(data);
                                break;
                            case "setLocalStorageVal":
                                window.siyuan.storage[data.data.key] = data.data.val;
                                break;
                            case "rename":
                                getAllTabs().forEach((tab) => {
                                    if (tab.headElement) {
                                        const initTab = tab.headElement.getAttribute("data-initdata");
                                        if (initTab) {
                                            const initTabData = JSON.parse(initTab);
                                            if (initTabData.rootId === data.data.id) {
                                                tab.updateTitle(data.data.title);
                                            }
                                        }
                                    }
                                });
                                break;
                            case "unmount":
                                getAllTabs().forEach((tab) => {
                                    if (tab.headElement) {
                                        const initTab = tab.headElement.getAttribute("data-initdata");
                                        if (initTab) {
                                            const initTabData = JSON.parse(initTab);
                                            if (data.data.box === initTabData.notebookId) {
                                                tab.parent.removeTab(tab.id);
                                            }
                                        }
                                    }
                                });
                                break;
                            case "removeDoc":
                                getAllTabs().forEach((tab) => {
                                    if (tab.headElement) {
                                        const initTab = tab.headElement.getAttribute("data-initdata");
                                        if (initTab) {
                                            const initTabData = JSON.parse(initTab);
                                            if (data.data.ids.includes(initTabData.rootId)) {
                                                tab.parent.removeTab(tab.id);
                                            }
                                        }
                                    }
                                });
                                break;
                            case "statusbar":
                                progressStatus(data);
                                break;
                            case "downloadProgress":
                                downloadProgress(data.data);
                                break;
                            case "txerr":
                                transactionError(data);
                                break;
                            case "syncing":
                                processSync(data);
                                break;
                            case "backgroundtask":
                                progressBackgroundTask(data.data.tasks);
                                break;
                            case "refreshtheme":
                                if (!window.siyuan.config.appearance.customCSS && data.data.theme.indexOf("custom.css") > -1) {
                                    return;
                                }
                                if ((window.siyuan.config.appearance.mode === 1 && window.siyuan.config.appearance.themeDark !== "默认主题 midnight") || (window.siyuan.config.appearance.mode === 0 && window.siyuan.config.appearance.themeLight !== "默认主题 daylight")) {
                                    (document.getElementById("themeStyle") as HTMLLinkElement).href = data.data.theme;
                                } else {
                                    (document.getElementById("themeDefaultStyle") as HTMLLinkElement).href = data.data.theme;
                                }
                                break;
                            case "createdailynote":
                                openFileById({ id: data.data.id, action: [Constants.CB_GET_FOCUS] });
                                break;
                            case "openFileById":
                                openFileById({id: data.data.id, action: [Constants.CB_GET_FOCUS]});
                                break;
                        }
                    }
                }
            }),
            menus: new Menus()
        };
        window.Sillot = { status: { IDBloaded: false, disableDocSetPadding: false }, funs: { hljsRender: highlightRender } }
        fetchPost("/api/system/getConf", {}, response => {
            window.siyuan.config = response.data.conf;
            let workspaceName: string = window.siyuan.config.system.workspaceDir.replaceAll("\\","/").split("/").at(-1)
            // console.log(workspaceName)
            fetchPost("/api/sillot/getConfigesStore", { f: `IDB__${workspaceName}__.json` }, async (r) => {
                // console.log(r);
                await importIDB(r.data).then(() => {
                    window.Sillot.status.IDBloaded = true;
                    window._ = lodash;
                    window.__ace = (id:string)=>{
                        let container = document.createElement("div");
                        container.style.width = "100vw";
                        container.style.height = "100vh";
                        container.style.position = "fixed";
                        container.style.zIndex = "999";
                        container.style.fontSize = "1.31em";
                        container.id = id;
                        container.className = "ace-container";
                        document.body.appendChild(container);
                        var editor = ace.edit(id);
                        editor.getSession().setMode('ace/mode/javascript'); // 设置代码语言不适合暴露，只能在分支代码实现
                        editor.setTheme('ace/theme/monokai'); // 设置代码主题不适合暴露，只能在分支代码实现
                        editor.setOptions({
                            wrap: true, // 换行
                            autoScrollEditorIntoView: false, // 自动滚动编辑器视图
                            enableLiveAutocompletion: true, // 智能补全
                            enableBasicAutocompletion: true, // 启用基本完成
                            tooltipFollowsMouse: true
                          })
                        return editor
                        // 简单用法：
                        // let y = __ace()
                        // y.setValue(`function g(y){
                        //     console.log("ok")
                        //     return false
                        // }
                        // f(`)
                        // y.getSession().on('change', function() {
                        //     console.log(y.getValue())
                        //   })
                        // y.getSession().selection.on('changeSelection', function(e) {
                        //     console.warn(y.session.getTextRange(y.getSelectionRange()))
                        // });
                    };
                    getLocalStorage(() => {
                        fetchGet(`/appearance/langs/${window.siyuan.config.appearance.lang}.json?v=${Constants.SIYUAN_VERSION}`, (lauguages) => {
                            window.siyuan.languages = lauguages;
                            bootSync();
                            fetchPost("/api/setting/getCloudUser", {}, userResponse => {
                                window.siyuan.user = userResponse.data;
                                onGetConfig(response.data.start);
                                account.onSetaccount();
                                resizeDrag();
                                setTitle(window.siyuan.languages.siyuanNote);
                                initMessage();
                            });
                        });
                    });
                    setNoteBook();
                    initBlockPopover();
                    promiseTransactions();
                });
            });
        });
    }
}

new App();
