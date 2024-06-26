import * as vscode from "vscode";
import path = require("path");
import { readJSONFile } from "../utils/json";
import { resolveSystemPath } from "../utils/path";

export function add_task_terminal_here(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand("sillot.terminalHere.create", async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const document = editor.document;
        if (!document) {
            return;
        }

        const uri = document.uri;
        if (!uri) {
            return;
        }

        let useChoice: string | undefined = undefined;
        if (vscode.workspace.workspaceFile) {
            // 读取.sillot.jsonc文件
            const workspaceFileDir = path.dirname(vscode.workspace.workspaceFile.fsPath);
            const sillotJsoncPath = path.join(workspaceFileDir, ".sillot.jsonc");
            const sillotJson = readJSONFile(sillotJsoncPath);
            const shellPathList = sillotJson.terminal?.shellPathList;
            if (!shellPathList) {
                useChoice = undefined; // 用户取消了选择
            } else {
                const selectedBatFile = await vscode.window.showQuickPick(shellPathList, {
                    placeHolder: "请选择终端路径",
                });
                if (!selectedBatFile) {
                    useChoice = undefined; // 用户取消了选择
                } else {
                    console.log(resolveSystemPath(selectedBatFile));
                    useChoice = resolveSystemPath(selectedBatFile);
                }
            }
        } else {
            useChoice = undefined;
        }
        if (useChoice) {
            vscode.window.createTerminal({
                cwd: path.dirname(uri.fsPath),
                shellPath: path.resolve(useChoice),
            }).show(false);
        } else {
            vscode.window.createTerminal({
                cwd: path.dirname(uri.fsPath),
            }).show(false);
        }
        vscode.window.showInformationMessage("注意：如果需要重载终端的环境变量，请不要通过 utools 等方式重启 vscode ");
    });

    context.subscriptions.push(disposable);
}
