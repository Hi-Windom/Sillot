import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Variable;

const _ = new vscode.CompletionItem("Variable", _kind);

/**
 * 变量补全项
 */
export const VariableCompletionItems: Array<vscode.CompletionItem> = [
    {
        label: "Variable1",
        kind: _kind,
        insertText: "Variable",
        documentation: "The name of the Variable.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Variable2",
        kind: _kind,
        insertText: "Variable",
        documentation: "The name of the Variable.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Variable3",
        kind: _kind,
        insertText: "Variable",
        documentation: "The name of the Variable.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Variable4",
        kind: _kind,
        insertText: "Variable",
        documentation: "The name of the Variable.",
        detail: "This is the first type parameter completion item.",
    },
];
