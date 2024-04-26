import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Constant;

/**
 * 常量补全项
 */
export const ConstantCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Constant1",
        kind: _kind,
        insertText: "Constant",
        documentation: "The name of the Constant.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Constant2",
        kind: _kind,
        insertText: "Constant",
        documentation: "The name of the Constant.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Constant3",
        kind: _kind,
        insertText: "Constant",
        documentation: "The name of the Constant.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Constant4",
        kind: _kind,
        insertText: "Constant",
        documentation: "The name of the Constant.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Constant4",
        kind: _kind,
        insertText: "Constant",
        documentation: "The name of the Constant.",
        detail: "This is the first type parameter completion item.",
    },
];
