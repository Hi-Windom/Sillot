import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Property

/**
 * 属性补全项
 */
export const PropertyCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Property1",
        kind: _kind,
        insertText: "Property",
        documentation: "The name of the Property.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Property2",
        kind: _kind,
        insertText: "Property",
        documentation: "The name of the Property.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Property3",
        kind: _kind,
        insertText: "Property",
        documentation: "The name of the Property.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Property4",
        kind: _kind,
        insertText: "Property",
        documentation: "The name of the Property.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Property4",
        kind: _kind,
        insertText: "Property",
        documentation: "The name of the Property.",
        detail: "This is the first type parameter completion item.",
    },
];
