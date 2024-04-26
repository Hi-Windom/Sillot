import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.File;

/**
 * 文件补全项
 */
export const FileCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "File1",
        kind: _kind,
        insertText: "File",
        documentation: "The name of the File.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "File2",
        kind: _kind,
        insertText: "File",
        documentation: "The name of the File.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "File3",
        kind: _kind,
        insertText: "File",
        documentation: "The name of the File.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "File4",
        kind: _kind,
        insertText: "File",
        documentation: "The name of the File.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "File4",
        kind: _kind,
        insertText: "File",
        documentation: "The name of the File.",
        detail: "This is the first type parameter completion item.",
    },
];
