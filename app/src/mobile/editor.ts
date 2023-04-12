import {Protyle} from "../protyle";
import {setEditor} from "./util/setEmpty";
import {closePanel} from "./util/closePanel";
import {Constants} from "../constants";
import {fetchPost} from "../util/fetch";
import {disabledProtyle, onGet} from "../protyle/util/onGet";
import {addLoading} from "../protyle/ui/initUI";
import {scrollCenter} from "../util/highlightById";
import {hasClosestByAttribute} from "../protyle/util/hasClosest";
import {setEditMode} from "../protyle/util/setEditMode";
import {hideElements} from "../protyle/ui/hideElements";
import {pushBack} from "./util/MobileBackFoward";
import {setStorageVal} from "../protyle/util/compatibility";
import {showMessage} from "../dialog/message";
import {saveScroll} from "../protyle/scroll/saveScroll";

export const getCurrentEditor = () => {
    return window.siyuan.mobile.popEditor || window.siyuan.mobile.editor;
};

export const openMobileFileById = (id: string, action = [Constants.CB_GET_HL]) => {
    window.siyuan.storage[Constants.LOCAL_DOCINFO] = {id, action};
    setStorageVal(Constants.LOCAL_DOCINFO, window.siyuan.storage[Constants.LOCAL_DOCINFO]);
    if (window.siyuan.mobile.editor) {
        hideElements(["toolbar", "hint", "util"], window.siyuan.mobile.editor.protyle);
        if (window.siyuan.mobile.editor.protyle.contentElement.classList.contains("fn__none")) {
            setEditMode(window.siyuan.mobile.editor.protyle, "wysiwyg");
        }
        let blockElement;
        Array.from(window.siyuan.mobile.editor.protyle.wysiwyg.element.querySelectorAll(`[data-node-id="${id}"]`)).find((item: HTMLElement) => {
            if (!hasClosestByAttribute(item.parentElement, "data-type", "NodeBlockQueryEmbed")) {
                blockElement = item;
                return true;
            }
        });
        if (blockElement) {
            pushBack();
            scrollCenter(window.siyuan.mobile.editor.protyle, blockElement, true);
            closePanel();
            return;
        }
    }

    fetchPost("/api/block/getBlockInfo", {id}, (data) => {
        if (data.code === 3) {
            showMessage(data.msg);
            return;
        }
        if (window.siyuan.mobile.editor) {
            if (document.getElementById("empty").classList.contains("fn__none")) {
                saveScroll(window.siyuan.mobile.editor.protyle);
            }
            pushBack();
            addLoading(window.siyuan.mobile.editor.protyle);
            fetchPost("/api/filetree/getDoc", {
                id,
                size: action.includes(Constants.CB_GET_ALL) ? Constants.SIZE_GET_MAX : window.siyuan.config.editor.dynamicLoadBlocks,
                mode: action.includes(Constants.CB_GET_CONTEXT) ? 3 : 0,
            }, getResponse => {
                onGet(getResponse, window.siyuan.mobile.editor.protyle, action);
                window.siyuan.mobile.editor.protyle.breadcrumb?.render(window.siyuan.mobile.editor.protyle);
            });
            window.siyuan.mobile.editor.protyle.undo.clear();
        } else {
            window.siyuan.mobile.editor = new Protyle(document.getElementById("editor"), {
                blockId: id,
                action,
                render: {
                    scroll: true,
                    background: true,
                    gutter: true,
                },
                typewriterMode: true,
                preview: {
                    actions: ["mp-wechat", "zhihu"]
                },
                after: (editor) => {
                    // protyle 仅初始化一次，后续更新时会对 url 等再次复制
                    if (window.siyuan.config.readonly || window.siyuan.config.editor.readOnly) {
                        disabledProtyle(editor.protyle);
                    }
                }
            });
        }
        (document.getElementById("toolbarName") as HTMLInputElement).value = data.data.rootTitle === "Untitled" ? "" : data.data.rootTitle;
        setEditor();
        closePanel();
    });
};
