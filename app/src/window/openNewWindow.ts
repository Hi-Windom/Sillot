import {layoutToJSON} from "../layout/util";
/// #if !BROWSER
import {ipcRenderer} from "electron";
/// #endif
import {Constants} from "../constants";
import {Tab} from "../layout/Tab";
import {fetchPost} from "../util/fetch";
import {showMessage} from "../dialog/message";
import {getDisplayName, pathPosix} from "../util/pathName";
import {getSearch} from "../util/functions";

interface windowOptions {
    position?: {
        x: number,
        y: number,
    },
    width?: number,
    height?: number
}

export const openNewWindow = (tab: Tab, options: windowOptions = {}) => {
    const json = {};
    layoutToJSON(tab, json);
    /// #if !BROWSER
    ipcRenderer.send(Constants.SIYUAN_OPEN_WINDOW, {
        position: options.position,
        width: options.width,
        height: options.height,
        // 需要 encode， 否则 https://github.com/siyuan-note/siyuan/issues/9343
        url: `${window.location.protocol}//${window.location.host}/stage/build/app/window.html?v=${Constants.SIYUAN_VERSION}&json=${encodeURIComponent(JSON.stringify(json))}`
    });
    /// #endif
    tab.parent.removeTab(tab.id);
};

export const openNewWindowById = (id: string, options: windowOptions = {}) => {
    fetchPost("/api/block/getBlockInfo", {id}, (response) => {
        if (response.code === 3) {
            showMessage(response.msg);
            return;
        }
        const json: any = {
            title: response.data.rootTitle,
            docIcon: response.data.rootIcon,
            pin: false,
            active: true,
            instance: "Tab",
            action: "Tab",
            children: {
                notebookId: response.data.box,
                blockId: id,
                rootId: response.data.rootID,
                mode: "wysiwyg",
                instance: "Editor",
                action: response.data.rootID === id ? Constants.CB_GET_SCROLL : Constants.CB_GET_ALL
            }
        };
        /// #if !BROWSER
        ipcRenderer.send(Constants.SIYUAN_OPEN_WINDOW, {
            position: options.position,
            width: options.width,
            height: options.height,
            url: `${window.location.protocol}//${window.location.host}/stage/build/app/window.html?v=${Constants.SIYUAN_VERSION}&json=${encodeURIComponent(JSON.stringify(json))}`
        });
        /// #endif
    });
};

export const openAssetNewWindow = (assetPath: string, options: windowOptions = {}) => {
    /// #if !BROWSER
    const suffix = pathPosix().extname(assetPath.split("?page")[0]);
    if (Constants.SIYUAN_ASSETS_EXTS.includes(suffix)) {
        let docIcon = "iconPDF";
        if (Constants.SIYUAN_ASSETS_IMAGE.includes(suffix)) {
            docIcon = "iconImage";
        } else if (Constants.SIYUAN_ASSETS_AUDIO.includes(suffix)) {
            docIcon = "iconRecord";
        } else if (Constants.SIYUAN_ASSETS_VIDEO.includes(suffix)) {
            docIcon = "iconVideo";
        }
        const json: any = {
            title: getDisplayName(assetPath),
            docIcon,
            pin: false,
            active: true,
            instance: "Tab",
            action: "Tab",
            children: {
                path: assetPath,
                page: parseInt(getSearch("page", assetPath)),
                instance: "Asset",
            }
        };
        ipcRenderer.send(Constants.SIYUAN_OPEN_WINDOW, {
            position: options.position,
            width: options.width,
            height: options.height,
            url: `${window.location.protocol}//${window.location.host}/stage/build/app/window.html?v=${Constants.SIYUAN_VERSION}&json=${encodeURIComponent(JSON.stringify(json))}`
        });
    }
    /// #endif
};
