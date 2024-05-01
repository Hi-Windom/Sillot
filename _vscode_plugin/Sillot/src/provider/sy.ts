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
import { GenericCompletionItems_1 } from "./db/_GenericEntity";

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
        const completionItems = [
            ...GenericCompletionItems_1,
            ...IssueCompletionItems,
            ...UserCompletionItems,
            ...TypeParameterCompletionItems,
            ...OperatorCompletionItems,
            ...EventCompletionItems,
            ...StructCompletionItems,
            ...ConstantCompletionItems,
            ...EnumMemberCompletionItems,
            ...FolderCompletionItems,
            ...FileCompletionItems,
            ...SnippetCompletionItems,
            ...KeywordCompletionItems,
            ...EnumCompletionItems,
            ...PropertyCompletionItems,
            ...ModuleCompletionItems,
            ...InterfaceCompletionItems,
            ...ClassCompletionItems,
            ...VariableCompletionItems,
            ...FieldCompletionItems,
            ...FunctionCompletionItems,
            ...MethodCompletionItems,
        ];

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

export class SyCodeActionProvider implements vscode.CodeActionProvider {
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.ProviderResult<(vscode.Command | vscode.CodeAction)[]> {
        // 过滤出当前范围内的诊断
        const diagnostics = context.diagnostics.filter(d => d.range.intersection(range) !== null);

        // 为每个诊断创建代码操作
        const codeActions: vscode.CodeAction[] = diagnostics.map(diagnostic => {
            const action = new vscode.CodeAction('Fix JSON error', vscode.CodeActionKind.QuickFix);
            action.edit = new vscode.WorkspaceEdit();
            action.edit.delete(document.uri, diagnostic.range);
            action.diagnostics = [diagnostic];
            return action;
        });

        return codeActions;
    }
}

export class SySemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
    onDidChangeSemanticTokens?: vscode.Event<void> | undefined;
    provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens> {
        throw new Error("Method not implemented.");
    }
    provideDocumentSemanticTokensEdits?(document: vscode.TextDocument, previousResultId: string, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens | vscode.SemanticTokensEdits> {
        throw new Error("Method not implemented.");
    }
    provideSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens> {
        const tokensBuilder = new vscode.SemanticTokensBuilder();

        const text = document.getText();
        const lines = text.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const errors = this.checkLine(line, i);
            for (const error of errors) {
                tokensBuilder.push(error.range.start.line, error.range.start.character, error.range.end.character - error.range.start.character, error.type, 0);
            }
        }

        return tokensBuilder.build();
    }

    private checkLine(line: string, lineNumber: number): { range: vscode.Range; type: number }[] {
        const errors: { range: vscode.Range; type: number }[] = [];

        // 添加语法检查逻辑，比如检查尾随逗号
        if (line.trim().endsWith(',')) {
            const index = line.lastIndexOf(',');
            errors.push({
                range: new vscode.Range(lineNumber, index, lineNumber, index + 1),
                type: 1, // 使用一个唯一的类型来表示尾随逗号错误
            });
        }

        return errors;
    }
}

export function checkSpelling(document: vscode.TextDocument): vscode.Diagnostic[] {
    const diagnostics: vscode.Diagnostic[] = [];

    for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i);
        const words = line.text.split(/\s+/);
        for (const word of words) {
            if (!/^[a-zA-Z]+$/.test(word)) {
                const range = new vscode.Range(line.range.start, line.range.start.translate(0, word.length));
                diagnostics.push(new vscode.Diagnostic(range, 'Invalid word', vscode.DiagnosticSeverity.Error));
            }
        }
    }

    return diagnostics;
}
