const config = {
    theme: {
        regs: {
            // 正则表达式
            fontsize: /(?<=\.b3-typography|protyle-wysiwyg|protyle-title\s*\{\s*font-size\s*:\s*)(\d+)(?=px(?:\s+\!important)?(?:\s*;|\}))/,
        },
        wheel: {
            enable: true, // 滚轮功能开关
            zoom: {
                enable: true, // 滚轮缩放功能开关
                threshold: 100, // 滚轮缩放阈值
                min: 9, // 最小字号(px)
                max: 72, // 最大字号(px)
            },
        },
        hotkeys: {
            wheel: {
                zoom: {
                    // 鼠标滚轮缩放(Ctrl + wheel)
                    enable: true,
                    CtrlCmd: true,
                    WinCtrl: false,
                    Shift: false,
                    Alt: false,
                    type: 'mousewheel',
                },
            },
        },
    },
};

/**
 * 设置编辑器字号
 * REF https://github.com/siyuan-note/siyuan/blob/7fbae2f7438a313837218e419468e0b189163c6a/app/src/util/assets.ts#L120-L145
 * @param {number} fontSize 字号
 * @return {number} 设置后的字号
 * @return {null} 没有找到字号
 */
function setFontSize(fontSize) {
    let style = document.getElementById('editorFontSize');
    if (style) {
        const height = Math.floor(fontSize * 1.625);
        style.innerHTML = `
.b3-typography, .protyle-wysiwyg, .protyle-title {font-size:${fontSize}px !important}
.b3-typography code:not(.hljs), .protyle-wysiwyg span[data-type~=code] { font-variant-ligatures: ${window.siyuan.config.editor.codeLigatures ? "normal" : "none"} }
.li > .protyle-action {height:${height + 8}px;line-height: ${height + 8}px}
.protyle-wysiwyg [data-node-id].li > .protyle-action ~ .h1, .protyle-wysiwyg [data-node-id].li > .protyle-action ~ .h2, .protyle-wysiwyg [data-node-id].li > .protyle-action ~ .h3, .protyle-wysiwyg [data-node-id].li > .protyle-action ~ .h4, .protyle-wysiwyg [data-node-id].li > .protyle-action ~ .h5, .protyle-wysiwyg [data-node-id].li > .protyle-action ~ .h6 {line-height:${height + 8}px;}
.protyle-wysiwyg [data-node-id].li > .protyle-action:after {height: ${fontSize}px;width: ${fontSize}px;margin:-${fontSize / 2}px 0 0 -${fontSize / 2}px}
.protyle-wysiwyg [data-node-id].li > .protyle-action svg {height: ${Math.max(14, fontSize - 8)}px}
.protyle-wysiwyg [data-node-id] [spellcheck="false"] {min-height:${height}px}
.protyle-wysiwyg .li {min-height:${height + 8}px}
.protyle-gutters button svg {height:${height}px}
.protyle-wysiwyg img.emoji, .b3-typography img.emoji {width:${height - 8}px}
.protyle-wysiwyg .h1 img.emoji, .b3-typography h1 img.emoji {width:${Math.floor(fontSize * 1.75 * 1.25)}px}
.protyle-wysiwyg .h2 img.emoji, .b3-typography h2 img.emoji {width:${Math.floor(fontSize * 1.55 * 1.25)}px}
.protyle-wysiwyg .h3 img.emoji, .b3-typography h3 img.emoji {width:${Math.floor(fontSize * 1.38 * 1.25)}px}
.protyle-wysiwyg .h4 img.emoji, .b3-typography h4 img.emoji {width:${Math.floor(fontSize * 1.25 * 1.25)}px}
.protyle-wysiwyg .h5 img.emoji, .b3-typography h5 img.emoji {width:${Math.floor(fontSize * 1.13 * 1.25)}px}
.protyle-wysiwyg .h6 img.emoji, .b3-typography h6 img.emoji {width:${Math.floor(fontSize * 1.25)}px}
.b3-typography:not(.b3-typography--default), .protyle-wysiwyg, .protyle-title, .protyle-title__input{font-family: "${window.siyuan.config.editor.fontFamily}", "quote", "Helvetica Neue", "Luxi Sans", "DejaVu Sans", "Hiragino Sans GB", "Microsoft Yahei", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", "EmojiSymbols" !important;}
`;
        return parseInt(config.theme.regs.fontsize.exec(style.innerHTML));
    }
    return null;
}

/* 字号更改 */
function changeFontSize(delta) {
    let size = delta / config.theme.wheel.zoom.threshold | 0;
    let old_size = window.siyuan.config.editor.fontSize;
    let new_size = Math.max(Math.min(old_size + size, config.theme.wheel.zoom.max), config.theme.wheel.zoom.min);
    new_size = setFontSize(new_size);
    if (new_size) window.siyuan.config.editor.fontSize = new_size;
}

function isEvent(event, key) {
    return (event.type === key.type
        && event.altKey === key.Alt
        && event.shiftKey === key.Shift
        && (event.ctrlKey || event.metaKey) === key.CtrlCmd
        && (event.ctrlKey && event.metaKey) === key.WinCtrl
    )
}

document.addEventListener('mousewheel', e => {
    if (isEvent(e, config.theme.hotkeys.wheel.zoom)) {
        e.stopPropagation();
        setTimeout(() => changeFontSize(e.wheelDeltaY), 0);
    }
}, true);