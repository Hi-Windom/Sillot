import type * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import type { ColorPaletteProp } from "@mui/joy/styles"

// OverridableStringUnion 无法从 mui 引入，自己造一个
type OverridableStringUnion<T extends ColorPaletteProp = ColorPaletteProp, U extends string =  string> = {
    [key in U]: T;
};
export type OverridableColorTheme = OverridableStringUnion<ColorPaletteProp, ColorsThemeKeys>;
export type OverridableColorLang = OverridableStringUnion<ColorPaletteProp, ColorsLangKeys>;

export type TypeGroupList<T extends string = string> = {
    [key: string]: T[];
};

export type TypeStringKV<T extends string = string> = {
    [key in T]: string;
};

type ColorsThemeKeys = 'build-in' | 'Light' | 'Dark';
type ColorsLangKeys = 'IntelliSenseable' | 'Popular' | 'Other';

export const initEditorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
    // value: "",
    autoDetectHighContrast: true, // 根据OS配置自动切换为高对比度主题（仅内置主题）
    acceptSuggestionOnCommitCharacter: true, // 接受关于提交字符的建议
    acceptSuggestionOnEnter: "on", // ENTER接受输入建议
    tabCompletion: "on", // 使用 TAB 自动补全（与ENTER不同，多次使用TAB会切换建议）
    accessibilityPageSize: 10, // 辅助功能页面大小 Number 说明：控制编辑器中可由屏幕阅读器读出的行数。警告：这对大于默认值的数字具有性能含义。
    accessibilitySupport: "on", // 辅助功能支持 控制编辑器是否应在为屏幕阅读器优化的模式下运行。
    autoClosingBrackets: "always", // 是否自动添加结束括号(包括中括号)
    autoClosingDelete: "always", // 是否自动删除结束括号(包括中括号)
    autoClosingOvertype: "always", // 是否关闭改写 即使用insert模式时是覆盖后面的文字还是不覆盖后面的文字
    autoClosingQuotes: "always", // 是否自动添加结束的单引号 双引号
    autoIndent: "advanced", // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
    automaticLayout: true, // 自动布局，即适应容器的宽高
    codeLens: true, // 是否显示codeLens 通过 CodeLens，你可以在专注于工作的同时了解代码所发生的情况 – 而无需离开编辑器。 可以查找代码引用、代码更改、关联的 Bug、工作项、代码评审和单元测试。
    codeLensFontFamily: "", // codeLens的字体样式
    codeLensFontSize: 14, // codeLens的字体大小
    colorDecorators: true, // 呈现内联色彩装饰器和颜色选择器
    comments: {
        ignoreEmptyLines: true, // 插入行注释时忽略空行。默认为真。
        insertSpace: true, // 在行注释标记之后和块注释标记内插入一个空格。默认为真。
    }, // 注释配置
    contextmenu: true, // 启用上下文菜单
    columnSelection: false, // 启用列编辑 启用后 shift + ↑↓ 列选择 ，但是副作用明显：鼠标选区也是列对齐的而不是开始结束区间，不符合使用习惯。这个选项不影响 alt + ↑↓ 移动行。禁用后，可以使用 alt + click 实现同等效果
    autoSurround: "never", // 是否应自动环绕选择
    copyWithSyntaxHighlighting: true, // 是否应将语法突出显示复制到剪贴板中 即 当你复制到word中是否保持文字高亮颜色
    cursorBlinking: "smooth", // 光标动画样式
    cursorSmoothCaretAnimation: "on", // 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
    cursorStyle: "line", // 光标样式
    cursorSurroundingLines: 3, // 光标环绕行数 当文字输入超过屏幕时 环绕行数越大 光标在滚动条中位置越居中
    cursorSurroundingLinesStyle: "all", // 光标环绕样式
    cursorWidth: 2, // <=25 光标宽度
    minimap: {
        enabled: true, // 是否启用预览图
    },
    folding: true, // 是否启用代码折叠
    links: true, // 是否允许打开链接
    overviewRulerBorder: false, // 是否应围绕概览标尺绘制边框，绘制的话暗黑模式很难看
    renderLineHighlight: "all", // 当前行突出显示方式
    roundedSelection: true, // 选区是否有圆角
    scrollBeyondLastLine: false, // 设置编辑器是否可以滚动到最后一行之后
    wordWrap: "on", // 自动换行
    wordBreak: "keepAll", // 针对CJK文字
    fontSize: 14, // 字体大小
    insertSpaces: true, // TAB转空格
    matchBrackets: "always", // 括号高亮
    mouseWheelZoom: true, // ctrl + wheel 缩放
    multiCursorLimit: 20, // 最多允许同时存在的光标
    padding: { top: 16, bottom: 16 }, // 上下留白
    renderWhitespace: "selection", // 渲染哪些空白字符
    smoothScrolling: false, // 平滑滚动（效果不佳）
    showUnused: true, // 未使用的变量显示
    // suggestFontSize: 16, // 自动建议的字体大小，默认使用编辑器字体大小可以跟随滚轮缩放
    tabSize: 2, // TAB 缩进量
};

