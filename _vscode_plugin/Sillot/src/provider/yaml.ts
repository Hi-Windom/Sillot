import * as vscode from "vscode";

const ActionFile_kind = vscode.CompletionItemKind.Constant;

/**
 * github workflows action.yaml
 */
const ActionFileCompletionItems: Array<vscode.CompletionItem> = [
    {
        label: "☄️",
        filterText: "action emoji 彗星 检出仓库",
        insertText: "☄️",
        detail: "☄️ 彗星：检出仓库",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "🔨",
        filterText: "action emoji 锤子 准备工具",
        insertText: "🔨",
        detail: "🔨 锤子：准备工具",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "💫",
        filterText: "action emoji 头晕",
        insertText: "💫",
        detail: "💫 头晕：获取值、字段、属性等",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "📃",
        filterText: "action emoji 带卷边的页面 生成非日志 非持久化的输出",
        insertText: "📃",
        detail: "📃 带卷边的页面：生成非日志、非持久化的输出",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "🚩",
        filterText: "action emoji 三角旗 创建发布",
        insertText: "🚩",
        detail: "🚩 三角旗：创建发布",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "✅",
        filterText: "action emoji 勾号按钮 检查",
        insertText: "✅",
        detail: "✅ 勾号按钮：检查",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "📦",
        filterText: "action emoji 包裹 打包",
        insertText: "📦",
        detail: "📦 包裹：打包",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "✍️",
        filterText: "action emoji 写字 写入文件 修改文件",
        insertText: "✍️",
        detail: "✍️ 写字：写入或修改文件",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "🗑️",
        filterText: "action emoji 垃圾桶 清理文件 清理目录 释放空间",
        insertText: "🗑️",
        detail: "🗑️ 垃圾桶：清理文件、目录；释放空间",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "🔥",
        filterText: "action emoji 火焰 构建",
        insertText: "🔥",
        detail: "🔥 火焰：构建",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "📤",
        filterText: "action emoji 发件箱 上传 发送",
        insertText: "📤",
        detail: "📤 发件箱：上传；发送",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "💥",
        filterText: "action emoji 爆炸 运行脚本",
        insertText: "💥",
        detail: "💥 爆炸：运行脚本",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "🌠",
        filterText: "action emoji 流星 签名",
        insertText: "🌠",
        detail: "🌠 流星 签名",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "🧲",
        filterText: "action emoji 磁铁 获取资产 下载",
        insertText: "🧲",
        detail: "🧲 磁铁：获取资产；下载",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
    {
        label: "🚀",
        filterText: "action emoji 安装依赖",
        insertText: "🚀",
        detail: "🚀 安装依赖",
        documentation: "Github Action 步骤名称开头的 emoji",
        kind:ActionFile_kind,
    },
];

/**
 * 已知无法在 .github 目录内与 Github Action 扩展同时使用，还不知道如何解决这一冲突。
 */
export class YamlCompletionItemProvider implements vscode.CompletionItemProvider {
    // 这里提供补全项
    public provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        return ActionFileCompletionItems;
    }

    // 这里增强补全项
    public resolveCompletionItem?(
        item: vscode.CompletionItem,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.CompletionItem> {
        return item;
    }
}
