import {listIndent, listOutdent} from "../../protyle/wysiwyg/list";
import {hasClosestBlock, hasClosestByClassName, hasClosestByMatchTag} from "../../protyle/util/hasClosest";
import {insertEmptyBlock} from "../../block/util";
import {moveToDown, moveToUp} from "../../protyle/wysiwyg/move";
import {Constants} from "../../constants";
import {focusByRange, getSelectionPosition} from "../../protyle/util/selection";

export const showKeyboardToolbar = (bottom = 0) => {
    if (getSelection().rangeCount === 0 || window.siyuan.config.editor.readOnly || window.siyuan.config.readonly) {
        return;
    }
    const toolbarElement = document.getElementById("keyboardToolbar");
    if (!toolbarElement.classList.contains("fn__none")) {
        return;
    }
    toolbarElement.classList.remove("fn__none");
    toolbarElement.style.bottom = bottom + "px";

    const range = getSelection().getRangeAt(0);
    if (!window.siyuan.mobile.editor ||
        !window.siyuan.mobile.editor.protyle.wysiwyg.element.contains(range.startContainer)) {
        return;
    }
    setTimeout(() => {
        const contentElement = window.siyuan.mobile.editor.protyle.contentElement;
        const cursorTop = getSelectionPosition(contentElement).top - contentElement.getBoundingClientRect().top;
        if (cursorTop < window.innerHeight - 96) {
            return;
        }
        contentElement.scroll({
            top: contentElement.scrollTop + cursorTop - ((window.outerHeight - 65) / 2 - 30),
            left: contentElement.scrollLeft,
            behavior: "smooth"
        });
    }, Constants.TIMEOUT_TRANSITION);
};

let renderKeyboardToolbarTimeout: number;
export const renderKeyboardToolbar = () => {
    clearTimeout(renderKeyboardToolbarTimeout)
    renderKeyboardToolbarTimeout = window.setTimeout(() => {
        if (getSelection().rangeCount === 0 || window.siyuan.config.editor.readOnly || window.siyuan.config.readonly) {
            return;
        }
        const range = getSelection().getRangeAt(0);
        let html = ""
        if (hasClosestByClassName(range.startContainer, "protyle-wysiwyg", true)) {
            const protyle = window.siyuan.mobile.editor.protyle;
            html = `<button data-type="add"><svg><use xlink:href="#iconAdd"></use></svg></button>
<button data-type="goinline"><svg class="keyboard__svg--big"><use xlink:href="#iconBIU"></use></svg></button>
<button data-type="indent"><svg><use xlink:href="#iconTrashcan"></use></svg></button>
<span class="keyboard__split"></span>
<button ${protyle.undo.undoStack.length === 0 ? 'disabled="disabled"' : ""} data-type="undo"><svg><use xlink:href="#iconUndo"></use></svg></button>
<button ${protyle.undo.redoStack.length === 0 ? 'disabled="disabled"' : ""} data-type="redo"><svg><use xlink:href="#iconRedo"></use></svg></button>
<button data-type="redo"><svg><use xlink:href="#iconFont"></use></svg></button>
<button data-type="redo"><svg><use xlink:href="#iconMore"></use></svg></button>
<span class="keyboard__split"></span>
<button data-type="undo"><svg><use xlink:href="#iconIndent"></use></svg></button>
<button data-type="redo"><svg><use xlink:href="#iconOutdent"></use></svg></button>
<button data-type="redo"><svg><use xlink:href="#iconUp"></use></svg></button>
<button data-type="redo"><svg><use xlink:href="#iconDown"></use></svg></button>
`;
        }
        const selectText = range.toString();
        console.log(range)
        document.getElementById("keyboardToolbar").innerHTML = `<div class="fn__flex-1">
    <div class="${selectText ? "fn__none " : ""}keyboard__dynamic">${html}</div>
    <div class="${selectText ? "" : "fn__none "}keyboard__dynamic">
        <button data-type="goback"><svg><use xlink:href="#iconBack"></use></svg></button>
        <button data-type="indent"><svg><use xlink:href="#iconRef"></use></svg></button>
        <button data-type="block-ref"<use xlink:href="#iconRef"></use></svg></button>
        <button data-type="a"><svg><use xlink:href="#iconLink"></use></svg></button>
        <button data-type="text"><svg><use xlink:href="#iconFont"></use></svg></button>
        <button data-type="strong"><svg><use xlink:href="#iconBold"></use></svg></button>
        <button data-type="em"><svg><use xlink:href="#iconItalic"></use></svg></button>
        <button data-type="u"><svg><use xlink:href="#iconUnderline"></use></svg></button>
        <button data-type="s"><svg><use xlink:href="#iconStrike"></use></svg></button>
        <button data-type="mark"><svg><use xlink:href="#iconMark"></use></svg></button>
        <button data-type="sup"><svg><use xlink:href="#iconSup"></use></svg></button>
        <button data-type="sub"><svg><use xlink:href="#iconSub"></use></svg></button>
        <button data-type="clear"><svg><use xlink:href="#iconClear"></use></svg></button>
        <button data-type="code"><svg><use xlink:href="#iconInlineCode"></use></svg></button>
        <button data-type="kbd"<use xlink:href="#iconKeymap"></use></svg></button>
        <button data-type="tag"><svg><use xlink:href="#iconTags"></use></svg></button>
        <button data-type="inline-math"><svg><use xlink:href="#iconMath"></use></svg></button>
        <button data-type="inline-memo"><svg><use xlink:href="#iconM"></use></svg></button>
        <button data-type="goback"><svg class="keyboard__svg--close"><use xlink:href="#iconClose"></use></svg></button>
    </div>
</div>
<span class="keyboard__split"></span>
<button data-type="done"><svg style="width: 36px"><use xlink:href="#iconKeyboardHide"></use></svg></button>`;
    }, 620) // 需等待 range 更新
};

