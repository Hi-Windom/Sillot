import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Module;

/**
 * 模块补全项
 */
export const ModuleCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Module1",
        kind: _kind,
        insertText: "Module",
        documentation: "The name of the Module.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Module2",
        kind: _kind,
        insertText: "Module",
        documentation: "The name of the Module.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Module3",
        kind: _kind,
        insertText: "Module",
        documentation: "The name of the Module.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Module4",
        kind: _kind,
        insertText: "Module",
        documentation: "The name of the Module.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Module4",
        kind: _kind,
        insertText: "Module",
        documentation: "The name of the Module.",
        detail: "This is the first type parameter completion item.",
    },
];
