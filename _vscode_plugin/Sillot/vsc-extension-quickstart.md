### [术语表和说明 | VS Code 插件开发中文文档 (rackar.github.io)](https://rackar.github.io/vscode-ext-doccn/)

### language-configuration.json里的定义如何理解

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
