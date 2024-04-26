import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Folder;

/**
 * 文件夹补全项
 */
export const FolderCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Folder1",
        kind: _kind,
        insertText: "Folder",
        documentation: "The name of the Folder.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Folder2",
        kind: _kind,
        insertText: "Folder",
        documentation: "The name of the Folder.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Folder3",
        kind: _kind,
        insertText: "Folder",
        documentation: "The name of the Folder.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Folder4",
        kind: _kind,
        insertText: "Folder",
        documentation: "The name of the Folder.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Folder4",
        kind: _kind,
        insertText: "Folder",
        documentation: "The name of the Folder.",
        detail: "This is the first type parameter completion item.",
    },
];
