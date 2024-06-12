import * as vscode from "vscode";
import fs from "fs-extra";
import path, { resolve } from "path";
import { Log } from "../utils/log";
import { C } from "../extension.const";
import { loadCompletionItemsFromFile } from "../utils/json";
import { formatDate } from "sofill/mid";

export function add_task_同步更新版本(context: vscode.ExtensionContext) {
    const TAG = "汐洛.同步更新版本";
    const disposable = vscode.commands.registerCommand(TAG, async () => {
        const wname = vscode.workspace.name;
        if (wname && vscode.workspace.workspaceFile) {
            const pkgMapFile = `${path.dirname(vscode.workspace.workspaceFile.fsPath)}/${C.PackageJsonMapping}`;
            Log.d(wname, pkgMapFile);
            if (!(await fs.exists(pkgMapFile))) {
                vscode.window.showWarningMessage("package.json 映射不存在，请先添加");
                return;
            }
            const pkgMap: { [key: string]: any } = await loadCompletionItemsFromFile(pkgMapFile);
            const paths: string[] = pkgMap[wname];

            // 创建快速选择框
            const quickPick = vscode.window.createQuickPick();
            quickPick.title = "选择要更新版本的文件";
            quickPick.items = paths.map(path => ({ label: path }));
            quickPick.canSelectMany = true; // 允许多选

            // 显示快速选择框并等待用户选择
            const selectedOptions: string[] = await new Promise(resolve => {
                quickPick.onDidAccept(() => {
                    resolve(quickPick.selectedItems.map(item => item.label));
                    quickPick.dispose();
                });
                quickPick.onDidHide(() => {
                    resolve([]);
                    quickPick.dispose();
                });
                quickPick.show();
            });

            if (selectedOptions.length === 0) {
                // 如果用户没有选择任何选项，则直接返回
                return;
            }

            // 获取用户选择的路径的版本号
            const versionPromises = selectedOptions.map(async (value: string) => {
                if (await fs.exists(value)) {
                    const pkgContent = fs.readJSONSync(value);
                    return pkgContent.version;
                }
                return null; // 如果文件不存在，返回null
            });

            Promise.all(versionPromises).then(versions => {
                // 过滤掉null值
                const validVersions = versions.filter(version => version !== null);
                vscode.window
                    .showInputBox({
                        title: "请输入新版本号",
                        value: validVersions[0],
                        placeHolder: "如果是二段版本号会被使用格式化时间填充为三段版本号",
                        prompt: `旧版本号: ${validVersions.join(", ")})`,
                    })
                    .then(async version => {
                        if (version) {
                            // 检查 version 是否只有两段
                            const versionParts = version.split(".");
                            if (versionParts.length === 2) {
                                // 使用当前时间生成第三段版本号
                                const timestamp = formatDate(new Date(), "yyyyMMddHHmmss");
                                version = `${version}.${timestamp}`;
                            }
                            // 遍历映射并更新版本号
                            selectedOptions.forEach(async (value: string, index: number) => {
                                Log.d(TAG, value);
                                if (await fs.exists(value)) {
                                    const pkgContent = fs.readJSONSync(value);
                                    pkgContent.version = version;
                                    fs.writeFileSync(value, JSON.stringify(pkgContent, null, 2));
                                    Log.d(`${version} ->${value}`);
                                } else {
                                    vscode.window.showWarningMessage(`已跳过无效映射 ${value}`);
                                }
                            });
                            vscode.window.showInformationMessage("所有 package.json 文件的版本已更新。");
                        }
                    });
            });
        } else {
            vscode.window.showWarningMessage("当前不在工作区环境");
        }
    });

    context.subscriptions.push(disposable);
}
