import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Operator

/**
 * 运算符补全项
 */
export const OperatorCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Operator1",
        kind: _kind,
        insertText: "Operator",
        documentation: "The name of the Operator.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Operator2",
        kind: _kind,
        insertText: "Operator",
        documentation: "The name of the Operator.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Operator3",
        kind: _kind,
        insertText: "Operator",
        documentation: "The name of the Operator.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Operator4",
        kind: _kind,
        insertText: "Operator",
        documentation: "The name of the Operator.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Operator4",
        kind: _kind,
        insertText: "Operator",
        documentation: "The name of the Operator.",
        detail: "This is the first type parameter completion item.",
    },
];