export const hideKeyboardToolbar = () => {
    const toolbarElement = document.getElementById("keyboardToolbar");
    toolbarElement.classList.add("fn__none");
};

export const hideKeyboard = () => {
    (document.activeElement as HTMLElement).blur();
};

export const initKeyboardToolbar = () => {
    document.addEventListener("selectionchange", () => {
        renderKeyboardToolbar()
    }, false);

    const toolbarElement = document.getElementById("keyboardToolbar");
    toolbarElement.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        const buttonElement = hasClosestByMatchTag(target, "BUTTON");
        if (!buttonElement || buttonElement.getAttribute("disabled")) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const type = buttonElement.getAttribute("data-type");
        if (type === "done") {
            hideKeyboard();
            return;
        }
        if (window.siyuan.config.readonly || window.siyuan.config.editor.readOnly || !window.siyuan.mobile.editor) {
            return;
        }
        const protyle = window.siyuan.mobile.editor.protyle;
        if (type === "undo") {
            protyle.undo.undo(protyle);
            return;
        }
        if (type === "redo") {
            protyle.undo.redo(protyle);
            return;
        }
        if (type === "goback") {
            const dynamicElements = document.querySelectorAll("#keyboardToolbar .keyboard__dynamic")
            dynamicElements[0].classList.remove("fn__none")
            dynamicElements[1].classList.add("fn__none")
            return;
        }
        if (type === "goinline") {
            const dynamicElements = document.querySelectorAll("#keyboardToolbar .keyboard__dynamic")
            dynamicElements[1].classList.remove("fn__none")
            dynamicElements[0].classList.add("fn__none")
            return;
        }

        if (getSelection().rangeCount === 0) {
            return;
        }
        const range = getSelection().getRangeAt(0);
        const nodeElement = hasClosestBlock(range.startContainer);
        if (!nodeElement) {
            return;
        }
        // inline element
        // block element

        if (type === "up") {
            moveToUp(protyle, nodeElement, range);
            focusByRange(range);
            return;
        }
        if (type === "down") {
            moveToDown(protyle, nodeElement, range);
            focusByRange(range);
            return;
        }

        if (type === "before") {
            insertEmptyBlock(protyle, "beforebegin");
            return;
        }
        if (type === "after") {
            insertEmptyBlock(protyle, "afterend");
            return;
        }

        if (type === "clear") {
            if (range.toString()) {
                protyle.toolbar.setInlineMark(protyle, "clear", "toolbar");
            } else if (range.startContainer.nodeType === 3 && range.startContainer.parentElement.tagName === "SPAN") {
                range.setStartAfter(range.startContainer.parentElement);
                range.collapse(false);
                range.insertNode(document.createTextNode(Constants.ZWSP));
                range.collapse(false);
            }
            focusByRange(range);
            return;
        }

        if (!nodeElement.parentElement.classList.contains("li") || nodeElement.getAttribute("data-type") === "NodeCodeBlock") {
            focusByRange(range);
            return;
        }
        if (type === "outdent") {
            listOutdent(protyle, [nodeElement.parentElement], range);
            focusByRange(range);
        } else if (type === "indent") {
            listIndent(protyle, [nodeElement.parentElement], range);
            focusByRange(range);
        }
    });
};
