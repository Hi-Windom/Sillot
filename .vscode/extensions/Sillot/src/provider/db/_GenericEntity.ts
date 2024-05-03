import * as vscode from "vscode";
const KS = vscode.CompletionItemKind;

/**
 * 通用自动完成项组1
 */
export const GenericCompletionItems_1: Array<vscode.CompletionItem> = [
    {
        label: "hi-windom",
        insertText: "Hi-Windom",
        documentation: "海文东",
        detail: "虚拟组织",
        kind: KS.User,
    },
    {
        label: "sillot",
        insertText: "Sillot",
        documentation: "汐洛",
        detail: "汐洛（Sillot）孵化自思源笔记（siyuan-note），致力于服务智慧新彖乄",
        kind: KS.User,
    },
    {
        label: "siyuan",
        documentation: "思源",
        detail: "",
        kind: KS.User,
    },
    {
        label: "siyuan-note/siyuan",
        documentation: "Github 思源笔记组织的思源仓库",
        detail: "",
        kind: KS.User,
    },
    {
        label: "Hi-Windom/Sillot",
        documentation: "Github 海文东组织的汐洛仓库",
        detail: "",
        kind: KS.User,
    },
];
