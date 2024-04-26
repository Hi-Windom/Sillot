import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Enum;

/**
 * 枚举补全项
 */
export const EnumCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Enum1",
        kind: _kind,
        insertText: "Enum",
        documentation: "The name of the Enum.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Enum2",
        kind: _kind,
        insertText: "Enum",
        documentation: "The name of the Enum.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Enum3",
        kind: _kind,
        insertText: "Enum",
        documentation: "The name of the Enum.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Enum4",
        kind: _kind,
        insertText: "Enum",
        documentation: "The name of the Enum.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Enum4",
        kind: _kind,
        insertText: "Enum",
        documentation: "The name of the Enum.",
        detail: "This is the first type parameter completion item.",
    },
];
