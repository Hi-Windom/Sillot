import * as vscode from "vscode";
import fs from "fs-extra";
import path, { resolve } from "path";
import { Log } from "../utils/log";
import { C } from "../extension.const";
import { loadCompletionItemsFromFile } from "../utils/json";

export function add_task_同步更新packageManager(context: vscode.ExtensionContext) {
    const TAG = "汐洛.同步更新packageManager";
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
                    return pkgContent.packageManager;
                }
                return null; // 如果文件不存在，返回null
            });

            Promise.all(versionPromises).then(async versions => {
                // 过滤掉null值
                const validVersions = versions.filter(packageManager => packageManager !== null);
                // 获取用户输入的版本号
                const packageManager = await getUserInput_packageManagerx(validVersions);
                if (packageManager) {
                    // 遍历映射并更新版本号
                    selectedOptions.forEach(async (value: string, index: number) => {
                        Log.d(TAG, value);
                        if (await fs.exists(value)) {
                            const pkgContent = fs.readJSONSync(value);
                            pkgContent.packageManager = packageManager;
                            fs.writeFileSync(value, JSON.stringify(pkgContent, null, 2));
                            Log.d(`${packageManager} ->${value}`);
                        } else {
                            vscode.window.showWarningMessage(`已跳过无效映射 ${value}`);
                        }
                    });
                    vscode.window.showInformationMessage("所有 package.json 文件的版本已更新。");
                } else {
                    vscode.window.showInformationMessage("操作已取消。");
                    return;
                }
                // vscode.window.showInputBox({ prompt: `输入新版本: (当前版本: ${validVersions.join(", ")})` }).then(async packageManager => {
                //     if (packageManager) {
                //         // 遍历映射并更新版本号
                //         selectedOptions.forEach(async (value: string, index: number) => {
                //             Log.d(TAG, value);
                //             if (await fs.exists(value)) {
                //                 const pkgContent = fs.readJSONSync(value);
                //                 pkgContent.packageManager = packageManager;
                //                 fs.writeFileSync(value, JSON.stringify(pkgContent, null, 2));
                //                 Log.d(`${packageManager} ->${value}`);
                //             } else {
                //                 vscode.window.showWarningMessage(`已跳过无效映射 ${value}`);
                //             }
                //         });
                //         vscode.window.showInformationMessage("所有 package.json 文件的版本已更新。");
                //     }
                // });
            });
        } else {
            vscode.window.showWarningMessage("当前不在工作区环境");
        }
    });

    context.subscriptions.push(disposable);
}

async function getUserInput_packageManagerx(validVersions: any[]) {
    // 正则表达式模式，用于校验用户输入
    const packagePattern = /^[\w/.-]+@([0-9]+)(?:\.([0-9]+)(?:\.([0-9]+))?)?$/;
    const packagePatternStrict = /^(npm|pnpm|yarn|bun)@[0-9]+\.[0-9]+\.[0-9]+$/;
    let userInput: string | undefined = undefined;
    while (true) {
        userInput = await vscode.window.showInputBox({
            prompt: `格式为 <package manager name>@<version>  (当前版本: ${validVersions.join(", ")})`,
            value: userInput, // 将上一次的用户输入作为新输入框的默认值
        });

        // 如果用户取消了输入
        if (userInput === undefined) {
            return null;
        }
        // 格式正确，返回
        if (userInput && packagePatternStrict.test(userInput)) {
            return userInput;
        }
        if (userInput && packagePattern.test(userInput)) {
            // https://nodejs.cn/api-v20/packages/packagemanager.html
            vscode.window.showWarningMessage(
                `当前启用了严格模式，只接受 ${packagePatternStrict}`
            );
        } else {
            vscode.window.showWarningMessage(`${userInput} 不符合格式要求 <package manager name>@<version>`);
        }
    }
}
