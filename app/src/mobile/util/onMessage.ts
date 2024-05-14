import {openMobileFileById} from "../editor";
import {processSync, progressLoading, progressStatus, reloadSync, transactionError} from "../../dialog/processSystem";
import {Constants} from "../../constants";
import type {App} from "../../index";
import {reloadPlugin} from "../../plugin/loader";

export const onMessage = (app: App, data: IWebSocketData) => {
    if (data) {
        switch (data.cmd) {
            case "reloadPlugin":
                reloadPlugin(app, data.data);
                break;
            case "syncMergeResult":
                reloadSync(app, data.data);
                break;
            case "setConf":
                window.sout.tracker(`invoked -> ${data.cmd} -> ${data.data}`);
                window.siyuan.config = data.data;
                break;
            case "readonly":
                window.siyuan.config.editor.readOnly = data.data;
                break;
            case"progress":
                progressLoading(data);
                break;
            case"syncing":
                processSync(data, app.plugins);
                if (data.code === 1) {
                    document.getElementById("toolbarSync").classList.add("fn__none");
                }
                break;
            case "openFileById":
                window.sout.tracker(`invoked -> ${data.cmd} -> ${data.data?.id}`);
                openMobileFileById(app, data.data.id, [Constants.CB_GET_HL]);
                break;
            case"txerr":
                window.sout.tracker(`invoked -> ${data.cmd}`);
                transactionError();
                break;
            case"statusbar":
                progressStatus(data);
                break;
        }
    }
};
