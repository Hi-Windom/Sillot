import * as vscode from "vscode";
import * as path from "path";

// TODO: 支持选择终端路径（.sillot.jsonc 没有定义则忽略）
export function add_task_运行工作区脚本文件(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand("sillot.运行工作区脚本文件", async () => {
        let batFiles: vscode.Uri[] | undefined = undefined;
        const limiter1 = 58;
        const fileNameStartWith = "workspace-";
        // 使用 withProgress 显示进度
        vscode.window
            .withProgress(
                {
                    location: vscode.ProgressLocation.Notification,
                    title: `正在搜索工作区脚本文件（文件名必须以 ${fileNameStartWith} 开头）...`,
                    cancellable: true,
                },
                async (progress, token) => {
                    // vscode.GlobPattern 参考 https://github.com/microsoft/vscode-docs/blob/main/docs/editor/glob-patterns.md
                    const includes = `{**/${fileNameStartWith}*.bat,**/${fileNameStartWith}*.py,**/${fileNameStartWith}*.js}`
                    batFiles = await vscode.workspace.findFiles(includes, "**​/node_modules/**", limiter1);
                }
            )
            .then(async () => {
                if (batFiles) {
                    const batFileUris = batFiles.map(file => file.fsPath);
                    const batFileChoices = batFileUris.map(uri => path.basename(uri));

                    if (batFileChoices.length === 0) {
                        vscode.window.showInformationMessage(`工作区未发现有效脚本文件（文件名必须以 ${fileNameStartWith} 开头）`);
                        return;
                    }

                    const selectedBatFile = await vscode.window.showQuickPick(batFileChoices, {
                        placeHolder: `文件名必须以 ${fileNameStartWith} 开头；最多显示 ${limiter1} 项`,
                    });
                    if (!selectedBatFile) {
                        return; // 用户取消了选择
                    }

                    const selectedBatFileUri = batFiles[batFileChoices.indexOf(selectedBatFile)].fsPath;

                    // 使用 withProgress 显示进度
                    vscode.window.withProgress(
                        {
                            location: vscode.ProgressLocation.Notification,
                            title: `💥 Run ${selectedBatFile} ...`,
                            cancellable: true,
                        },
                        async (progress, token) => {
                            return new Promise(async (resolve, reject) => {
                                // 读取 脚本文件的内容
                                const batFileData = await vscode.workspace.fs.readFile(vscode.Uri.file(selectedBatFileUri));
                                const batFileContent = batFileData.toString();
                                let cmd = ""
                                let comment:RegExpMatchArray | null = null

                                // 查找第一行 @REM 注释，并提取其值作为工作目录
                                const commentLine = batFileContent.split("\n")[0];
                                if (selectedBatFile.endsWith(".bat")) {
                                    cmd = selectedBatFileUri
                                    comment = commentLine.match(/@REM\s+(.+)/);
                                } else if (selectedBatFile.endsWith(".py")) {
                                    cmd = `python ${selectedBatFileUri}`
                                    comment = commentLine.match(/#\s+(.+)/);
                                } else if (selectedBatFile.endsWith(".js")) {
                                    cmd = `node ${selectedBatFileUri}`
                                    comment = commentLine.match(/\/\/\s+(.+)/);
                                } else {
                                    cmd = selectedBatFileUri
                                }
                                let workingDirectory = path.resolve(path.dirname(selectedBatFileUri)); // 将 workingDirectory 解析为绝对路径
                                if (comment) {
                                    workingDirectory = path.resolve(path.join(workingDirectory, comment[1]));
                                } else {
                                    vscode.window.showWarningMessage("脚本文件第一行没有定义相对工作路径，使用默认值");
                                }
                                // console.log(workingDirectory)
                                // 创建一个新的 VS Code 内部终端，并设置工作目录
                                const terminal = vscode.window.createTerminal({
                                    name: selectedBatFile,
                                    cwd: workingDirectory, // 使用提取的工作目录
                                    hideFromUser: false,
                                });

                                // 如果用户取消，关闭终端
                                token.onCancellationRequested(() => {
                                    terminal.dispose();
                                    reject(new Error("User cancelled the build process"));
                                });

                                // 运行.脚本文件
                                terminal.sendText(cmd);
                                terminal.show();
                                vscode.window.showInformationMessage("terminal process started.");
                            });
                        }
                    );
                }
            });
    });

    context.subscriptions.push(disposable);
}
