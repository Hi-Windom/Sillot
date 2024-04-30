import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Snippet;

/**
 * 代码片段补全项
 */
export const SnippetCompletionItems: Array<vscode.CompletionItem> = [
    {
        label: "Snippet1",
        kind: _kind,
        insertText: "Snippet",
        documentation: "The name of the Snippet.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Snippet2",
        kind: _kind,
        insertText: "Snippet",
        documentation: "The name of the Snippet.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Snippet3",
        kind: _kind,
        insertText: "Snippet",
        documentation: "The name of the Snippet.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Snippet4",
        kind: _kind,
        insertText: "Snippet",
        documentation: "The name of the Snippet.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Snippet4",
        kind: _kind,
        insertText: "Snippet",
        documentation: "The name of the Snippet.",
        detail: "This is the first type parameter completion item.",
    },
];
