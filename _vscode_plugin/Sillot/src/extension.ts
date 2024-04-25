import * as vscode from "vscode";
import { Log } from "./utils/log";
import { SyCompletionItemProvider, SyHoverProvider } from "./provider/sy";

let lastChangedDocument: vscode.TextDocument | null = null;

export function activate(context: vscode.ExtensionContext) {
    // 监听编辑器切换事件
    vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            Log.d("onDidChangeActiveTextEditor", editor.document.fileName);
        }
    });

    // 监听文档内容变化事件
    vscode.workspace.onDidChangeTextDocument(event => {
        if (event.contentChanges.length > 0 && !event.document.uri.toString().startsWith("output:")) {
            const currentDocument = event.document;

            // 检查文档是否和上一次相同
            if (currentDocument !== lastChangedDocument) {
                // 如果不同，更新跟踪变量并输出日志
                lastChangedDocument = currentDocument;
                Log.d("onDidChangeTextDocument", "uri : " + event.document.uri);
            } else {
                // 如果相同，不做任何事情
            }
        }
    });

    // "sillot" 是扩展的标识符，而 "helloWorld" 是命令的名称。这意味着这个命令是由名为 sillot 的扩展提供的。在 package.json 文件的 "contributes" 部分，需要正确注册该命令
    const disposable = vscode.commands.registerCommand("sillot.helloWorld", () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage("Hello World from Sillot!");
        Log.i("你");
        Log.w("好");
        Log.e("汐");
        Log.d("洛");
        Log.a("汐洛", `${Log.Channel.logLevel}`);
    });
    const disposable2 = vscode.workspace.onDidChangeTextDocument(event => {
        // vscode.window.showInformationMessage(`${event.document.fileName}`);
        // 这里添加你不想直接编辑的文件路径
        const protectedFiles = [
            "protected.txt",
            "assets\\template\\app\\index.tpl",
            "assets\\template\\app\\window.tpl",
            "assets\\template\\desktop\\index.tpl",
            "assets\\template\\docker\\index.tpl",
            "assets\\template\\mobile\\index.tpl",
        ];

        if (protectedFiles.some(f => event.document.fileName.endsWith(f))) {
            vscode.window.showWarningMessage("警告：你不应该直接修改这个文件！当前文件应当通过代码自动生成！");
        }
    });
    // 'extension' 是一个特殊的命令前缀，用于表示这是一个由扩展提供的命令。这种方式通常用于简单示例或教程中，因为它不需要在 package.json 中注册命令。
    // const disposable3 = vscode.commands.registerCommand("extension.sayHello", () => {
    //     vscode.window.showInformationMessage("Hello World!");
    // });

    context.subscriptions.push(Log.Channel);
    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
    // context.subscriptions.push(disposable3);
    context.subscriptions.push(vscode.languages.registerHoverProvider("sy", new SyHoverProvider()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider("sy", new SyCompletionItemProvider()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider("dosc", new SyCompletionItemProvider()));

    const disposable5 = vscode.commands.registerCommand("sillot.pickEXE", () => {

        vscode.window
            .showOpenDialog({
                title: "选择可执行文件",
                canSelectFiles: true,
                canSelectFolders: false,
                canSelectMany: false,
                filters: { Executables: ["exe"] },
            })
            .then(fileUri => {
                if (!fileUri || fileUri.length === 0) {
                    // 用户取消了选择，不做任何操作
                    return;
                }
                Log.Channel.show();

                // 获取用户选择的exe文件的路径
                const exePath = fileUri[0].fsPath;
                Log.i("exePath", exePath.toString());
            });
    });

    context.subscriptions.push(disposable5);
}

// 当你的扩展被禁用时，这个方法将被调用
export function deactivate() {
    if (Log.Channel) {
        Log.Channel.dispose();
    }
}


