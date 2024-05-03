### [术语表和说明 | VS Code 插件开发中文文档 (rackar.github.io)](https://rackar.github.io/vscode-ext-doccn/)

.vscodeignore 文件

类似于 .gitignore ，用于定义哪些文件不被打包到插件里。

### language-configuration.json里的定义如何理解 😀

`language-configuration.json` 文件是用于定义一种编程语言的特定行为的配置文件。它告诉VSCode如何处理这种语言的各种特性，例如注释、括号匹配、自动闭合字符对等。这个文件通常与 `package.json` 中的 `languages` 部分一起使用，以提供完整的语言支持。
下面是 `language-configuration.json` 文件中的一些常见配置项的解释：

- `comments`: 定义了语言的注释符号。它包括 `lineComment` 和 `blockComment`，分别代表单行注释和多行注释的符号。
  - `lineComment`: 单行注释的符号，例如在JavaScript中使用 `//`。
  - `blockComment`: 多行注释的开始和结束符号，例如在C语言中使用 `/*` 和 `*/`。
- `brackets`: 定义了语言的括号对。这些括号对用于括号匹配和突出显示。
- `autoClosingPairs`: 定义了自动闭合的字符对。当用户输入一个开放字符时，VSCode会自动插入对应的闭合字符。例如，输入 `{` 时，VSCode会自动插入 `}`。
- `surroundingPairs`: 定义了环绕选择的字符对。当用户选择一段文本并按下括号键时，VSCode会使用这些定义的字符对来环绕文本。
- `folding`: 定义了如何对代码进行折叠。这通常基于缩进或特定的标记。
- `indentationRules`: 定义了语言的缩进规则，包括如何增加或减少缩进。
- `onEnterRules`: 定义了当用户按下回车键时应该插入的内容，这通常与缩进和自动完成相关。
- `wordPattern`: 定义了单词的模式，用于各种语言功能，如导航和重构。
- `semanticTokenScopes`: 定义了语义标记的范围，用于为不同的语言元素提供不同的颜色。
- `semanticTokenModifiers`: 定义了可以应用于语义标记的修饰符，以进一步区分不同的语言元素。
  这些配置项使得VSCode能够更好地理解和处理特定语言的文件，提供更加丰富和准确的语言支持。在为sy文件创建语言配置时，您可以根据sy文件的实际语法特性来调整这些配置项。如果sy文件与JSON非常相似，您可以简单地使用JSON的语言配置，或者根据需要添加或修改特定的配置项。

在 [Manage Extensions | Visual Studio Marketplace](https://marketplace.visualstudio.com/manage/publishers/hi-windom) 直接上传打包好的 vsix 文件即可发布/更新，一般来说不需要通过 cli 发布（vsce login 我试了不成功报错还是乱码我晕）

### package.json 字段

#### categories

最多三个，多了无法上传成功（本地安装不影响）`Specified argument was out of the range of valid values. (Parameter 'start')`

第一个将作为插件市场归类的依据

#### galleryBanner

只在[网页版](https://marketplace.visualstudio.com/items?itemName=Hi-Windom.sillot)有效，VSCode里是看不到效果的

#### contributes

这是非常重要的字段，是插件作出贡献的地方，包含多个子字段

##### grammars：语法高亮

嘿嘿

##### snippets：代码片段

注意："path": "./snippets/sofill.json" 这里的路径不能在 ./src 目录下（这是因为 .vscodeignore 中忽略了 src，因此 src 里最好只包含源代码）

vscode.CompletionItem

举例：

```json
{
        label: "sillot",
        insertText: "Sillot",
        documentation: "汐洛",
        detail: "汐洛（Sillot）孵化自思源笔记（siyuan-note），致力于服务智慧新彖乄",
        kind: vscode.CompletionItemKind.User,
}
```

label 匹配用户输入，当 insertText不存在时也是输出

### vscode.CompletionItemProvider

> 在 VS Code 中，当一个特定的语言或文件类型被打开时，可以有多个扩展为其提供语言功能，如语法高亮、代码补全、悬停信息等。然而，对于某些功能，如代码补全（Completion Item Provider），VS Code 会选择一个“活动的”提供者来处理用户的输入。

> 这意味着，尽管可以有多个扩展注册了同一个语言或文件类型的 Completion Item Provider，但 VS Code 会在这些提供者中选择一个来响应自动完成请求。通常，选择哪个提供者取决于提供者的注册方式和它们的优先级。

举例：

```json
{
        label: "☄️",
        filterText: "彗星 检出仓库",
        insertText: "☄️",
        documentation: "☄️ 彗星：检出仓库",
        detail: "Github Action 步骤名称开头的 emoji",
        kind: vscode.CompletionItemKind.User,
}
```

label是显示在自动补全主框里的内容

filterText可以理解为输入联想，用空格分割关键词

insertText就是自动完成的内容了

documentation是自动补全副框里的主要内容

detail是自动补全副框里的次要内容（非显著颜色的就是了）；当自动补全副框处于关闭状态时，他会显示在主框
