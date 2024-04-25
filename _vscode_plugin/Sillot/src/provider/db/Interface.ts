import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Interface

/**
 * 接口补全项
 */
export const InterfaceCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Interface1",
        kind: _kind,
        insertText: "Interface",
        documentation: "The name of the Interface.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Interface2",
        kind: _kind,
        insertText: "Interface",
        documentation: "The name of the Interface.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Interface3",
        kind: _kind,
        insertText: "Interface",
        documentation: "The name of the Interface.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Interface4",
        kind: _kind,
        insertText: "Interface",
        documentation: "The name of the Interface.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Interface4",
        kind: _kind,
        insertText: "Interface",
        documentation: "The name of the Interface.",
        detail: "This is the first type parameter completion item.",
    },
];
