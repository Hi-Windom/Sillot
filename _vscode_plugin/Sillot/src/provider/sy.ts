import * as vscode from "vscode";
import { IssueCompletionItems } from "./db/Issue";
import { UserCompletionItems } from "./db/User";
import { TypeParameterCompletionItems } from "./db/TypeParameter";
import { OperatorCompletionItems } from "./db/Operator";
import { EventCompletionItems } from "./db/Event";
import { StructCompletionItems } from "./db/Struct";
import { ConstantCompletionItems } from "./db/Constant";
import { EnumMemberCompletionItems } from "./db/EnumMember";
import { FolderCompletionItems } from "./db/Folder";
import { FileCompletionItems } from "./db/File";
import { SnippetCompletionItems } from "./db/Snippet";
import { KeywordCompletionItems } from "./db/Keyword";
import { EnumCompletionItems } from "./db/Enum";
import { PropertyCompletionItems } from "./db/Property";
import { ModuleCompletionItems } from "./db/Module";
import { InterfaceCompletionItems } from "./db/Interface";
import { ClassCompletionItems } from "./db/Class";
import { VariableCompletionItems } from "./db/Variable";
import { FieldCompletionItems } from "./db/Field";
import { FunctionCompletionItems } from "./db/Function";
import { MethodCompletionItems } from "./db/Method";

export class SyHoverProvider implements vscode.HoverProvider {
    public provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        let hoverText: vscode.MarkdownString | "" = "";
        if (word === "Properties") {
            hoverText = new vscode.MarkdownString("节点属性");
        }
        if (word === "ID") {
            hoverText = new vscode.MarkdownString("节点ID");
        }
        if (word === "Type") {
            hoverText = new vscode.MarkdownString("节点类型");
        }
        if (word === "updated") {
            hoverText = new vscode.MarkdownString("节点更新时间");
        }
        if (word === "HeadingLevel") {
            hoverText = new vscode.MarkdownString("节点内容");
        }
        if (word === "Data") {
            hoverText = new vscode.MarkdownString("标题级别");
        }
        if (hoverText !== "") {
            return new vscode.Hover(hoverText);
        }
        return null;
    }
}

export class SyCompletionItemProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        const completionItems: vscode.CompletionItem[] = [];

        const arraysToMerge = [
            IssueCompletionItems,
            UserCompletionItems,
            TypeParameterCompletionItems,
            OperatorCompletionItems,
            EventCompletionItems,
            StructCompletionItems,
            ConstantCompletionItems,
            EnumMemberCompletionItems,
            FolderCompletionItems,
            FileCompletionItems,
            SnippetCompletionItems,
            KeywordCompletionItems,
            EnumCompletionItems,
            PropertyCompletionItems,
            ModuleCompletionItems,
            InterfaceCompletionItems,
            ClassCompletionItems,
            VariableCompletionItems,
            FieldCompletionItems,
            FunctionCompletionItems,
            MethodCompletionItems
        ];

        for (const arr of arraysToMerge) {
            for (const i of arr) {
                completionItems.push(i);
            }
        }

        // 示例
        const _ = new vscode.CompletionItem("绛亽主控巴枀普通开放平台");
        _.kind = vscode.CompletionItemKind.User;
        _.insertText = "绛亽主控巴枀普通开放平台";
        _.documentation = "The name of the User.";
        _.detail = "This is the User completion item.";
        _.filterText = "绛亽主控巴枀普通开放 平台 JJ Soledar Common Open Platform"; // 空格分割，中文支持拼音映射
        _.tags = [vscode.CompletionItemTag.Deprecated]; // 标记为已弃用
        completionItems.push(_);

        return completionItems;
    }
}
