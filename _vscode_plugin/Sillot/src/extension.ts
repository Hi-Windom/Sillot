import * as vscode from "vscode";
import fs from "fs-extra";
import json5 from "json5";
import { Log } from "./utils/log";
import { SyCompletionItemProvider, SyHoverProvider } from "./provider/sy";
import { IssueCompletionItems } from "./provider/db/Issue";
import { UserCompletionItems } from "./provider/db/User";
import { ClassCompletionItems } from "./provider/db/Class";
import { ConstantCompletionItems } from "./provider/db/Constant";
import { EnumCompletionItems } from "./provider/db/Enum";
import { EnumMemberCompletionItems } from "./provider/db/EnumMember";
import { EventCompletionItems } from "./provider/db/Event";
import { FieldCompletionItems } from "./provider/db/Field";
import { FileCompletionItems } from "./provider/db/File";
import { FolderCompletionItems } from "./provider/db/Folder";
import { FunctionCompletionItems } from "./provider/db/Function";
import { InterfaceCompletionItems } from "./provider/db/Interface";
import { KeywordCompletionItems } from "./provider/db/Keyword";
import { MethodCompletionItems } from "./provider/db/Method";
import { ModuleCompletionItems } from "./provider/db/Module";
import { OperatorCompletionItems } from "./provider/db/Operator";
import { PropertyCompletionItems } from "./provider/db/Property";
import { SnippetCompletionItems } from "./provider/db/Snippet";
import { StructCompletionItems } from "./provider/db/Struct";
import { TypeParameterCompletionItems } from "./provider/db/TypeParameter";
import { VariableCompletionItems } from "./provider/db/Variable";
import path from "path";
import { DepNodeProvider } from "./nodeDependencies";
import { FileExplorer } from "./fileExplorer";
import { TestView } from "./testView";
import { TestViewDragAndDrop } from "./testViewDragAndDrop";
import { JsonOutlineProvider } from "./jsonOutline";

let lastChangedDocument: vscode.TextDocument | null = null;
let myWebviewPanel: vscode.WebviewPanel | undefined;

class fileCompletionItemProvider implements vscode.CompletionItemProvider {
    private completionItems: vscode.CompletionItem[] = [];
    constructor(completionItems: vscode.CompletionItem[]) {
        this.completionItems = completionItems;
    }
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        return this.completionItems;
    }
}
// 序列化并保存到文件
async function saveCompletionItemsToFile(filePath: string, items: Array<vscode.CompletionItem>) {
    // 使用 json5.stringify 格式化 JSON，使其更易读
    const serializedItems = json5.stringify(items, null, 2);

    // 使用 fs-extra 写入文件
    await fs.writeFile(filePath, serializedItems, "utf-8");
}

// 从文件反序列化
async function loadCompletionItemsFromFile(filePath: string): Promise<Array<vscode.CompletionItem>> {
    // 使用 fs-extra 读取文件
    const serializedItems = await fs.readFile(filePath, "utf-8");

    // 使用 json5.parse 反序列化 JSON
    const items: Array<vscode.CompletionItem> = json5.parse(serializedItems);

    // 返回反序列化后的数组
    return items;
}

// class MyTreeDataProvider implements vscode.TreeDataProvider<any> {
//     onDidChangeTreeData?: vscode.Event<any> | undefined;

//     getParent?(element: any) {
//         throw new Error("Method not implemented.");
//     }
//     resolveTreeItem?(item: vscode.TreeItem, element: any, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
//         throw new Error("Method not implemented.");
//     }
//     getTreeItem(element: any) {
//         // 返回树视图中的项
//         return {
//             label: element,
//             collapsibleState: vscode.TreeItemCollapsibleState.None,
//         };
//     }

//     getChildren(element: any) {
//         // 返回树视图中的子项
//         return Promise.resolve(["项1", "项2", "项3"]);
//     }
// }

