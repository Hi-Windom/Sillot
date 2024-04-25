import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Issue

/**
 * 问题补全项
 */
export const IssueCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Issue1",
        kind: _kind,
        insertText: "Issue",
        documentation: "The name of the issue.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Issue2",
        kind: _kind,
        insertText: "Issue",
        documentation: "The name of the issue.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Issue3",
        kind: _kind,
        insertText: "Issue",
        documentation: "The name of the issue.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Issue4",
        kind: _kind,
        insertText: "Issue",
        documentation: "The name of the issue.",
        detail: "This is the first type parameter completion item.",
    },
];
