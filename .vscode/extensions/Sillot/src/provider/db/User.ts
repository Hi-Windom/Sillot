import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.User;

/**
 * 用户定义的补全项
 */
export const UserCompletionItems: Array<vscode.CompletionItem> = [
    {
        label: "User1",
        kind: _kind,
        insertText: "User",
        documentation: "The name of the User.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "User2",
        kind: _kind,
        insertText: "User",
        documentation: "The name of the User.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "User3",
        kind: _kind,
        insertText: "User",
        documentation: "The name of the User.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "User4",
        kind: _kind,
        insertText: "User",
        documentation: "The name of the User.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "User4",
        kind: _kind,
        insertText: "User",
        documentation: "The name of the User.",
        detail: "This is the first type parameter completion item.",
    },
];
