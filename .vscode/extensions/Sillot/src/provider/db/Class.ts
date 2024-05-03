import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Class;

const _ = new vscode.CompletionItem("Class", _kind);

/**
 * 类补全项
 */
export const ClassCompletionItems: Array<vscode.CompletionItem> = [
    {
        label: "Class1",
        kind: _kind,
        insertText: "Class",
        documentation: "The name of the Class.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Class2",
        kind: _kind,
        insertText: "Class",
        documentation: "The name of the Class.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Class3",
        kind: _kind,
        insertText: "Class",
        documentation: "The name of the Class.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Class4",
        kind: _kind,
        insertText: "Class",
        documentation: "The name of the Class.",
        detail: "This is the first type parameter completion item.",
    },
];
