import * as vscode from "vscode";
import * as path from "path";

export function add_task_运行工作区脚本文件(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand("sillot.运行工作区脚本文件", async () => {
        let batFiles: vscode.Uri[] | undefined = undefined;
        const limiter1 = 31;
        const fileNameStartWith = "workspace-";
        const includes = `{**/${fileNameStartWith}*.bat,**/${fileNameStartWith}*.py,**/${fileNameStartWith}*.js}`;
        const terminalHandler = new TerminalHandler();
        // 尝试从缓存中获取 batFiles
        batFiles = context.workspaceState.get<vscode.Uri[]>("batFiles");
        // 如果缓存中没有，则搜索工作区中的脚本文件
        if (!batFiles || batFiles.length === 0) {
            batFiles = await search2update(context, includes, limiter1, fileNameStartWith);
            if (batFiles && batFiles.length > 0) {
                await terminalHandler.execute(batFiles, fileNameStartWith, limiter1);
            }
        } else {
            console.log(batFiles);
            vscode.window.withProgress(
                {
                    location: vscode.ProgressLocation.Notification,
                    title: "命中缓存，使用缓存提供的工作区脚本文件清单。可点击取消，立即为您重新搜索。",
                    cancellable: true,
                },
                async (progress, token) => {
                    token.onCancellationRequested(async () => {
                        terminalHandler.cancel();
                        batFiles = await search2update(context, includes, limiter1, fileNameStartWith);
                        if (batFiles && batFiles.length > 0) {
                            await terminalHandler.execute(batFiles, fileNameStartWith, limiter1);
                        }
                    });
                    if (batFiles && batFiles.length > 0) {
                        await terminalHandler.execute(batFiles, fileNameStartWith, limiter1);
                    }
                }
            );
        }
        // 当工作区文件夹发生变化时，更新缓存
        vscode.workspace.onDidChangeWorkspaceFolders(async () => {
            batFiles = await search2update(context, includes, limiter1, fileNameStartWith);
        });

        /**
         * vscode.GlobPattern 参考 https://github.com/microsoft/vscode-docs/blob/main/docs/editor/glob-patterns.md
         */
        async function search2update(
            context: vscode.ExtensionContext,
            includes: string,
            limiter: number,
            fileNameStartWith: string
        ): Promise<vscode.Uri[] | undefined> {
            console.log("search2update");
            let batFiles: vscode.Uri[] | undefined = undefined;
            await vscode.window.withProgress(
                {
                    location: vscode.ProgressLocation.Notification,
                    title: `正在搜索工作区脚本文件（文件名以 ${fileNameStartWith} 开头）...`,
                    cancellable: true,
                },
                async (progress, token) => {
                    token.onCancellationRequested(() => {
                        terminalHandler.cancel();
                    });
                    batFiles = await vscode.workspace.findFiles(includes, "**​/node_modules/**", limiter);
                    await context.workspaceState.update("batFiles", batFiles);
                }
            );
            return batFiles;
        }
    });

    context.subscriptions.push(disposable);
}

class TerminalHandler {
    private quickPick: vscode.QuickPick<vscode.QuickPickItem> | undefined;

    cancel() {
        this.quickPick?.dispose();
        this.quickPick = undefined;
    }

    async execute(batFiles: vscode.Uri[], fileNameStartWith: string, limiter: number) {
        // 确保 batFiles 中的每个对象都是 vscode.Uri 实例
        const batFilesSafe = batFiles.map(obj => {
            // 如果 obj 不是 vscode.Uri 实例，或者没有 fsPath 属性，则解析它
            if (!(obj instanceof vscode.Uri) || !obj.fsPath) {
                return vscode.Uri.parse((obj as any).external);
            }
            return obj;
        });
        const batFileUris = batFilesSafe.map(file => file.fsPath);
        const batFileChoices = batFileUris.map(uri => path.basename(uri));

        if (batFileChoices.length === 0) {
            vscode.window.showInformationMessage(`工作区未发现有效脚本文件（文件名必须以 ${fileNameStartWith} 开头）`);
            return;
        }
        this.quickPick = vscode.window.createQuickPick();
        this.quickPick.items = batFileChoices.map(label => ({ label }));
        this.quickPick.ignoreFocusOut = true;
        this.quickPick.placeholder = `文件名必须以 ${fileNameStartWith} 开头；最多显示${limiter} 项`;
        this.quickPick.title = "按下 ESC 关闭选择框";

        const selectedBatFile = await new Promise<string | undefined>(resolve => {
            this.quickPick?.onDidAccept(() => {
                const selection = this.quickPick?.selectedItems[0];
                if (selection) {
                    resolve(selection.label);
                } else {
                    resolve(undefined);
                }
                this.cancel();
            });

            this.quickPick?.onDidHide(() => {
                resolve(undefined);
                this.cancel();
            });

            this.quickPick?.show();
        });
        if (!selectedBatFile) {
            return; // 用户取消了选择
        }
        const selectedBatFileUri = batFilesSafe[batFileChoices.indexOf(selectedBatFile)].fsPath;
        await this.runScript(selectedBatFile, selectedBatFileUri);
    }

    /**
     * 运行脚本文件，不支持并发
     */
    async runScript(selectedBatFile: string, selectedBatFileUri: string) {
        // 读取 脚本文件的内容
        const batFileData = await vscode.workspace.fs.readFile(vscode.Uri.file(selectedBatFileUri));
        const batFileContent = batFileData.toString();
        let cmd = "";
        let comment: RegExpMatchArray | null = null;

        // 查找第一行注释，并提取其值作为工作目录
        const commentLine = batFileContent.split("\n")[0];
        if (selectedBatFile.endsWith(".bat")) {
            cmd = selectedBatFileUri;
            comment = commentLine.match(/@REM\s+(.+)/);
        } else if (selectedBatFile.endsWith(".py")) {
            cmd = `python ${selectedBatFileUri}`;
            comment = commentLine.match(/#\s+(.+)/);
        } else if (selectedBatFile.endsWith(".js")) {
            cmd = `node ${selectedBatFileUri}`;
            comment = commentLine.match(/\/\/\s+(.+)/);
        } else {
            cmd = selectedBatFileUri;
        }
        let workingDirectory = path.resolve(path.dirname(selectedBatFileUri));
        if (comment) {
            // 将 workingDirectory 解析为绝对路径
            workingDirectory = path.resolve(path.join(workingDirectory, comment[1]));
        } else {
            vscode.window.showWarningMessage("脚本文件第一行没有定义相对工作路径，使用默认值");
        }

        // 创建并运行任务
        const task = new vscode.Task(
            { type: "custom", task: "runScript" },
            vscode.TaskScope.Workspace,
            "Run Script",
            "custom",
            new vscode.ShellExecution(cmd, { cwd: workingDirectory }),
            "$msCompile"
        );

        // 运行任务
        vscode.tasks.executeTask(task);
    }
}
