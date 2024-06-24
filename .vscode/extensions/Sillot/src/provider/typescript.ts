import * as vscode from "vscode";
import ts from "typescript";
import fs from "fs-extra";
import json5 from "json5";
import * as path from "path";
import { Log } from "../utils/log";
import { C } from "../extension.const";
import { flattenJson, readJSONFile } from "../utils/json";

export function registerHoverProvider_链式调用国际化(context: vscode.ExtensionContext) {
    const provider = new SiyuanHoverProvider();
    const registrationForTS = vscode.languages.registerHoverProvider("typescript", provider);
    const registrationForTSX = vscode.languages.registerHoverProvider("typescriptreact", provider);
    context.subscriptions.push(registrationForTS, registrationForTSX);
    Log.i("registerHoverProvider_链式调用国际化 成功");
}

class SiyuanHoverProvider implements vscode.HoverProvider {
    private expressionChain: string | undefined = undefined;
    private 源文件!: ts.SourceFile;
    private createSourceFileFromDocument = (文档: vscode.TextDocument): ts.SourceFile => {
        const 文件名 = 文档.uri.toString();
        const 文本 = 文档.getText();
        return ts.createSourceFile(文件名, 文本, ts.ScriptTarget.ESNext, true);
    };

    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        const filePath = document.uri.fsPath;
        this.源文件 = this.createSourceFileFromDocument(document);

        // 使用TypeScript Compiler API解析文件
        const sourceFile = this.getSourceFile(filePath);
        if (!sourceFile) {
            return null;
        }
        Log.i(`使用TypeScript Compiler API解析 ${filePath} 成功`);

