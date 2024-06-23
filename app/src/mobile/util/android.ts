import { saveScroll } from "../../protyle/scroll/saveScroll";
import { hideAllElements } from "../../protyle/ui/hideElements";
import { isInAndroid } from "../../protyle/util/compatibility";
import { exportIDB } from "../../sillot/util/sillot-idb-backup-and-restore";

export const rebootGibbetInAndroid = () => {
    if (!isInAndroid) {
        return;
    }
    window.sout.tracker("invoked");
    const overlay = document.querySelector("#SillotOverlay") as HTMLElement;
    overlay.style.display = "block";
    exportIDB().then(() => {
        hideAllElements(["util"]);
        /// #if MOBILE
        if (window.siyuan.mobile.editor) {
            saveScroll(window.siyuan.mobile.editor.protyle);
        }
        /// #endif
        window.JSAndroid?.androidReboot();
    });
};
