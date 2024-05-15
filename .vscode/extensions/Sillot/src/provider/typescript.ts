import * as vscode from "vscode";
import ts from "typescript";
import fs from "fs-extra";
import json5 from "json5";
import * as path from "path";
import { Log } from "../utils/log";

export function registerHoverProvider_window_siyuan_languages(context: vscode.ExtensionContext) {
    const provider = new SiyuanHoverProvider();
    const registration = vscode.languages.registerHoverProvider("typescript", provider);
    context.subscriptions.push(registration);
    Log.i("registerHoverProvider_window_siyuan_languages 成功");
}

class SiyuanHoverProvider implements vscode.HoverProvider {
    private expressionChain: string | undefined = undefined;
    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        const filePath = document.uri.fsPath;

        // 使用TypeScript Compiler API解析文件
        const sourceFile = this.getSourceFile(filePath);
        if (!sourceFile) {
            return null;
        }
        Log.i(`使用TypeScript Compiler API解析 ${filePath} 成功`);

        // 查找包含当前位置的表达式
        const targetExpression = "window.siyuan.languages.";

        const node = this.给我搜(document, position, targetExpression, "startWith");
        Log.i("查找包含当前位置的表达式 成功", String(node?.kind));

        if (vscode.workspace.workspaceFile && this.expressionChain) {
            Log.i(`解析属性访问表达式${this.expressionChain} 成功`);
            // 读取.sillot.jsonc文件
            const workspaceFileDir = path.dirname(vscode.workspace.workspaceFile.fsPath);
            const sillotJsoncPath = path.join(workspaceFileDir, ".sillot.jsonc");
            const sillotJsoncContent = fs.readFileSync(sillotJsoncPath, "utf-8");
            const sillotJson = json5.parse(sillotJsoncContent);

            const _key = this.expressionChain.replace(targetExpression, "");
            // 遍历.sillot.jsonc文件中的所有语言
            const languages = sillotJson.i18n.siyuan.ts["window_siyuan_languages"];
            let combinedHoverText = new vscode.MarkdownString();
            let hasMatches = false;
            const _hasOwnProperty = Object.prototype.hasOwnProperty;
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

            // 如果有任何匹配，添加文件路径
            if (hasMatches) {
                combinedHoverText.appendMarkdown(
                    `${this.expressionChain} \n\n**config this in .sillot.json at**: ` + workspaceFileDir + "  \n\n"
                );
            }

            // 创建最终的Hover对象
            const combinedHover = new vscode.Hover(combinedHoverText);

            return combinedHover;
        }
        Log.i("检查是否是`window.siyuan.languages`的属性访问 成功");

        return null;
    }

    private getSourceFile(filePath: string): ts.SourceFile | undefined {
        const program = ts.createProgram([filePath], {});
        return program.getSourceFile(filePath);
    }

    private hoverForCode(key: string, filePath: string, lang: string) {
        const resources = getResources(filePath);
        const KeyValue = resources.find(item => item.key === key)?.value;

        if (KeyValue) {
            const fileUri = vscode.Uri.file(filePath); // 可以进一步调整到 key 所在行，但是没必要
            const keyValueText = `[${lang}](${fileUri}) : **${KeyValue}**  \n\n`;
            return [keyValueText];
        }

        // 如果没有找到对应的KeyValue，返回空字符串
        return [""];
    }

    private 给我搜(文档: vscode.TextDocument, 位置: vscode.Position, 目标表达式: string, 模式: "equal" | "startWith"): ts.Node | undefined {
        const createSourceFileFromDocument = (文档: vscode.TextDocument): ts.SourceFile => {
            const 文件名 = 文档.uri.toString();
            const 文本 = 文档.getText();
            return ts.createSourceFile(文件名, 文本, ts.ScriptTarget.ESNext, true);
        };

        const 源文件 = createSourceFileFromDocument(文档);
        const isPositionWithinNode = (位置: vscode.Position, 节点: ts.Node): boolean => {
            let 开始 = 源文件.getLineAndCharacterOfPosition(节点.getStart());
            let 结束 = 源文件.getLineAndCharacterOfPosition(节点.getEnd());

            // 如果是元素访问表达式，调整结束位置以包含方括号
            if (ts.isElementAccessExpression(节点)) {
                结束 = 源文件.getLineAndCharacterOfPosition(节点.argumentExpression.getEnd());
            }

            return 开始.line <= 位置.line && 位置.line <= 结束.line && 开始.character <= 位置.character && 位置.character <= 结束.character;
        };

        const doesExpressionMatch = (节点: ts.Node, 目标表达式: string, 模式: "equal" | "startWith"): boolean => {
            if (!ts.isPropertyAccessExpression(节点) && !ts.isElementAccessExpression(节点)) {
                return false;
            }
            this.expressionChain = buildExpressionChain(节点);
            console.log("doesExpressionMatch", this.expressionChain);
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
            console.log("traverseAndFindNode", _isPositionWithinNode, _doesExpressionMatch);
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

        return traverseAndFindNode(源文件);
    }
}

function readJSONFile(filePath: string): any {
    try {
        const content = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(content);
    } catch (e) {
        vscode.window.showErrorMessage(String(e));
        return null;
    }
}

function flattenJson(jsonData: { [x: string]: any } | any[], parentKey = ""): any[] {
    let resources: any[] = [];
    let newKey: string;

    if (Array.isArray(jsonData)) {
        jsonData.forEach((item, index) => {
            newKey = parentKey ? `${parentKey}[${index}]` : `[${index}]`;
            if (typeof item === "object") {
                resources = resources.concat(flattenJson(item, newKey));
            } else {
                resources.push({
                    key: newKey,
                    value: item,
                });
            }
        });
    } else if (jsonData !== null && typeof jsonData === "object") {
        for (const key in jsonData) {
            // Check if the key is a numeric string and treat it as an array index
            if (/^\d+$/.test(key)) {
                newKey = parentKey ? `${parentKey}[${key}]` : `[${key}]`;
            } else {
                newKey = parentKey ? `${parentKey}.${key}` : key;
            }
            if (typeof jsonData[key] === "object") {
                resources = resources.concat(flattenJson(jsonData[key], newKey));
            } else {
                resources.push({
                    key: newKey,
                    value: jsonData[key],
                });
            }
        }
    }

    return resources;
}

function getResources(filePath: string) {
    const jsonData = readJSONFile(filePath);
    const resources = flattenJson(jsonData);
    return resources;
}

function buildExpressionChain(node: ts.Node): string | undefined {
    let expressionChain = "";
    let current: ts.Node | undefined = node;
    console.log("buildExpressionChain", node.getText());
    while (current) {
        console.log("buildExpressionChain current", current.getText());
        if (ts.isPropertyAccessExpression(current)) {
            // 如果当前节点是属性访问表达式，获取属性名并添加到链的前面
            expressionChain = "." + current.name.text + expressionChain;
            current = current.expression;
        } else if (ts.isElementAccessExpression(current)) {
            // 如果当前节点是元素访问表达式，获取索引并添加到链的前面
            const argument = current.argumentExpression;
            if (ts.isStringLiteral(argument) || ts.isNumericLiteral(argument)) {
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
