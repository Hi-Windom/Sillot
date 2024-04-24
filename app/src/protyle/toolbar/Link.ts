import {ToolbarItem} from "./ToolbarItem";
import {linkMenu} from "../../menus/protyle";
import {hasClosestBlock, hasClosestByAttribute} from "../util/hasClosest";
import {readText} from "../util/compatibility";
import {Constants} from "../../constants";

export class Link extends ToolbarItem {
    declare public element: HTMLElement;

    constructor(protyle: IProtyle, menuItem: IMenuItem) {
        super(protyle, menuItem);
        // 不能用 getEventName，否则会导致光标位置变动到点击的文档中
        this.element.addEventListener("click", async (event: MouseEvent & { changedTouches: MouseEvent[] }) => {
            protyle.toolbar.element.classList.add("fn__none");
            event.stopPropagation();

            const range = protyle.toolbar.range;
            const nodeElement = hasClosestBlock(range.startContainer);
            if (!nodeElement) {
                return;
            }
            const aElement = hasClosestByAttribute(range.startContainer, "data-type", "a");
            if (aElement) {
                linkMenu(protyle, aElement);
                return;
            }

            const rangeString = range.toString().trim().replace(Constants.ZWSP, "");
            let dataHref = "";
            let dataText = "";
            try {
                const clipText = await readText();
                // 选中链接时需忽略剪切板内容 https://ld246.com/article/1643035329737
                dataHref = protyle.lute.GetLinkDest(rangeString);
                if (!dataHref) {
                    dataHref = protyle.lute.GetLinkDest(clipText);
                }
                if (!dataHref) {
                    // 360
                    const lastSpace = clipText.lastIndexOf(" ");
                    if (lastSpace > -1) {
                        dataHref = protyle.lute.GetLinkDest(clipText.substring(lastSpace));
                        if (dataHref) {
                            dataText = clipText.substring(0, lastSpace);
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            }
            protyle.toolbar.setInlineMark(protyle, "a", "range", {
                type: "a",
                color: dataHref + (dataText ? Constants.ZWSP + dataText : "")
            });
        });
    }
}
