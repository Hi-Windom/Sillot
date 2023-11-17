import {addScript} from "../util/addScript";
import {Constants} from "../../constants";
import {hasClosestByAttribute} from "../util/hasClosest";
import {genIconHTML} from "./util";

declare const flowchart: {
    parse(text: string): { drawSVG: (type: Element) => void };
};

export const flowchartRender = (element: Element, cdn = Constants.PROTYLE_CDN) => {
    let flowchartElements: Element[] = [];
    if (element.getAttribute("data-subtype") === "flowchart") {
        // 编辑器内代码块编辑渲染
        flowchartElements = [element];
    } else {
        flowchartElements = Array.from(element.querySelectorAll('[data-subtype="flowchart"]'));
    }
    if (flowchartElements.length === 0) {
        return;
    }
    addScript(`${cdn}/js/flowchart.js/flowchart.min.js?v=0.0.0`, "protyleFlowchartScript").then(() => {
        if (flowchartElements[0].firstElementChild.clientWidth === 0) {
            const hideElement = hasClosestByAttribute(flowchartElements[0], "fold", "1");
            if (!hideElement) {
                return;
            }
            const observer = new MutationObserver(() => {
                initFlowchart(flowchartElements);
                observer.disconnect();
            });
            observer.observe(hideElement, {attributeFilter: ["fold"]});
        } else {
            initFlowchart(flowchartElements);
        }
    });
};

const initFlowchart = (flowchartElements: Element[]) => {
    flowchartElements.forEach((item: HTMLElement) => {
        if (item.getAttribute("data-render") === "true") {
            return;
        }
        //  preview 不需要进行设置
        if (item.getAttribute("data-node-id")) {
            if (!item.firstElementChild.classList.contains("protyle-icons")) {
                item.insertAdjacentHTML("afterbegin", genIconHTML());
            }
            if (item.childElementCount < 4) {
                item.lastElementChild.insertAdjacentHTML("beforebegin", `<span style="position: absolute">${Constants.ZWSP}</span>`);
            }
        }
        const renderElement = (item.firstElementChild.nextElementSibling || item.firstElementChild) as HTMLElement;
        const flowchartObj = flowchart.parse(Lute.UnEscapeHTMLStr(item.getAttribute("data-content")));
        renderElement.innerHTML = "";
        try {
            flowchartObj.drawSVG(renderElement);
        } catch (error) {
            renderElement.classList.add("ft__error");
            renderElement.innerHTML = `Flow Chart render error: <br>${error}`;
        }
        renderElement.setAttribute("contenteditable", "false");
        item.setAttribute("data-render", "true");
    });
};
