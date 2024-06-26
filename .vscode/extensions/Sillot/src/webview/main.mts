import { provideVSCodeDesignSystem, allComponents, type Button, type TextArea, type TextField } from "@vscode/webview-ui-toolkit";

// 使用 Webview UI Toolkit web 组件，首先需要在浏览器（即 webview）中注册。
// 要注册更多 toolkit 组件，只需导入组件注册函数，并在 register 函数中调用它。
// 要一次性注册所有 toolkit 组件，可以使用一个方便的便利函数。
// 以下是如何使用 Webview UI Toolkit web 组件的示例：
//
// 使用 provideVSCodeDesignSystem().register() 注册组件，例如：
// provideVSCodeDesignSystem().register(
//   vsCodeButton(),
//   vsCodeCheckbox()
// );
//
// 或者，如果你想要一次性注册所有组件，可以使用以下方法：
// provideVSCodeDesignSystem().register(allComponents);
//
provideVSCodeDesignSystem().register(allComponents);

// Get access to the VS Code API from within the webview context
// @ts-ignore
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

// Main function that gets executed once the webview DOM loads
function main() {
    const bt1 = document.getElementById("runCMD('git_tag')") as Button;
    const bt2 = document.getElementById("runCMD('git_tag_push')") as Button;
    const bt3 = document.getElementById("closeModal()") as Button;
    bt1?.addEventListener("click", () => runCMD("git_tag"));
    bt2?.addEventListener("click", () => runCMD("git_tag_push"));
    bt3?.addEventListener("click", handleClick3);
    const git_tag = document.getElementById("git_tag") as TextField;
    if (git_tag)
        git_tag.addEventListener("input", event => {
            const value = git_tag.value;
            const illegalChars = ["。", ",", "/", "，", "、"];
            let hasIllegalChar = false;
            let illegalCharMessage = "疑似输入非法字符: ";

            for (const char of illegalChars) {
                if (value.includes(char)) {
                    hasIllegalChar = true;
                    illegalCharMessage += char + " ";
                }
            }

            const messageElement = git_tag.nextElementSibling;
            if (messageElement)
                if (hasIllegalChar) {
                    git_tag.classList.add("error-input");
                    messageElement.textContent = illegalCharMessage;
                } else {
                    git_tag.classList.remove("error-input");
                    messageElement.textContent = "";
                }
        });
}

// 一些快速背景：
//
// Webviews 是 sandboxed 环境，其中可以执行任意 HTML、CSS 和 JavaScript。
//
// 由于这种 sandboxed 性质，Visual Studio Code 使用一种消息传递机制将扩展上下文（例如 src/panels/HelloWorldPanel.ts）
// 与 webview 上下文（此文件）之间的数据。同时保持安全。
//
// vscode.postMessage() 是用于从 webview 上下文发送数据到扩展上下文的一种方法——你可以将其视为从扩展前端发送数据到扩展后端的机制。
//
// 注意：如果你需要将数据从扩展上下文发送到 webview 上下文（即后端到前端），可以在这里找到相关文档：
//
// https://code.visualstudio.com/api/extension-guides/webview#passing-messages-from-an-extension-to-a-webview
//
// postMessage() 接受一个对象作为参数。这意味着可以添加任意数据（键值对），然后在扩展上下文中接收消息时访问。
//
// 例如，下面的对象也可以像这样 looking：
//
// {
//   command: "hello",
//   text: "你好，伙计！🤠",
//   random: ["arbitrary", "data"],
// }

function runCMD(text: string) {
    const git_tag = document.getElementById("git_tag") as TextField;
    const git_tag_description = document.getElementById("git_tag_description") as TextArea;
    if (git_tag && git_tag_description) {
        vscode.postMessage({ message: "runCMD", text: text, cmd: [git_tag.value, git_tag_description.value] });
    }
}

function handleClick3() {
    vscode.postMessage({ message: "closeModal" });
}
