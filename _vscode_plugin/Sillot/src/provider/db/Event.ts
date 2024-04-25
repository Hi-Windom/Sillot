import * as vscode from "vscode";
const _kind = vscode.CompletionItemKind.Event

/**
 * 事件补全项
 */
export const EventCompletionItems : Array<vscode.CompletionItem> = [
    {
        label: "Event1",
        kind: _kind,
        insertText: "Event",
        documentation: "The name of the Event.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Event2",
        kind: _kind,
        insertText: "Event",
        documentation: "The name of the Event.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Event3",
        kind: _kind,
        insertText: "Event",
        documentation: "The name of the Event.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Event4",
        kind: _kind,
        insertText: "Event",
        documentation: "The name of the Event.",
        detail: "This is the first type parameter completion item.",
    },
    {
        label: "Event4",
        kind: _kind,
        insertText: "Event",
        documentation: "The name of the Event.",
        detail: "This is the first type parameter completion item.",
    },
];
