import * as vscode from "vscode";
import * as path from "path";
import { formatDate } from "sofill/mid";
import { readJSONFile } from "../utils/json";
import { C } from "../extension.const";
import { getUri, getNonce } from "../utils/webview";

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
            const extensionVersion = vscode.extensions.getExtension(C.extensionId)?.packageJSON.version;
            currentPanel = showCustomModal(
                TAG,
                /*html*/ `<h2>${TAG}</h2>
                <h3>当前 webview 载体扩展版本：${extensionVersion}</h3>
                <h3>目标 git 本地仓库：${selectedProject}</h3>
                <section id ="git-tag-form">
                    <vscode-text-field id="git_tag" placeholder="请输入 git tag">标签名</vscode-text-field>
                    <span class="error-message"></span><br>
                    <vscode-text-area id="git_tag_description" data-vscode-context='{"webviewSection": "editor", "preventDefaultContextMenuItems": true}' placeholder="为空则自动使用最后一条提交的描述" resize="vertical" rows=5>描述（可选）</vscode-text-area><br>
                    <vscode-button id="runCMD('git_tag')">提交</vscode-button>
                    <vscode-button id="runCMD('git_tag_push')">推送到远端</vscode-button>
                    <vscode-button id="closeModal()">关闭面板</vscode-button>
                </section>
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
                        const _tag = `${prefix}${jj.cmd[0]}${suffix}`;
                        if (jj.text === "git_tag") {
                            const cmd = jj.cmd[1]
                                ? `git -C ${selectedProject} tag ${_tag} -m "${jj.cmd[1]}"`
                                : `git -C ${selectedProject} tag ${_tag}`;
                            terminal.sendText(cmd);
                        }
                        if (jj.text === "git_tag_push") {
                            terminal.sendText(`git push origin ${_tag}`);
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
    const extensionUri = vscode.extensions.getExtension(C.extensionId)?.extensionUri;
    if (extensionUri) {
        const jsUri = getUri(panel.webview, extensionUri, ["out", "webview.js"]);
        const styleUri = getUri(panel.webview, extensionUri, ["out", "webview.css"]);
        const nonce = getNonce();
        panel.webview.html = /*html*/ `
      <html>
      <head>
      <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'nonce-${nonce}'; style-src 'unsafe-inline' 'self' https:;">
      <link rel="stylesheet" href="${styleUri}">
      </head>
        <body>
          ${body}
        </body>
        <script type="module" nonce="${nonce}" src="${jsUri}"></script>
      </html>
    `;
    }
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
