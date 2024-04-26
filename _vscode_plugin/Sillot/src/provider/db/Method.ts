import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Method;

const _ = new vscode.CompletionItem("Method", _kind);

/**
 * 方法补全项
 */
export const MethodCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Method1",
        kind: _kind,
        insertText: "Method",
        documentation: "The name of the Method.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Method2",
        kind: _kind,
        insertText: "Method",
        documentation: "The name of the Method.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Method3",
        kind: _kind,
        insertText: "Method",
        documentation: "The name of the Method.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Method4",
        kind: _kind,
        insertText: "Method",
        documentation: "The name of the Method.",
        detail: "This is the first type parameter completion item.",
    },
];
