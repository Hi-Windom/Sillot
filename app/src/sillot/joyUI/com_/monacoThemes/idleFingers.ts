import type { editor } from "monaco-editor/esm/vs/editor/editor.api.js";
const theme: editor.IStandaloneThemeData = {
    base: "vs-dark",
    inherit: true,
    rules: [
        {
            background: "323232",
            token: "",
        },
        {
            foreground: "ffffff",
            token: "text",
        },
        {
            foreground: "cdcdcd",
            background: "282828",
            token: "source",
        },
        {
            foreground: "bc9458",
            fontStyle: "italic",
            token: "comment",
        },
        {
            foreground: "ffe5bb",
            token: "meta.tag",
        },
        {
            foreground: "ffe5bb",
            token: "declaration.tag",
        },
        {
            foreground: "ffe5bb",
            token: "meta.doctype",
        },
        {
            foreground: "ffc66d",
            token: "entity.name",
        },
        {
            foreground: "fff980",
            token: "source.ruby entity.name",
        },
        {
            foreground: "b7dff8",
            token: "variable.other",
        },
        {
            foreground: "cccc33",
            token: "support.class.ruby",
        },
        {
            foreground: "6c99bb",
            token: "constant",
        },
        {
            foreground: "6c99bb",
            token: "support.constant",
        },
        {
            foreground: "cc7833",
            token: "keyword",
        },
        {
            foreground: "d0d0ff",
            token: "other.preprocessor.c",
        },
        {
            fontStyle: "italic",
            token: "variable.parameter",
        },
        {
            foreground: "ffffff",
            background: "575757",
            token: "source comment.block",
        },
        {
            foreground: "a5c261",
            token: "string",
        },
        {
            foreground: "aaaaaa",
            token: "string constant.character.escape",
        },
        {
            foreground: "000000",
            background: "cccc33",
            token: "string.interpolated",
        },
        {
            foreground: "cccc33",
            token: "string.regexp",
        },
        {
            foreground: "cccc33",
            token: "string.literal",
        },
        {
            foreground: "787878",
            token: "string.interpolated constant.character.escape",
        },
        {
            fontStyle: "underline",
            token: "entity.name.class",
        },
        {
            fontStyle: "italic underline",
            token: "entity.other.inherited-class",
        },
        {
            foreground: "b83426",
            token: "support.function",
        },
        {
            foreground: "6ea533",
            token: "markup.list.unnumbered.textile",
        },
        {
            foreground: "6ea533",
            token: "markup.list.numbered.textile",
        },
        {
            foreground: "c2c2c2",
            fontStyle: "bold",
            token: "markup.bold.textile",
        },
        {
            foreground: "ffffff",
            background: "ff0000",
            token: "invalid",
        },
        {
            foreground: "323232",
            background: "fff980",
            token: "collab.user1",
        },
    ],
    colors: {
        "editor.foreground": "#FFFFFF",
        "editor.background": "#323232",
        "editor.selectionBackground": "#5A647EE0",
        "editor.lineHighlightBackground": "#353637",
        "editorCursor.foreground": "#91FF00",
        "editorWhitespace.foreground": "#404040",
    },
};
export default theme;
