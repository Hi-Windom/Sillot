import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.TypeParameter;

const _ = new vscode.CompletionItem("TypeParameter", _kind);

/**
 * 类型参数补全项
 */
export const TypeParameterCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "TypeParameter1",
        kind: _kind,
        insertText: "TypeParameter",
        documentation: "The name of the TypeParameter.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "TypeParameter2",
        kind: _kind,
        insertText: "TypeParameter",
        documentation: "The name of the TypeParameter.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "TypeParameter3",
        kind: _kind,
        insertText: "TypeParameter",
        documentation: "The name of the TypeParameter.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "TypeParameter4",
        kind: _kind,
        insertText: "TypeParameter",
        documentation: "The name of the TypeParameter.",
        detail: "This is the first type parameter completion item.",
    },
];