        // 查找包含当前位置的表达式
        if (vscode.workspace.workspaceFile) {
            const _hasOwnProperty = Object.prototype.hasOwnProperty;
            // 读取.sillot.jsonc文件
            const workspaceFileDir = path.dirname(vscode.workspace.workspaceFile.fsPath);
            const sillotJsoncPath = path.join(workspaceFileDir, ".sillot.jsonc");
            const sillotJson = readJSONFile(sillotJsoncPath);
            let combinedHover: vscode.Hover | null = null;
            // 获取所有targetExpressions
            const targetExpressions = Object.keys(sillotJson.i18n.hover.ts);
            // console.log("targetExpressions", targetExpressions);
            for (const t of targetExpressions) {
                // console.log("t", t);
                const node = this.给我搜(position, t, "startWith"); // 主要是给 this.expressionChain 赋值
                Log.i("查找包含当前位置的表达式 成功", String(node?.kind));
                // 检查当前节点是否属于某个targetExpression
                if (this.expressionChain && sillotJson.i18n?.hover?.ts[t]) {
                    const _key = this.expressionChain.replace(t, "");
                    const languages = sillotJson.i18n.hover.ts[t];

                    const combinedHoverText = new vscode.MarkdownString();
                    let hasMatches = false;

                    for (const lang in languages) {
                        if (_hasOwnProperty.call(languages, lang)) {
                            // 解析每种语言的路径
                            let langPath: string;
                            const langField = languages[lang];
                            if (langField[0] === "$workspaceFileDir") {
                                langPath = workspaceFileDir;
                            } else {
                                langPath = langField[0];
                            }

                            // 拼接所有路径片段并处理相对路径
                            for (let i = 1; i < langField.length; i++) {
                                langPath = path.resolve(langPath, langField[i]);
                            }

                            // 调用hoverForCode为每种语言生成Hover信息
                            const [keyValueText] = this.hoverForCode(_key, langPath, lang);

                            if (keyValueText) {
                                combinedHoverText.appendMarkdown(keyValueText);
                                hasMatches = true;
                            }
                        }
                    }

                    if (hasMatches) {
                        const fileUri = vscode.Uri.file(sillotJsoncPath);
                        combinedHoverText.appendMarkdown(
                            `${this.expressionChain} \n\n---\n\nconfig this in **[${C.extension_configFileName_workspace}](${fileUri})**\n\n`
                        );
                        // 创建最终的Hover对象
                        combinedHover = new vscode.Hover(combinedHoverText);
                        // 找到了直接返回，不需要考虑后面的 targetExpression
                        return combinedHover;
                    }
                }
                this.expressionChain = undefined; // 重置 this.expressionChain
            }

            // 返回最终的Hover对象
            return null;
        }
    }

    private getSourceFile(filePath: string): ts.SourceFile | undefined {
        const program = ts.createProgram([filePath], {});
        return program.getSourceFile(filePath);
    }

    private hoverForCode(key: string, filePath: string, lang: string) {
        const resources = getResources(filePath);
        const KeyValue = resources.find(item => item.key === key)?.value;
        // console.log(key, KeyValue, resources)
        if (KeyValue) {
            const fileUri = vscode.Uri.file(filePath); // 可以进一步调整到 key 所在行，但是没必要
            const keyValueText = `[${lang}](${fileUri}) : **${KeyValue}**  \n\n`;
            return [keyValueText];
        }

        // 如果没有找到对应的KeyValue，返回空字符串
        return [""];
    }

    private 给我搜(位置: vscode.Position, 目标表达式: string, 模式: "equal" | "startWith"): ts.Node | undefined {
        const isPositionWithinNode = (位置: vscode.Position, 节点: ts.Node): boolean => {
            let 开始 = this.源文件.getLineAndCharacterOfPosition(节点.getStart());
            let 结束 = this.源文件.getLineAndCharacterOfPosition(节点.getEnd());

            // 如果是元素访问表达式，调整结束位置以包含方括号
            if (ts.isElementAccessExpression(节点)) {
                结束 = this.源文件.getLineAndCharacterOfPosition(节点.argumentExpression.getEnd());
            }
            return 开始.line <= 位置.line && 位置.line <= 结束.line && 开始.character <= 位置.character && 位置.character <= 结束.character;
        };

        const doesExpressionMatch = (节点: ts.Node, 目标表达式: string, 模式: "equal" | "startWith"): boolean => {
            if (!ts.isPropertyAccessExpression(节点) && !ts.isElementAccessExpression(节点)) {
                return false;
            }
            this.expressionChain = buildExpressionChain(节点);
            // console.log("doesExpressionMatch", this.expressionChain, 目标表达式);
            if (!this.expressionChain) {
                return false;
            }
            return 模式 === "equal"
                ? this.expressionChain === 目标表达式
                : 模式 === "startWith"
                  ? this.expressionChain.startsWith(目标表达式)
                  : false;
        };

        const traverseAndFindNode = (节点: ts.Node): ts.Node | undefined => {
            const _isPositionWithinNode = isPositionWithinNode(位置, 节点);
            const _doesExpressionMatch = doesExpressionMatch(节点, 目标表达式, 模式);
            // console.log("traverseAndFindNode", _isPositionWithinNode, _doesExpressionMatch);
            if (_isPositionWithinNode && _doesExpressionMatch) {
                return 节点;
            }
            for (const 子节点 of 节点.getChildren()) {
                const 结果 = traverseAndFindNode(子节点);
                if (结果) {
                    return 结果;
                }
            }
            return undefined;
        };

        return traverseAndFindNode(this.源文件);
    }
}

function getResources(filePath: string) {
    const jsonData = readJSONFile(filePath);
    const resources = flattenJson(jsonData);
    return resources;
}

function buildExpressionChain(node: ts.Node): string | undefined {
    let expressionChain = "";
    let current: ts.Node | undefined = node;
    // console.log("buildExpressionChain", node.getText());
    while (current) {
        // console.log("buildExpressionChain current", current.getText());
        if (ts.isPropertyAccessExpression(current)) {
            // 如果当前节点是属性访问表达式，获取属性名并添加到链的前面
            expressionChain = "." + current.name.text + expressionChain;
            current = current.expression;
        } else if (ts.isElementAccessExpression(current)) {
            // 如果当前节点是元素访问表达式，获取索引并添加到链的前面
            const argument = current.argumentExpression;
            if (ts.isStringLiteral(argument)) {
                // 将字符串索引转换为属性访问的形式
                expressionChain = "." + argument.text + expressionChain;
                current = current.expression;
            } else if (ts.isNumericLiteral(argument)) {
                // 数值索引保持不变
                expressionChain = `[${argument.text}]` + expressionChain;
                current = current.expression;
            } else {
                // 如果元素访问表达式的索引不是字面量，则无法构建链
                return undefined;
            }
        } else if (ts.isIdentifier(current)) {
            // 如果当前节点是标识符，将其添加到链的前面并结束循环
            expressionChain = current.text + expressionChain;
            break;
        } else {
            // 如果当前节点既不是属性访问表达式也不是标识符，无法构建链
            return undefined;
        }
    }

    return expressionChain;
}
