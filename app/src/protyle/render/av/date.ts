// import * as dayjs from "dayjs";
import {formatDate} from "sofill/mid";
import {hasClosestByClassName} from "../../util/hasClosest";
import {updateCellsValue} from "./cell";

export const getDateHTML = (data: IAVTable, cellElements: HTMLElement[]) => {
    window.sout.tracker("invoked");
    let hasEndDate = true;
    let cellValue: IAVCell;
    cellElements.forEach((cellElement) => {
        data.rows.find(row => {
            if ((hasClosestByClassName(cellElement, "av__row") as HTMLElement).dataset.id === row.id) {
                row.cells.find(cell => {
                    if (cell.id === cellElement.dataset.id) {
                        if (!cell.value || !cell.value.date || !cell.value.date.hasEndDate) {
                            hasEndDate = false;
                        }
                        cellValue = cell;
                        return true;
                    }
                });
                return true;
            }
        });
    });
    if (!cellValue) {
        hasEndDate = false;
    }
    const isNotTime = !cellValue || cellValue?.value?.date?.isNotTime;
    let value = "";
    const currentDate = new Date().getTime();
    if (cellValue?.value?.date?.isNotEmpty) {
        value = formatDate(new Date(cellValue.value.date.content), isNotTime ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm");
    } else {
        value = formatDate(currentDate, isNotTime ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm");
    }
    let value2 = "";
    if (cellValue?.value?.date?.isNotEmpty2) {
        value2 = formatDate(new Date(cellValue.value.date.content2), isNotTime ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm");
    } else if (hasEndDate) {
        value2 = formatDate(currentDate, isNotTime ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm");
    }
    return `<div class="b3-menu__items">
<div>
    <input type="${isNotTime ? "date" : "datetime-local"}" max="${isNotTime ? "9999-12-31" : "9999-12-31 23:59"}" value="${value}" data-value="${formatDate(new Date(cellValue?.value?.date?.content || currentDate), "yyyy-MM-dd HH:mm")}" class="b3-text-field fn__size200" style="margin-top: 4px;"><br>
    <input type="${isNotTime ? "date" : "datetime-local"}" max="${isNotTime ? "9999-12-31" : "9999-12-31 23:59"}" value="${value2}" data-value="${cellValue?.value?.date?.isNotEmpty2 ? formatDate(new Date(cellValue.value.date.content2), "yyyy-MM-dd HH:mm") : ""}" style="margin-top: 8px;margin-bottom: 4px" class="b3-text-field fn__size200${hasEndDate ? "" : " fn__none"}">
    <button class="b3-menu__separator"></button>
    <label class="b3-menu__item">
        <span class="fn__flex-center">${window.siyuan.languages.endDate}</span>
        <span class="fn__space fn__flex-1"></span>
        <input type="checkbox" class="b3-switch b3-switch--menu"${hasEndDate ? " checked" : ""}>
    </label>
    <label class="b3-menu__item">
        <span class="fn__flex-center">${window.siyuan.languages.includeTime}</span>
        <span class="fn__space fn__flex-1"></span>
        <input type="checkbox" class="b3-switch b3-switch--menu"${isNotTime ? "" : " checked"}>
    </label>
    <button class="b3-menu__separator"></button>
    <button class="b3-menu__item" data-type="clearDate">
        <svg class="b3-menu__icon"><use xlink:href="#iconTrashcan"></use></svg>
        <span class="b3-menu__label">${window.siyuan.languages.clear}</span>
    </button>
</div>
</div>`;
};

export const bindDateEvent = (options: {
    protyle: IProtyle,
    data: IAV,
    menuElement: HTMLElement,
    blockElement: Element,
    cellElements: HTMLElement[]
}) => {
    window.sout.tracker("invoked");
    const inputElements: NodeListOf<HTMLInputElement> = options.menuElement.querySelectorAll("input");
    inputElements.forEach(item => {
        item.addEventListener("keydown", (event) => {
            if (event.isComposing) {
                return;
            }
            if (event.key === "Enter") {
                updateCellsValue(options.protyle, options.blockElement as HTMLElement, {
                    content: new Date(inputElements[0].dataset.value).getTime(),
                    isNotEmpty: inputElements[0].value !== "",
                    content2: new Date(inputElements[1].dataset.value).getTime(),
                    isNotEmpty2: inputElements[1].value !== "",
                    hasEndDate: inputElements[2].checked,
                    isNotTime: !inputElements[3].checked,
                }, options.cellElements);
                document.querySelector(".av__panel")?.remove();
            }
        });
    });
    inputElements[0].addEventListener("change", () => {
        inputElements[0].dataset.value = inputElements[0].value.length > 10 ? inputElements[0].value : inputElements[0].value + " 00:00";
    });
    inputElements[1].addEventListener("change", () => {
        inputElements[1].dataset.value = inputElements[1].value.length > 10 ? inputElements[1].value : inputElements[1].value + " 00:00";
    });
    inputElements[2].addEventListener("change", () => {
        if (inputElements[2].checked) {
            if (!inputElements[1].dataset.value) {
                const currentDate = new Date().getTime();
                inputElements[1].dataset.value = formatDate(currentDate, "yyyy-MM-dd HH:mm");
                inputElements[1].value = formatDate(currentDate, inputElements[3].checked ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd");
            }
            inputElements[1].classList.remove("fn__none");
        } else {
            inputElements[1].classList.add("fn__none");
        }
    });
    inputElements[3].addEventListener("change", () => {
        if (inputElements[3].checked) {
            inputElements[0].setAttribute("type", "datetime-local");
            inputElements[1].setAttribute("type", "datetime-local");
            inputElements[0].setAttribute("max", "9999-12-31 23:59");
            inputElements[1].setAttribute("max", "9999-12-31 23:59");
            inputElements[0].value = inputElements[0].dataset.value;
            inputElements[1].value = inputElements[1].dataset.value;
        } else {
            inputElements[0].setAttribute("type", "date");
            inputElements[1].setAttribute("type", "date");
            inputElements[0].setAttribute("max", "9999-12-31");
            inputElements[1].setAttribute("max", "9999-12-31");
            inputElements[0].value = inputElements[0].dataset.value.substring(0, 10);
            inputElements[1].value = inputElements[1].dataset.value.substring(0, 10);
        }
    });
    return () => {
        updateCellsValue(options.protyle, options.blockElement as HTMLElement, {
            content: new Date(inputElements[0].dataset.value).getTime(),
            isNotEmpty: inputElements[0].value !== "",
            content2: new Date(inputElements[1].dataset.value).getTime(),
            isNotEmpty2: inputElements[1].value !== "",
            hasEndDate: inputElements[2].checked,
            isNotTime: !inputElements[3].checked,
        }, options.cellElements);
    };
};
