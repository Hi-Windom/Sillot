import * as vscode from "vscode";
import * as path from "path";
import fs from "fs-extra";
import { formatDate } from "sofill/mid";
import { readJSONFile } from "../utils/json";

export async function add_task_添加并推送Git_Tag(context: vscode.ExtensionContext) {
    const TAG = "汐洛.添加并推送Git_Tag";
    // Track the current panel with a webview
    let currentPanel: vscode.WebviewPanel | undefined = undefined;
    const disposable = vscode.commands.registerCommand(TAG, async () => {
        const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
        const iconPath = path.join(context.extensionPath, "media", "icon.png");
        // 获取工作区中的所有 git 项目
        const gitProjects = vscode.workspace.workspaceFolders?.map(folder => folder.uri.fsPath);

        if (!gitProjects || gitProjects.length === 0) {
            vscode.window.showErrorMessage("No git projects found in the workspace.");
            return;
        }
        // 让用户选择项目
        const selectedProject = await vscode.window.showQuickPick(gitProjects, {
            placeHolder: "Select a git project",
        });

        if (!selectedProject) {
            return;
        }
        if (currentPanel) {
            // If we already have a panel, show it in the target column
            currentPanel.reveal(columnToShowIn);
        } else {
            // Otherwise, create a new panel
            currentPanel = showCustomModal(
                TAG,
                /*html*/ `<h2>${TAG}</h2>
                <input id="git_tag" placeholder="请输入 git tag"/><br>
                <textarea id="git_tag_description" data-vscode-context='{"webviewSection": "editor", "preventDefaultContextMenuItems": true}' placeholder="描述（可选）"></textarea><br>
                <button onClick="runCMD('git_tag')">提交</button><button onClick="runCMD('git_tag_push')">推送到远端</button>
        <button onClick="closeModal()">关闭面板</button>
        <script>
        window.vscode = acquireVsCodeApi(); // acquireVsCodeApi 只能调用一次
        function runCMD(text) {
            const tagElement = document.getElementById('git_tag')
            const descriptionElement = document.getElementById('git_tag_description')
            window.vscode.postMessage({ message: 'runCMD', text: text, cmd: [tagElement.value, descriptionElement.value] });
        }
        function closeModal() {window.vscode.postMessage({ message: 'closeModal' });}
        </script>
        `,
                iconPath
            );
            currentPanel.onDidDispose(() => {
                // When the panel is closed
                currentPanel = undefined;
            }, null);
            currentPanel.webview.onDidReceiveMessage(jj => {
                console.log(jj);
                switch (jj.message) {
                    case "error":
                        vscode.window.showErrorMessage(jj.text);
                        return;
                    case "info":
                    case "alert":
                        vscode.window.showInformationMessage(jj.text);
                        return;
                    case "warn":
                        vscode.window.showWarningMessage(jj.text);
                        return;
                    case "runCMD": {
                        if (!jj.cmd[0]) return;
                        const terminal = vscode.window.createTerminal({
                            name: `${jj.text} - ${formatDate(new Date(), "HHmmss")}`,
                            cwd: selectedProject,
                            hideFromUser: false,
                        });
                        let prefix = "";
                        let suffix = "";
                        if (vscode.workspace.workspaceFile) {
                            // 读取.sillot.jsonc文件
                            const workspaceFileDir = path.dirname(vscode.workspace.workspaceFile.fsPath);
                            const sillotJsoncPath = path.join(workspaceFileDir, ".sillot.jsonc");
                            const sillotJson = readJSONFile(sillotJsoncPath);
                            if (sillotJson.git?.tag?.prefix) {
                                prefix = sillotJson.git.tag.prefix;
                            }
                            if (sillotJson.git?.tag?.suffix) {
                                suffix = sillotJson.git.tag.suffix;
                            }
                        }
                        if (jj.text === "git_tag") {
                            const cmd =
                                jj.cmd[1]
                                    ? `git -C ${selectedProject} tag ${prefix}${jj.cmd[0]}${suffix}`
                                    : `git -C ${selectedProject} tag ${prefix}${jj.cmd[0]}${suffix} -m "${jj.cmd[1]}"`;
                            terminal.sendText(cmd);
                        }
                        if (jj.text === "git_tag_push") {
                            terminal.sendText(`git push origin ${jj.cmd[0]}`);
                        }
                        terminal.show();
                        return;
                    }
                }
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function showCustomModal(tag: string, body: string, iconPath: string | undefined = undefined) {
    const panel = vscode.window.createWebviewPanel("customModal", tag, vscode.ViewColumn.One, {
        enableScripts: true,
        enableCommandUris: true,
        enableForms: true,
        retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置.很高的内存开销 REF https://code.visualstudio.com/api/extension-guides/webview#retaincontextwhenhidden
    });
    panel.webview.html = /*html*/ `
      <html>
      <head>
      <style>
      </style>
      </head>
        <body>
          ${body}
        </body>
      </html>
    `;
    panel.webview.onDidReceiveMessage(jj => {
        console.log(jj);
        switch (jj.message) {
            case "closeModal":
                panel.dispose();
                return;
        }
    });

    // 设置图标 uri
    if (iconPath) {
        panel.iconPath = vscode.Uri.file(iconPath);
    }
    return panel;
}

/**
 * 获取某个扩展文件相对于webview需要的一种特殊路径格式
 * 形如：vscode-resource:/Users/toonces/projects/vscode-cat-coding/media/cat.gif
 * @param context 上下文
 * @param relativePath 扩展中某个文件相对于根目录的路径，如 images/test.jpg
 */
function getExtensionFileVscodeResource(context: vscode.ExtensionContext, relativePath: string) {
    const diskPath = vscode.Uri.file(path.join(context.extensionPath, relativePath));
    return diskPath.with({ scheme: "vscode-resource" }).toString();
}

/**
 * 从某个HTML文件读取能被Webview加载的HTML内容
 * @param {*} context 上下文
 * @param {*} templatePath 相对于插件根目录的html文件相对路径
 */
function getWebViewContent(context: vscode.ExtensionContext, templatePath: string) {
    const resourcePath = path.join(context.extensionPath, templatePath);
    const dirPath = path.dirname(resourcePath);
    let html = fs.readFileSync(resourcePath, "utf-8");
    // vscode不支持直接加载本地资源，需要替换成其专有路径格式，这里只是简单的将样式和JS的路径替换
    html = html.replace(/(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g, (m: any, $1: string, $2: string) => {
        return $1 + vscode.Uri.file(path.resolve(dirPath, $2)).with({ scheme: "vscode-resource" }).toString() + '"';
    });
    return html;
}
