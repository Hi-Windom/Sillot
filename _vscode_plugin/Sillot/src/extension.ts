import * as vscode from "vscode";
import { Log } from "./utils/log";
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

class SyHoverProvider implements vscode.HoverProvider {
    public provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        let hoverText: vscode.MarkdownString | "" = "";
        if (word === "Properties") {
            hoverText = new vscode.MarkdownString("节点属性");
        }
        if (word === "ID") {
            hoverText = new vscode.MarkdownString("节点ID");
        }
        if (word === "Type") {
            hoverText = new vscode.MarkdownString("节点类型");
        }
        if (word === "updated") {
            hoverText = new vscode.MarkdownString("节点更新时间");
        }
        if (word === "HeadingLevel") {
            hoverText = new vscode.MarkdownString("节点内容");
        }
        if (word === "Data") {
            hoverText = new vscode.MarkdownString("标题级别");
        }
        if (hoverText !== "") {
            return new vscode.Hover(hoverText);
        }
        return null;
    }
}

class SyCompletionItemProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        const completionItems: vscode.CompletionItem[] = [];

        // 创建一个方法补全项
        const methodCompletionItem = new vscode.CompletionItem("toString", vscode.CompletionItemKind.Method);
        methodCompletionItem.insertText = "toString()"; // 定义插入文本
        methodCompletionItem.documentation = "Returns a string representation of the object."; // 定义文档
        completionItems.push(methodCompletionItem);

        // 创建一个函数补全项
        const functionCompletionItem = new vscode.CompletionItem("parseInt", vscode.CompletionItemKind.Function);
        functionCompletionItem.insertText = "parseInt(text, radix)"; // 定义插入文本
        functionCompletionItem.documentation = "Parses a string into an integer."; // 定义文档
        completionItems.push(functionCompletionItem);

        // 创建一个字段补全项
        const fieldCompletionItem = new vscode.CompletionItem("fieldName", vscode.CompletionItemKind.Field);
        fieldCompletionItem.insertText = "fieldName"; // 定义插入文本
        fieldCompletionItem.documentation = "The name of the field."; // 定义文档
        completionItems.push(fieldCompletionItem);

        // 创建一个变量补全项
        const variableCompletionItem = new vscode.CompletionItem("variableName", vscode.CompletionItemKind.Variable);
        variableCompletionItem.insertText = "variableName"; // 定义插入文本
        variableCompletionItem.documentation = "The name of the variable."; // 定义文档
        completionItems.push(variableCompletionItem);

        // 创建一个类补全项
        const classCompletionItem = new vscode.CompletionItem("ClassName", vscode.CompletionItemKind.Class);
        classCompletionItem.insertText = "ClassName"; // 定义插入文本
        classCompletionItem.documentation = "The name of the class."; // 定义文档
        completionItems.push(classCompletionItem);

        // 创建一个接口补全项
        const interfaceCompletionItem = new vscode.CompletionItem("InterfaceName", vscode.CompletionItemKind.Interface);
        interfaceCompletionItem.insertText = "InterfaceName"; // 定义插入文本
        interfaceCompletionItem.documentation = "The name of the interface."; // 定义文档
        completionItems.push(interfaceCompletionItem);

        // 创建一个模块补全项
        const moduleCompletionItem = new vscode.CompletionItem("moduleName", vscode.CompletionItemKind.Module);
        moduleCompletionItem.insertText = "moduleName"; // 定义插入文本
        moduleCompletionItem.documentation = "The name of the module."; // 定义文档
        completionItems.push(moduleCompletionItem);

        // 创建一个属性补全项
        const propertyCompletionItem = new vscode.CompletionItem("propertyName", vscode.CompletionItemKind.Property);
        propertyCompletionItem.insertText = "propertyName"; // 定义插入文本
        propertyCompletionItem.documentation = "The name of the property."; // 定义文档
        completionItems.push(propertyCompletionItem);

        // 创建一个枚举补全项
        const enumCompletionItem = new vscode.CompletionItem("EnumName", vscode.CompletionItemKind.Enum);
        enumCompletionItem.insertText = "EnumName"; // 定义插入文本
        enumCompletionItem.documentation = "The name of the enum."; // 定义文档
        completionItems.push(enumCompletionItem);

        // 创建一个关键字补全项
        const keywordCompletionItem = new vscode.CompletionItem("if", vscode.CompletionItemKind.Keyword);
        keywordCompletionItem.insertText = "if"; // 定义插入文本
        keywordCompletionItem.documentation = "The if keyword for conditional statements."; // 定义文档
        completionItems.push(keywordCompletionItem);

        // 创建一个代码片段补全项
        const snippetCompletionItem = new vscode.CompletionItem("console.log", vscode.CompletionItemKind.Snippet);
        snippetCompletionItem.insertText = "console.log(${1:message})"; // 定义插入文本
        snippetCompletionItem.documentation = "Logs a message to the console."; // 定义文档
        completionItems.push(snippetCompletionItem);

        // 创建一个文件补全项
        const fileCompletionItem = new vscode.CompletionItem("fileName.js", vscode.CompletionItemKind.File);
        fileCompletionItem.insertText = "fileName.js"; // 定义插入文本
        fileCompletionItem.documentation = "The name of the file."; // 定义文档
        completionItems.push(fileCompletionItem);

        // 创建一个文件夹补全项
        const folderCompletionItem = new vscode.CompletionItem("folderName", vscode.CompletionItemKind.Folder);
        folderCompletionItem.insertText = "folderName"; // 定义插入文本
        folderCompletionItem.documentation = "The name of the folder."; // 定义文档
        completionItems.push(folderCompletionItem);

        // 创建一个枚举成员补全项
        const enumMemberCompletionItem = new vscode.CompletionItem("EnumMember", vscode.CompletionItemKind.EnumMember);
        enumMemberCompletionItem.insertText = "EnumMember"; // 定义插入文本
        enumMemberCompletionItem.documentation = "The name of the enum member."; // 定义文档
        completionItems.push(enumMemberCompletionItem);

        // 创建一个常量补全项
        const constantCompletionItem = new vscode.CompletionItem("MAX_VALUE", vscode.CompletionItemKind.Constant);
        constantCompletionItem.insertText = "MAX_VALUE"; // 定义插入文本
        constantCompletionItem.documentation = "The maximum value."; // 定义文档
        completionItems.push(constantCompletionItem);

        // 创建一个结构体补全项
        const structCompletionItem = new vscode.CompletionItem("StructName", vscode.CompletionItemKind.Struct);
        structCompletionItem.insertText = "StructName"; // 定义插入文本
        structCompletionItem.documentation = "The name of the struct."; // 定义文档
        completionItems.push(structCompletionItem);

        // 创建一个事件补全项
        const eventCompletionItem = new vscode.CompletionItem("eventName", vscode.CompletionItemKind.Event);
        eventCompletionItem.insertText = "eventName"; // 定义插入文本
        eventCompletionItem.documentation = "The name of the event."; // 定义文档
        completionItems.push(eventCompletionItem);

        // 创建一个运算符补全项
        const operatorCompletionItem = new vscode.CompletionItem("+", vscode.CompletionItemKind.Operator);
        operatorCompletionItem.insertText = "+"; // 定义插入文本
        operatorCompletionItem.documentation = "The addition operator."; // 定义文档
        completionItems.push(operatorCompletionItem);

        // 创建一个类型参数补全项
        const typeParameterCompletionItem = new vscode.CompletionItem("T", vscode.CompletionItemKind.TypeParameter);
        typeParameterCompletionItem.insertText = "T"; // 定义插入文本
        typeParameterCompletionItem.documentation = "The type parameter."; // 定义文档
        completionItems.push(typeParameterCompletionItem);

        // 创建一个用户定义的补全项
        const userCompletionItem = new vscode.CompletionItem("User", vscode.CompletionItemKind.User);
        userCompletionItem.insertText = "User"; // 定义插入文本
        userCompletionItem.documentation = "The name of the user."; // 定义文档
        completionItems.push(userCompletionItem);

        // 创建一个问题补全项
        const issueCompletionItem = new vscode.CompletionItem("Issue", vscode.CompletionItemKind.Issue);
        issueCompletionItem.insertText = "Issue"; // 定义插入文本
        issueCompletionItem.documentation = "The name of the issue."; // 定义文档
        completionItems.push(issueCompletionItem);

        return completionItems;
    }
}
