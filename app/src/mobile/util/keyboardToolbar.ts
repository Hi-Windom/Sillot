import {listIndent, listOutdent} from "../../protyle/wysiwyg/list";
import {hasClosestBlock, hasClosestByClassName, hasClosestByMatchTag} from "../../protyle/util/hasClosest";
import {moveToDown, moveToUp} from "../../protyle/wysiwyg/move";
import {Constants} from "../../constants";
import {focusByRange, getSelectionPosition} from "../../protyle/util/selection";

let renderKeyboardToolbarTimeout: number;
let showUtil = false;

const getSlashItem = (value: string, icon: string, text: string, focus = "false") => {
    let iconHTML;
    if (icon && icon.startsWith("icon")) {
        iconHTML = `<svg class="keyboard__slash-icon"><use xlink:href="#${icon}"></use></svg>`;
    } else {
        iconHTML = icon;
    }
    return `<div class="keyboard__slash-item" data-focus="${focus}" data-value="${encodeURIComponent(value)}">
    ${iconHTML}
    <span class="keyboard__slash-text">${text}</span>
</div>`;
};

const renderSlashMenu = (protyle: IProtyle, toolbarElement: Element) => {
    protyle.hint.splitChar = "/";
    protyle.hint.lastIndex = -1;
    const utilElement = toolbarElement.querySelector(".keyboard__util") as HTMLElement;
    utilElement.innerHTML = `<div class="keyboard__slash-title"></div>
<div class="keyboard__slash-block">
    ${getSlashItem(Constants.ZWSP, "iconMarkdown", window.siyuan.languages.template)}
    ${getSlashItem(Constants.ZWSP + 1, "iconBoth", window.siyuan.languages.widget)}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem(Constants.ZWSP + 2, "iconImage", window.siyuan.languages.assets)}
    ${getSlashItem("((", "iconRef", window.siyuan.languages.blockRef, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("{{", "iconSQL", window.siyuan.languages.blockEmbed, "true")}
    ${getSlashItem(Constants.ZWSP + 5, "iconSparkles", "AI Chat")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem(Constants.ZWSP + 4, "iconFile", window.siyuan.languages.newFile)}
    <div class="keyboard__slash-empty"></div>
</div>
<div class="keyboard__slash-title"></div>
<div class="keyboard__slash-block">
    ${getSlashItem("# " + Lute.Caret, "iconH1", window.siyuan.languages.heading1, "true")}
    ${getSlashItem("## " + Lute.Caret, "iconH2", window.siyuan.languages.heading2, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("### " + Lute.Caret, "iconH3", window.siyuan.languages.heading3, "true")}
    ${getSlashItem("#### " + Lute.Caret, "iconH4", window.siyuan.languages.heading4, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("##### " + Lute.Caret, "iconH5", window.siyuan.languages.heading5, "true")}
    ${getSlashItem("###### " + Lute.Caret, "iconH6", window.siyuan.languages.heading6, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("* " + Lute.Caret, "iconList", window.siyuan.languages.list, "true")}
    ${getSlashItem("1. " + Lute.Caret, "iconOrderedList", window.siyuan.languages["ordered-list"], "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("* [ ] " + Lute.Caret, "iconCheck", window.siyuan.languages.check, "true")}
    ${getSlashItem("> " + Lute.Caret, "iconQuote", window.siyuan.languages.quote, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("```", "iconCode", window.siyuan.languages.code, "true")}
    ${getSlashItem(`| ${Lute.Caret} |  |  |\n| --- | --- | --- |\n|  |  |  |\n|  |  |  |`, "iconTable", window.siyuan.languages.table, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("---", "iconLine", window.siyuan.languages.line, "true")}
    ${getSlashItem("$$", "iconMath", window.siyuan.languages.math)}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("<div>", "iconHTML5", "HTML")}
    <div class="keyboard__slash-empty"></div>
</div>
<div class="keyboard__slash-title"></div>
<div class="keyboard__slash-block">
    ${getSlashItem("emoji", "iconEmoji", window.siyuan.languages.emoji, "true")}
    ${getSlashItem("a", "iconLink", window.siyuan.languages.link)}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("strong", "iconBold", window.siyuan.languages.bold, "true")}
    ${getSlashItem("em", "iconItalic", window.siyuan.languages.italic, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("u", "iconUnderline", window.siyuan.languages.underline, "true")}
    ${getSlashItem("s", "iconStrike", window.siyuan.languages.strike, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("mark", "iconMark", window.siyuan.languages.mark, "true")}
    ${getSlashItem("sup", "iconSup", window.siyuan.languages.sup, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("sub", "iconSub", window.siyuan.languages.sub, "true")}
    ${getSlashItem("tag", "iconTags", window.siyuan.languages.tag, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("code", "iconInlineCode", window.siyuan.languages["inline-code"], "true")}
    ${getSlashItem("inline-math", "iconMath", window.siyuan.languages["inline-math"])}
</div>
<div class="keyboard__slash-title"></div>
<div class="keyboard__slash-block">
    ${getSlashItem(Constants.ZWSP + 3, "iconDownload", window.siyuan.languages.insertAsset + '<input class="b3-form__upload" type="file"' + (protyle.options.upload.accept ? (' multiple="' + protyle.options.upload.accept + '"') : "") + "/>", "true")}
    ${getSlashItem('<iframe sandbox="allow-forms allow-presentation allow-same-origin allow-scripts allow-modals" src="" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>', "iconLanguage", window.siyuan.languages.insertIframeURL, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("![]()", "iconImage", window.siyuan.languages.insertImgURL, "true")}
    ${getSlashItem('<video controls="controls" src=""></video>', "iconVideo", window.siyuan.languages.insertVideoURL, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem('<audio controls="controls" src=""></audio>', "iconRecord", window.siyuan.languages.insertAudioURL, "true")}
    <div class="keyboard__slash-empty"></div>
</div>
<div class="keyboard__slash-title"></div>
<div class="keyboard__slash-block">
    ${getSlashItem("```abc\n```", "", window.siyuan.languages.staff, "true")}
    ${getSlashItem("```echarts\n```", "", window.siyuan.languages.chart, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("```flowchart\n```", "", "Flow Chart", "true")}
    ${getSlashItem("```graphviz\n```", "", "Graph", "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("```mermaid\n```", "", "Mermaid", "true")}
    ${getSlashItem("```mindmap\n```", "", window.siyuan.languages.mindmap, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem("```plantuml\n```", "", "UML", "true")}
    <div class="keyboard__slash-empty"></div>
</div>
<div class="keyboard__slash-title"></div>
<div class="keyboard__slash-block">
    ${getSlashItem(`style${Constants.ZWSP}color: var(--b3-card-info-color);background-color: var(--b3-card-info-background);`, '<div style="color: var(--b3-card-info-color);background-color: var(--b3-card-info-background);" class="keyboard__slash-icon">A</div>', window.siyuan.languages.infoStyle, "true")}
    ${getSlashItem(`style${Constants.ZWSP}color: var(--b3-card-success-color);background-color: var(--b3-card-success-background);`, '<div style="color: var(--b3-card-success-color);background-color: var(--b3-card-success-background);" class="keyboard__slash-icon">A</div>', window.siyuan.languages.successStyle, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem(`style${Constants.ZWSP}color: var(--b3-card-warning-color);background-color: var(--b3-card-warning-background);`, '<div style="color: var(--b3-card-warning-color);background-color: var(--b3-card-warning-background);" class="keyboard__slash-icon">A</div>', window.siyuan.languages.warningStyle, "true")}
    ${getSlashItem(`style${Constants.ZWSP}color: var(--b3-card-error-color);background-color: var(--b3-card-error-background);`, '<div style="color: var(--b3-card-error-color);background-color: var(--b3-card-error-background);" class="keyboard__slash-icon">A</div>', window.siyuan.languages.errorStyle, "true")}
</div>
<div class="keyboard__slash-block">
    ${getSlashItem(`style${Constants.ZWSP}`, '<div class="keyboard__slash-icon">A</div>', window.siyuan.languages.clearFontStyle, "true")}
    <div class="keyboard__slash-empty"></div>
</div>`;
    protyle.hint.bindUploadEvent(protyle, utilElement);
};

const showKeyboardToolbarUtil = (oldScrollTop: number) => {
    window.siyuan.menus.menu.remove();
    showUtil = true;

    const toolbarElement = document.getElementById("keyboardToolbar");
    const keyboardHeight = (parseInt(toolbarElement.getAttribute("data-keyboardheight")) + 42) + "px";
    window.siyuan.mobile.editor.protyle.element.style.marginBottom = keyboardHeight;
    window.siyuan.mobile.editor.protyle.contentElement.scrollTop = oldScrollTop;
    setTimeout(() => {
        toolbarElement.style.height = keyboardHeight;
    }, Constants.TIMEOUT_TRANSITION); // 防止抖动
    setTimeout(() => {
        showUtil = false;
    }, 1000);   // 防止光标改变后斜杆菜单消失
};

const hideKeyboardToolbarUtil = () => {
    const toolbarElement = document.getElementById("keyboardToolbar")
    toolbarElement.style.height = "";
    window.siyuan.mobile.editor.protyle.element.style.marginBottom = "42px";
    toolbarElement.querySelector('.keyboard__action[data-type="add"]').classList.remove("protyle-toolbar__item--current");
    toolbarElement.querySelector('.keyboard__action[data-type="done"] use').setAttribute("xlink:href", "#iconKeyboardHide");
};

const renderKeyboardToolbar = () => {
    clearTimeout(renderKeyboardToolbarTimeout);
    renderKeyboardToolbarTimeout = window.setTimeout(() => {
        if (getSelection().rangeCount === 0 || window.siyuan.config.editor.readOnly || window.siyuan.config.readonly) {
            return;
        }
        if (!showUtil) {
            hideKeyboardToolbarUtil();
        }
        if (window.innerHeight + 200 > ((window.orientation === 90 || window.orientation === -90) ? screen.width : screen.height)) {
            hideKeyboardToolbar();
            return;
        }

        const dynamicElements = document.querySelectorAll("#keyboardToolbar .keyboard__dynamic");
        const range = getSelection().getRangeAt(0);
        const isProtyle = hasClosestByClassName(range.startContainer, "protyle-wysiwyg", true);
        if (!isProtyle) {
            dynamicElements[0].classList.add("fn__none");
            dynamicElements[1].classList.add("fn__none");
            return;
        }

        const selectText = range.toString();
        if (selectText || dynamicElements[0].querySelector('[data-type="goinline"]').classList.contains("protyle-toolbar__item--current")) {
            dynamicElements[0].classList.add("fn__none");
            dynamicElements[1].classList.remove("fn__none");
        } else {
            dynamicElements[0].classList.remove("fn__none");
            dynamicElements[1].classList.add("fn__none");
        }

        const protyle = window.siyuan.mobile.editor.protyle;
        if (!dynamicElements[0].classList.contains("fn__none")) {
            if (protyle.undo.undoStack.length === 0) {
                dynamicElements[0].querySelector('[data-type="undo"]').setAttribute("disabled", "disabled");
            } else {
                dynamicElements[0].querySelector('[data-type="undo"]').removeAttribute("disabled");
            }
            if (protyle.undo.redoStack.length === 0) {
                dynamicElements[0].querySelector('[data-type="redo"]').setAttribute("disabled", "disabled");
            } else {
                dynamicElements[0].querySelector('[data-type="redo"]').removeAttribute("disabled");
            }
            const nodeElement = hasClosestBlock(range.startContainer);
            if (nodeElement) {
                const indentElement = dynamicElements[0].querySelector('[data-type="indent"]');
                if (nodeElement.parentElement.classList.contains("li")) {
                    indentElement.classList.remove("fn__none");
                    indentElement.nextElementSibling.classList.remove("fn__none");
                    indentElement.nextElementSibling.nextElementSibling.classList.remove("fn__none");
                } else {
                    indentElement.classList.add("fn__none");
                    indentElement.nextElementSibling.classList.add("fn__none");
                    indentElement.nextElementSibling.nextElementSibling.classList.add("fn__none");
                }
            }
        }

        if (!dynamicElements[1].classList.contains("fn__none")) {
            dynamicElements[1].querySelectorAll(".protyle-toolbar__item--current").forEach(item => {
                item.classList.remove("protyle-toolbar__item--current");
            });
            const types = protyle.toolbar.getCurrentType(range);
            types.forEach(item => {
                if (["search-mark", "a", "block-ref", "virtual-block-ref", "text", "file-annotation-ref", "inline-math",
                    "inline-memo", "", "backslash"].includes(item)) {
                    return;
                }
                const itemElement = dynamicElements[1].querySelector(`[data-type="${item}"]`);
                if (itemElement) {
                    itemElement.classList.add("protyle-toolbar__item--current");
                }
            });
        }
    }, 620); // 需等待 range 更新
};

export const showKeyboardToolbar = (height: number) => {
    if (getSelection().rangeCount === 0 || window.siyuan.config.editor.readOnly || window.siyuan.config.readonly) {
        return;
    }
    const toolbarElement = document.getElementById("keyboardToolbar");
    toolbarElement.setAttribute("data-keyboardheight", height.toString());
    hideKeyboardToolbarUtil();
    if (!toolbarElement.classList.contains("fn__none")) {
        return;
    }
    toolbarElement.classList.remove("fn__none");
    const range = getSelection().getRangeAt(0);
    if (!window.siyuan.mobile.editor ||
        !window.siyuan.mobile.editor.protyle.wysiwyg.element.contains(range.startContainer)) {
        return;
    }
    window.siyuan.mobile.editor.protyle.element.style.marginBottom = "42px";
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

export const hideKeyboardToolbar = () => {
    if (showUtil) {
        return;
    }
    const toolbarElement = document.getElementById("keyboardToolbar");
    toolbarElement.classList.add("fn__none");
    toolbarElement.style.height = "";
    window.siyuan.mobile.editor.protyle.element.style.marginBottom = "";
};

export const activeBlur = () => {
    (document.activeElement as HTMLElement).blur();
};

export const initKeyboardToolbar = () => {
    let preventRender = false;
    document.addEventListener("selectionchange", () => {
        if (!preventRender) {
            renderKeyboardToolbar();
        }
    }, false);

    const toolbarElement = document.getElementById("keyboardToolbar");
    toolbarElement.innerHTML = `<div class="fn__flex keyboard__bar">
    <div class="fn__flex-1">
        <div class="fn__none keyboard__dynamic">
            <button class="keyboard__action" data-type="indent"><svg><use xlink:href="#iconIndent"></use></svg></button>
            <button class="keyboard__action" data-type="outdent"><svg><use xlink:href="#iconOutdent"></use></svg></button>
            <span class="keyboard__split"></span>
            <button class="keyboard__action" data-type="add"><svg><use xlink:href="#iconAdd"></use></svg></button>
            <button class="keyboard__action" data-type="goinline"><svg class="keyboard__svg--big"><use xlink:href="#iconBIU"></use></svg></button>
            <span class="keyboard__split"></span>
            <button class="keyboard__action" data-type="undo"><svg><use xlink:href="#iconUndo"></use></svg></button>
            <button class="keyboard__action" data-type="redo"><svg><use xlink:href="#iconRedo"></use></svg></button>
            <button class="keyboard__action" data-type="block"><svg><use xlink:href="#iconParagraph"></use></svg></button>
            <button class="keyboard__action" data-type="more"><svg><use xlink:href="#iconMore"></use></svg></button>
            <span class="keyboard__split"></span>
            <button class="keyboard__action" data-type="moveup"><svg><use xlink:href="#iconUp"></use></svg></button>
            <button class="keyboard__action" data-type="movedown"><svg><use xlink:href="#iconDown"></use></svg></button>
        </div>
        <div class="fn__none keyboard__dynamic">
            <button class="keyboard__action" data-type="goback"><svg><use xlink:href="#iconBack"></use></svg></button>
            <button class="keyboard__action" data-type="block-ref"><svg><use xlink:href="#iconRef"></use></svg></button>
            <button class="keyboard__action" data-type="a"><svg><use xlink:href="#iconLink"></use></svg></button>
            <button class="keyboard__action" data-type="text"><svg><use xlink:href="#iconFont"></use></svg></button>
            <button class="keyboard__action" data-type="strong"><svg><use xlink:href="#iconBold"></use></svg></button>
            <button class="keyboard__action" data-type="em"><svg><use xlink:href="#iconItalic"></use></svg></button>
            <button class="keyboard__action" data-type="u"><svg><use xlink:href="#iconUnderline"></use></svg></button>
            <button class="keyboard__action" data-type="s"><svg><use xlink:href="#iconStrike"></use></svg></button>
            <button class="keyboard__action" data-type="mark"><svg><use xlink:href="#iconMark"></use></svg></button>
            <button class="keyboard__action" data-type="sup"><svg><use xlink:href="#iconSup"></use></svg></button>
            <button class="keyboard__action" data-type="sub"><svg><use xlink:href="#iconSub"></use></svg></button>
            <button class="keyboard__action" data-type="clear"><svg><use xlink:href="#iconClear"></use></svg></button>
            <button class="keyboard__action" data-type="code"><svg><use xlink:href="#iconInlineCode"></use></svg></button>
            <button class="keyboard__action" data-type="kbd"<use xlink:href="#iconKeymap"></use></svg></button>
            <button class="keyboard__action" data-type="tag"><svg><use xlink:href="#iconTags"></use></svg></button>
            <button class="keyboard__action" data-type="inline-math"><svg><use xlink:href="#iconMath"></use></svg></button>
            <button class="keyboard__action" data-type="inline-memo"><svg><use xlink:href="#iconM"></use></svg></button>
            <button class="keyboard__action" data-type="goback"><svg><use xlink:href="#iconCloseRound"></use></svg></button>
        </div>
    </div>
    <span class="keyboard__split"></span>
    <button class="keyboard__action" data-type="done"><svg style="width: 36px"><use xlink:href="#iconKeyboardHide"></use></svg></button>
</div>
<div class="keyboard__util"></div>`;
    toolbarElement.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        const slashBtnElement = hasClosestByClassName(event.target as HTMLElement, "keyboard__slash-item");
        const protyle = window.siyuan.mobile.editor.protyle;
        if (slashBtnElement) {
            const dataValue = decodeURIComponent(slashBtnElement.getAttribute("data-value"));
            protyle.hint.fill(dataValue, protyle, false);   // 点击后 range 会改变
            if (dataValue !== Constants.ZWSP + 3) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (slashBtnElement.getAttribute("data-focus") === "true") {
                focusByRange(protyle.toolbar.range);
            }
            return;
        }
        const buttonElement = hasClosestByMatchTag(target, "BUTTON");
        if (!buttonElement || buttonElement.getAttribute("disabled")) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const range = getSelection().getRangeAt(0);
        const type = buttonElement.getAttribute("data-type");
        if (type === "done") {
            if (toolbarElement.clientHeight > 100) {
                focusByRange(range);
            } else {
                activeBlur();
                hideKeyboardToolbar();
            }
            return;
        }
        if (window.siyuan.config.readonly || window.siyuan.config.editor.readOnly || !window.siyuan.mobile.editor) {
            return;
        }
        if (type === "undo") {
            protyle.undo.undo(protyle);
            return;
        } else if (type === "redo") {
            protyle.undo.redo(protyle);
            return;
        }
        if (getSelection().rangeCount === 0) {
            return;
        }
        const nodeElement = hasClosestBlock(range.startContainer);
        if (!nodeElement) {
            return;
        }
        // inline element
        if (type === "goback") {
            toolbarElement.querySelector('.keyboard__action[data-type="goinline"]').classList.remove("protyle-toolbar__item--current");
            const dynamicElements = document.querySelectorAll("#keyboardToolbar .keyboard__dynamic");
            dynamicElements[0].classList.remove("fn__none");
            dynamicElements[1].classList.add("fn__none");
            focusByRange(range);
            preventRender = true;
            setTimeout(() => {
                preventRender = false;
            }, 1000);
            return;
        } else if (type === "goinline") {
            buttonElement.classList.add("protyle-toolbar__item--current");
            const dynamicElements = document.querySelectorAll("#keyboardToolbar .keyboard__dynamic");
            dynamicElements[1].classList.remove("fn__none");
            dynamicElements[0].classList.add("fn__none");
            focusByRange(range);
            return;
        } else if (["a", "block-ref", "inline-math", "inline-memo", "text"].includes(type)) {
            protyle.toolbar.element.querySelector(`[data-type="${type}"]`).dispatchEvent(new CustomEvent("click"));
            return;
        } else if (["strong", "em", "s", "code", "mark", "tag", "u", "sup", "clear", "sub", "kbd"].includes(type)) {
            protyle.toolbar.setInlineMark(protyle, type, "toolbar");
            return;
        } else if (type === "moveup") {
            moveToUp(protyle, nodeElement, range);
            focusByRange(range);
            return;
        } else if (type === "movedown") {
            moveToDown(protyle, nodeElement, range);
            focusByRange(range);
            return;
        } else if (type === "add") {
            if (buttonElement.classList.contains("protyle-toolbar__item--current")) {
                focusByRange(range);
            } else {
                buttonElement.classList.add("protyle-toolbar__item--current");
                toolbarElement.querySelector('.keyboard__action[data-type="done"] use').setAttribute("xlink:href", "#iconCloseRound");
                const oldScrollTop = window.siyuan.mobile.editor.protyle.contentElement.scrollTop;
                renderSlashMenu(protyle, toolbarElement);
                showKeyboardToolbarUtil(oldScrollTop);
            }
            return;
        } else if (type === "more") {
            protyle.breadcrumb.showMenu(protyle, {
                x: 0,
                y: 0
            });
            activeBlur();
            hideKeyboardToolbar();
            return;
        } else if (type === "block") {
            protyle.gutter.renderMenu(protyle, nodeElement);
            window.siyuan.menus.menu.fullscreen();
            activeBlur();
            hideKeyboardToolbar();
            return;
        } else if (type === "outdent") {
            listOutdent(protyle, [nodeElement.parentElement], range);
            focusByRange(range);
            return;
        } else if (type === "indent") {
            listIndent(protyle, [nodeElement.parentElement], range);
            focusByRange(range);
        }
    });
};
