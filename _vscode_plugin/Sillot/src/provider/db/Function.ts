import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Function;

const _ = new vscode.CompletionItem("Function", _kind);

/**
 * 函数补全项
 */
export const FunctionCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Function1",
        kind: _kind,
        insertText: "Function",
        documentation: "The name of the Function.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Function2",
        kind: _kind,
        insertText: "Function",
        documentation: "The name of the Function.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Function3",
        kind: _kind,
        insertText: "Function",
        documentation: "The name of the Function.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Function4",
        kind: _kind,
        insertText: "Function",
        documentation: "The name of the Function.",
        detail: "This is the first type parameter completion item.",
    },
];