export function activate(context: vscode.ExtensionContext) {
    const rootPath =
        vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0
            ? vscode.workspace.workspaceFolders[0].uri.fsPath
            : vscode.extensions.getExtension("Hi-Windom.sillot")?.extensionPath;
    vscode.commands.registerCommand("sillot.openPackageOnNpm", moduleName =>
        vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`))
    );
    // Samples of `window.registerTreeDataProvider`
    const nodeDependenciesProvider = new DepNodeProvider(rootPath);
    vscode.window.registerTreeDataProvider("nodeDependencies", nodeDependenciesProvider);
    const jsonOutlineProvider = new JsonOutlineProvider(context);
	vscode.window.registerTreeDataProvider('jsonOutline', jsonOutlineProvider);
    // Samples of `window.createView`
    // new FtpExplorer(context);
    new FileExplorer(context);

    // Test View
    new TestView(context);

    // new TestViewDragAndDrop(context);

    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "汐洛插件运行中";
    statusBarItem.tooltip = "This is my custom status bar item";
    statusBarItem.command = "sillot.helloWorld"; // 可选的命令
    statusBarItem.show();

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

        // 获取配置对象
        const configuration = vscode.workspace.getConfiguration("Hi-Windom.sillot");

        // 获取typescript.useCodeSnippetsOnMethodSuggest的值
        const test2 = configuration.get("typescript.useCodeSnippetsOnMethodSuggest") as string;

        // 获取sillot.typescript.tsdk的值
        const test1 = configuration.get("sillot.typescript.tsdk") as string;
        Log.w(test1);
        Log.w(test2);
    });
    const 测试序列化字典 = vscode.commands.registerCommand("sillot.测试序列化字典", async () => {
        vscode.window.showInformationMessage("Hello World from Sillot!");
        const completionItems: vscode.CompletionItem[] = [];

        const arraysToMerge = [
            IssueCompletionItems,
            UserCompletionItems,
            TypeParameterCompletionItems,
            OperatorCompletionItems,
            EventCompletionItems,
            StructCompletionItems,
            ConstantCompletionItems,
            EnumMemberCompletionItems,
            FolderCompletionItems,
            FileCompletionItems,
            SnippetCompletionItems,
            KeywordCompletionItems,
            EnumCompletionItems,
            PropertyCompletionItems,
            ModuleCompletionItems,
            InterfaceCompletionItems,
            ClassCompletionItems,
            VariableCompletionItems,
            FieldCompletionItems,
            FunctionCompletionItems,
            MethodCompletionItems,
        ];

        for (const arr of arraysToMerge) {
            for (const i of arr) {
                completionItems.push(i);
            }
        }
        vscode.window
            .showOpenDialog({
                title: "选择保存路径",
                canSelectFiles: false,
                canSelectFolders: true,
                canSelectMany: false,
            })
            .then(async fileUri => {
                if (!fileUri || fileUri.length === 0) {
                    // 用户取消了选择，不做任何操作
                    return;
                }
                Log.Channel.show();
                const filePath = fileUri[0].fsPath;
                Log.i("filePath", filePath.toString());

                vscode.window
                    .showInputBox({
                        title: "保存文件名",
                        prompt: "请输入要保存的文件名（不含后缀名）",
                        placeHolder: "SavedFileCompletionItemProvider",
                        ignoreFocusOut: true, // 避免丢失焦点
                    })
                    .then(async f => {
                        const filename = f ? f : "SavedFileCompletionItemProvider";
                        await saveCompletionItemsToFile(filePath + `/${filename}.json`, completionItems);
                        Log.i(filename, filePath);
                    });
            });
    });
    const 测试反序列化字典 = vscode.commands.registerCommand("sillot.测试反序列化字典", async () => {
        vscode.window.showInformationMessage("Hello World from Sillot!");
        vscode.window
            .showOpenDialog({
                title: "选择要导入的字典",
                canSelectFiles: true,
                canSelectFolders: false,
                canSelectMany: false,
            })
            .then(async fileUri => {
                if (!fileUri || fileUri.length === 0) {
                    // 用户取消了选择，不做任何操作
                    return;
                }
                Log.Channel.show();
                const filePath = fileUri[0].fsPath;
                Log.i("filePath", filePath.toString());
                const loadedItems = await loadCompletionItemsFromFile(filePath);
                context.subscriptions.push(
                    vscode.languages.registerCompletionItemProvider("dosc", new fileCompletionItemProvider(loadedItems))
                );
                Log.i("registerCompletionItemProvider", "dosc");
            });
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
    context.subscriptions.push(测试序列化字典);
    context.subscriptions.push(测试反序列化字典);
    context.subscriptions.push(vscode.languages.registerHoverProvider("sy", new SyHoverProvider()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider("sy", new SyCompletionItemProvider()));
    // context.subscriptions.push(vscode.languages.registerCompletionItemProvider("dosc", new SyCompletionItemProvider()));

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
