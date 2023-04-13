import {fetchPost} from "../util/fetch";
import {getDisplayName, getNotebookName} from "../util/pathName";
import {confirmDialog} from "../dialog/confirmDialog";
import {hasTopClosestByTag} from "../protyle/util/hasClosest";
import {Constants} from "../constants";
import {showMessage} from "../dialog/message";
import {escapeHtml} from "../util/escape";

export const deleteFile = (notebookId: string, pathString: string) => {
    if (window.siyuan.config.fileTree.removeDocWithoutConfirm) {
        fetchPost("/api/filetree/removeDoc", {
            notebook: notebookId,
            path: pathString
        });
        return;
    }
    fetchPost("/api/block/getDocInfo", {
        id: getDisplayName(pathString, true, true)
    }, (response) => {
        const fileName = escapeHtml(response.data.name);
        let tip = `${window.siyuan.languages.confirmDelete} <b>${fileName}</b>?`;
        if (response.data.subFileCount > 0) {
            tip = `${window.siyuan.languages.confirmDelete} <b>${fileName}</b> ${window.siyuan.languages.andSubFile.replace("x", response.data.subFileCount)}?`;
        }
        confirmDialog(window.siyuan.languages.deleteOpConfirm, tip, () => {
            fetchPost("/api/filetree/removeDoc", {
                notebook: notebookId,
                path: pathString
            });
        });
    });
};

export const deleteFiles = (liElements: Element[]) => {
    if (liElements.length === 1) {
        const itemTopULElement = hasTopClosestByTag(liElements[0], "UL");
        if (itemTopULElement) {
            const itemNotebookId = itemTopULElement.getAttribute("data-url");
            if (liElements[0].getAttribute("data-type") === "navigation-file") {
                deleteFile(itemNotebookId, liElements[0].getAttribute("data-path"));
            } else {
                confirmDialog(window.siyuan.languages.deleteOpConfirm,
                    `${window.siyuan.languages.confirmDelete} <b>${Lute.EscapeHTMLStr(getNotebookName(itemNotebookId))}</b>?`, () => {
                        fetchPost("/api/notebook/removeNotebook", {
                            notebook: itemNotebookId,
                            callback: Constants.CB_MOUNT_REMOVE
                        });
                    });
            }
        }
    } else {
        const paths: string[] = [];
        liElements.forEach(item => {
            const dataPath = item.getAttribute("data-path");
            if (dataPath !== "/") {
                paths.push(item.getAttribute("data-path"));
            }
        });
        if (paths.length === 0) {
            showMessage(window.siyuan.languages.notBatchRemove);
            return;
        }
        confirmDialog(window.siyuan.languages.deleteOpConfirm,
            window.siyuan.languages.confirmRemoveAll.replace("${count}", paths.length), () => {
                fetchPost("/api/filetree/removeDocs", {
                    paths
                });
            });
    }
};
