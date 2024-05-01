import * as vscode from "vscode";
import fs from "fs-extra";
import json5 from "json5";
import { Log } from "./utils/log";
import { SyCodeActionProvider, SyCompletionItemProvider, SyHoverProvider, SySemanticTokensProvider } from "./provider/sy";
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
import { subscribeToDocumentChanges, EMOJI_MENTION } from "./diagnostics";
import { CodelensProvider } from "./CodelensProvider";
import { GenericCompletionItemProvider } from "./provider/_Generic";
import { Credentials } from "./auth/github";
import { ColorPickerProvider } from "./provider/_ColorPicker";

let lastChangedDocument: vscode.TextDocument | null = null;
let myWebviewPanel: vscode.WebviewPanel | undefined;

const COMMAND = "code-actions-sample.command";

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

export async function activate(context: vscode.ExtensionContext) {
    const rootPath =
        vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0
            ? vscode.workspace.workspaceFolders[0].uri.fsPath
            : vscode.extensions.getExtension("Hi-Windom.sillot")?.extensionPath;

    const disposable77 = vscode.commands.registerCommand("sillot.openPackageOnNpm", moduleName => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage("No open text editor");
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);
        if (!text) {
            vscode.window.showInformationMessage("No text selected");
            return;
        }

        // Ensure the selected text is a valid package name
        if (!/^[\w.-]+$/.test(text)) {
            vscode.window.showErrorMessage("Invalid package name");
            return;
        }
        vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(`https://www.npmjs.com/package/${text}`));
    });

    context.subscriptions.push(disposable77);
    // Samples of `window.registerTreeDataProvider`
    const nodeDependenciesProvider = new DepNodeProvider(rootPath);
    vscode.window.registerTreeDataProvider("nodeDependencies", nodeDependenciesProvider);
    const jsonOutlineProvider = new JsonOutlineProvider(context);
    vscode.window.registerTreeDataProvider("jsonOutline", jsonOutlineProvider);
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

        // 获取typescript.useCodeSnippetsOnMethodSuggest的值
        const test2 = vscode.workspace.getConfiguration("typescript").get("useCodeSnippetsOnMethodSuggest") as string;

        // 获取sillot.typescript.tsdk的值
        const test1 = vscode.workspace.getConfiguration("sillot").get("typescript.tsdk") as string;
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
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('*', new GenericCompletionItemProvider()));
    context.subscriptions.push(vscode.languages.registerHoverProvider("sy", new SyHoverProvider()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider("sy", new SyCompletionItemProvider()));
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider({ language: 'sy' }, new SyCodeActionProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider({ language: 'sy' }, new SySemanticTokensProvider(), new vscode.SemanticTokensLegend([
        'type',
        'trailingComma', // 表示尾随逗号错误
    ])));
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

    context.subscriptions.push(
        vscode.languages.registerCodeActionsProvider("markdown", new Emojizer(), {
            providedCodeActionKinds: Emojizer.providedCodeActionKinds,
        })
    );

    const emojiDiagnostics = vscode.languages.createDiagnosticCollection("emoji");
    context.subscriptions.push(emojiDiagnostics);

    subscribeToDocumentChanges(context, emojiDiagnostics);

    context.subscriptions.push(
        vscode.languages.registerCodeActionsProvider("markdown", new Emojinfo(), {
            providedCodeActionKinds: Emojinfo.providedCodeActionKinds,
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand(COMMAND, () =>
            vscode.env.openExternal(vscode.Uri.parse("https://unicode.org/emoji/charts-12.0/full-emoji-list.html"))
        )
    );

    const codelensProvider = new CodelensProvider();

    vscode.languages.registerCodeLensProvider("*", codelensProvider);

    vscode.commands.registerCommand("codelens-sample.enableCodeLens", () => {
        vscode.workspace.getConfiguration("codelens-sample").update("enableCodeLens", true, true);
    });

    vscode.commands.registerCommand("codelens-sample.disableCodeLens", () => {
        vscode.workspace.getConfiguration("codelens-sample").update("enableCodeLens", false, true);
    });

    vscode.commands.registerCommand("codelens-sample.codelensAction", (args: any) => {
        vscode.window.showInformationMessage(`CodeLens action clicked with args=${args}`);
    });
    const credentials = new Credentials();
	await credentials.initialize(context);
    const disposable99 = vscode.commands.registerCommand('extension.getGitHubUser', async () => {
		/**
		 * Octokit (https://github.com/octokit/rest.js#readme) is a library for making REST API
		 * calls to GitHub. It provides convenient typings that can be helpful for using the API.
		 * 
		 * Documentation on GitHub's REST API can be found here: https://docs.github.com/en/rest
		 */
		const octokit = await credentials.getOctokit();
		const userInfo = await octokit.users.getAuthenticated();

		vscode.window.showInformationMessage(`Logged into GitHub as ${userInfo.data.login}`);
	});
    const disposable88 = vscode.commands.registerCommand('sillot.getGitHubUser', async () => {
		vscode.window.showInformationMessage("这个还没有实现嘞");
	});
    context.subscriptions.push(disposable88);
	context.subscriptions.push(disposable99);

    context.subscriptions.push(vscode.languages.registerColorProvider({ language: 'xml' }, new ColorPickerProvider())); // 记得在 .vscode 中把 .tmTheme 文件视为 xml
    context.subscriptions.push(vscode.languages.registerColorProvider({ language: 'json' }, new ColorPickerProvider()));
    context.subscriptions.push(vscode.languages.registerColorProvider({ language: 'typescript' }, new ColorPickerProvider()));
    context.subscriptions.push(vscode.languages.registerColorProvider({ language: 'html' }, new ColorPickerProvider()));
}

// 当你的扩展被禁用时，这个方法将被调用
export function deactivate() {
    if (Log.Channel) {
        Log.Channel.dispose();
    }
}

/**
 * Provides code actions for converting :) to a smiley emoji.
 */
export class Emojizer implements vscode.CodeActionProvider {
    public static readonly providedCodeActionKinds = [vscode.CodeActionKind.QuickFix];

    public provideCodeActions(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction[] | undefined {
        if (!this.isAtStartOfSmiley(document, range)) {
            return;
        }

        const replaceWithSmileyCatFix = this.createFix(document, range, "😺");

        const replaceWithSmileyFix = this.createFix(document, range, "😀");
        // Marking a single fix as `preferred` means that users can apply it with a
        // single keyboard shortcut using the `Auto Fix` command.
        replaceWithSmileyFix.isPreferred = true;

        const replaceWithSmileyHankyFix = this.createFix(document, range, "💩");

        const commandAction = this.createCommand();

        return [replaceWithSmileyCatFix, replaceWithSmileyFix, replaceWithSmileyHankyFix, commandAction];
    }

    private isAtStartOfSmiley(document: vscode.TextDocument, range: vscode.Range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character] === ":" && line.text[start.character + 1] === ")";
    }

    private createFix(document: vscode.TextDocument, range: vscode.Range, emoji: string): vscode.CodeAction {
        const fix = new vscode.CodeAction(`Convert to ${emoji}`, vscode.CodeActionKind.QuickFix);
        fix.edit = new vscode.WorkspaceEdit();
        fix.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, 2)), emoji);
        return fix;
    }

    private createCommand(): vscode.CodeAction {
        const action = new vscode.CodeAction("Learn more...", vscode.CodeActionKind.Empty);
        action.command = { command: COMMAND, title: "Learn more about emojis", tooltip: "This will open the unicode emoji page." };
        return action;
    }
}

/**
 * Provides code actions corresponding to diagnostic problems.
 */
export class Emojinfo implements vscode.CodeActionProvider {
    public static readonly providedCodeActionKinds = [vscode.CodeActionKind.QuickFix];

    provideCodeActions(
        document: vscode.TextDocument,
        range: vscode.Range | vscode.Selection,
        context: vscode.CodeActionContext,
        token: vscode.CancellationToken
    ): vscode.CodeAction[] {
        // for each diagnostic entry that has the matching `code`, create a code action command
        return context.diagnostics
            .filter(diagnostic => diagnostic.code === EMOJI_MENTION)
            .map(diagnostic => this.createCommandCodeAction(diagnostic));
    }

    private createCommandCodeAction(diagnostic: vscode.Diagnostic): vscode.CodeAction {
        const action = new vscode.CodeAction("Learn more...", vscode.CodeActionKind.QuickFix);
        action.command = { command: COMMAND, title: "Learn more about emojis", tooltip: "This will open the unicode emoji page." };
        action.diagnostics = [diagnostic];
        action.isPreferred = true;
        return action;
    }
}