import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Field;

const _ = new vscode.CompletionItem("Field", _kind);

/**
 * 字段补全项
 */
export const FieldCompletionItems: Array<vscode.CompletionItem> = [
    {
        label: "Field1",
        kind: _kind,
        insertText: "Field",
        documentation: "The name of the Field.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Field2",
        kind: _kind,
        insertText: "Field",
        documentation: "The name of the Field.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Field3",
        kind: _kind,
        insertText: "Field",
        documentation: "The name of the Field.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Field4",
        kind: _kind,
        insertText: "Field",
        documentation: "The name of the Field.",
        detail: "This is the first type parameter completion item.",
    },
];