export const fontSliderMasks = [
    {
        value: 8,
        label: "8",
    },
    {
        value: 16,
        label: "16",
    },
    {
        value: 24,
        label: "24",
    },
    {
        value: 32,
        label: "32",
    },
]

export const groupTheme: TypeGroupList = {
    "build-in": ["vs", "vs-dark", "hc-light", "hc-black"],
    Light: ["IPlastic", "Katzenmilch", "Solarized-light"],
    Dark: [
        "Birds-of-Paradise",
        "Blackboard",
        "Cobalt",
        "Cobalt2",
        "Dracula",
        "IdleFingers",
        "Monokai",
        "Night-Owl",
        "Sunburst",
        "Tomorrow-Night-Eighties",
        "Zenburnesque",
    ],
};

export const colorsTheme: OverridableColorTheme = {
    "build-in": "success",
    Dark: "warning",
    Light: "danger",
};

export const colorsLang: OverridableColorLang = {
    IntelliSenseable: "success",
    Popular: "warning",
    Other: "danger",
};

export function isLightTheme(theme: string): boolean {
    const ltArray = ["vs", "hc-light", "IPlastic", "Katzenmilch", "Solarized-light"];
    if (ltArray.includes(theme)) return true;
    return false;
}

export const groupLang: TypeGroupList = {
    IntelliSenseable: ["css", "html", "json", "javascript", "less", "scss", "typescript"],
    Popular: ["cpp", "csharp", "go", "markdown", "python", "sql", "xml", "yaml", "kotlin"],
    Other: [
        "dart",
        "dockerfile",
        "fsharp",
        "java",
        "julia",
        "lua",
        "objective-c",
        "pascal",
        "perl",
        "pgsql",
        "php",
        "powershell",
        "r",
        "ruby",
        "rust",
        "shell",
        "vb",
    ],
};

export const groupLangText: TypeStringKV = {
    css: "CSS",
    html: "HTML",
    json: "Json",
    javascript: "JavaScript",
    less: "Less",
    scss: "Scss",
    typescript: "TypeScript",
    cpp: "C++",
    csharp: "C#",
    dart: "Dart",
    dockerfile: "Dockerfile",
    fsharp: "F#",
    go: "Go",
    java: "Java",
    julia: "Julia",
    kotlin: "Kotlin",
    lua: "Lua",
    markdown: "Markdown",
    "objective-c": "Objective-C",
    pascal: "Pascal",
    perl: "Perl",
    pgsql: "PostgreSQL",
    php: "PHP",
    powershell: "PowerShell",
    python: "Python",
    r: "R",
    ruby: "Ruby",
    rust: "Rust",
    shell: "Shell",
    sql: "SQL",
    vb: "VB",
    xml: "XML",
    yaml: "Yaml",
};

// 值得一提的是，根据monaco-editor的说法，整个支持的语言分为两组：

// 具有丰富和验证的语言IntelliSense ...
// 仅具有基本语法着色的语言 ...
