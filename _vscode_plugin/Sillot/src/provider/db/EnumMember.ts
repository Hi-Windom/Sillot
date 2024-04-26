import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.EnumMember;

/**
 * 枚举成员补全项
 */
export const EnumMemberCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "EnumMember1",
        kind: _kind,
        insertText: "EnumMember",
        documentation: "The name of the EnumMember.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "EnumMember2",
        kind: _kind,
        insertText: "EnumMember",
        documentation: "The name of the EnumMember.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "EnumMember3",
        kind: _kind,
        insertText: "EnumMember",
        documentation: "The name of the EnumMember.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "EnumMember4",
        kind: _kind,
        insertText: "EnumMember",
        documentation: "The name of the EnumMember.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "EnumMember4",
        kind: _kind,
        insertText: "EnumMember",
        documentation: "The name of the EnumMember.",
        detail: "This is the first type parameter completion item.",
    },
];
