import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Struct;

/**
 * 结构体补全项
 */
export const StructCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Struct1",
        kind: _kind,
        insertText: "Struct",
        documentation: "The name of the Struct.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Struct2",
        kind: _kind,
        insertText: "Struct",
        documentation: "The name of the Struct.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Struct3",
        kind: _kind,
        insertText: "Struct",
        documentation: "The name of the Struct.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Struct4",
        kind: _kind,
        insertText: "Struct",
        documentation: "The name of the Struct.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Struct4",
        kind: _kind,
        insertText: "Struct",
        documentation: "The name of the Struct.",
        detail: "This is the first type parameter completion item.",
    },
];
