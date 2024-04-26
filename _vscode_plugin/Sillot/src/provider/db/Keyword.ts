import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Keyword;

/**
 * 关键字补全项
 */
export const KeywordCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Keyword1",
        kind: _kind,
        insertText: "Keyword",
        documentation: "The name of the Keyword.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Keyword2",
        kind: _kind,
        insertText: "Keyword",
        documentation: "The name of the Keyword.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Keyword3",
        kind: _kind,
        insertText: "Keyword",
        documentation: "The name of the Keyword.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Keyword4",
        kind: _kind,
        insertText: "Keyword",
        documentation: "The name of the Keyword.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Keyword4",
        kind: _kind,
        insertText: "Keyword",
        documentation: "The name of the Keyword.",
        detail: "This is the first type parameter completion item.",
    },
];
