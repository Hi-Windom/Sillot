import {hideElements} from "../ui/hideElements";

export const destroy = (protyle: IProtyle) => {
    window.sout.tracker("invoked");
    if (!protyle) {
        return;
    }
    hideElements(["util"], protyle);
    protyle.observer?.disconnect();
    protyle.observerLoad?.disconnect();
    protyle.element.classList.remove("protyle");
    protyle.element.removeAttribute("style");
    if (protyle.wysiwyg) {
        protyle.wysiwyg.lastHTMLs = {};
    }
    if (protyle.undo) {
        protyle.undo.clear();
    }
    try {
        protyle.ws.send("closews", {});
    } catch (e) {
        setTimeout(() => {
            protyle.ws.send("closews", {});
        }, 10240);
    }
    protyle.app.plugins.forEach(item => {
        item.eventBus.emit("destroy-protyle", {
            protyle,
        });
    });
};
