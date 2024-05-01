import * as vscode from "vscode";
import { padHexColorToVsColor, vscodeColorToHex } from "../utils/color";
import { Log } from "../utils/log";

export class ColorPickerProvider implements vscode.DocumentColorProvider {
    private colors: { [key: string]: vscode.Color } = {};

    /**
     * 这里可以添加逻辑来解析文档中的颜色信息
     * 例如，可以解析文档中的字符串，并将它们转换为颜色对象
     * 然后返回这些颜色对象
     * 它将在颜色字符串前面显示一个颜色小方格
     */
    public provideDocumentColors(document: vscode.TextDocument, token: vscode.CancellationToken): Thenable<vscode.ColorInformation[]> {
        const colorInfo: vscode.ColorInformation[] = [];
        // 正则表达式以支持HEX、RGB和RGBA颜色码。/gi：这是全局不区分大小写的匹配，它匹配所有可能的匹配项，并且不区分大小写
        // 注意 HEX 末尾额外匹配了用于阻断的字符
        const colorRegex =
            /#(([0-9A-F]{8}[^0-9A-Z])|([0-9A-F]{6}[^0-9A-Z])|([0-9A-F]{4}[^0-9A-Z])|([0-9A-F]{3}[^0-9A-Z]))|(RGBA\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\))|(RGB\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\))/gi;

        const text = document.getText();
        // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
        let match;

        // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
        while ((match = colorRegex.exec(text)) !== null) {
            // 使用了while循环和RegExp.prototype.exec方法来迭代所有匹配项。每次迭代后，exec方法会更新正则表达式的lastIndex属性，该属性决定了下一次匹配的起始位置。
            // 这样，每次匹配都会得到正确的range，因为它基于当前匹配项的inde，而不是使用text.indexOf(match)来找到颜色字符串的首次出现位置。
            if (token.isCancellationRequested) {
                return Promise.resolve([]); // 如果请求被取消，则返回空数组，避免在取消请求后继续执行不必要的计算
            }

            let color: vscode.Color | undefined;
            let range: vscode.Range | undefined;
            Log.d(match.toString());
            if (match[14]) {
                // RGB颜色
                const startIndex = match.index;
                range = new vscode.Range(document.positionAt(startIndex), document.positionAt(startIndex + match[0].length));
                const red = Number.parseInt(match[12], 10) / 255;
                const green = Number.parseInt(match[13], 10) / 255;
                const blue = Number.parseInt(match[14], 10) / 255;
                Log.i(`rgb(${red}, ${green}, ${blue})`);
                if (red <= 1 && green <= 1 && blue <= 1) {
                    color = new vscode.Color(red, green, blue, 1); // RGB没有透明度，默认为不透明
                }
            } else if (match[10]) {
                // RGBA颜色
                const startIndex = match.index;
                range = new vscode.Range(document.positionAt(startIndex), document.positionAt(startIndex + match[0].length));
                const red = Number.parseInt(match[7], 10) / 255;
                const green = Number.parseInt(match[8], 10) / 255;
                const blue = Number.parseInt(match[9], 10) / 255;
                const alpha = Number.parseFloat(match[10]);
                Log.i(`rgba(${red}, ${green}, ${blue}, ${alpha})`);
                if (red <= 1 && green <= 1 && blue <= 1) {
                    color = new vscode.Color(red, green, blue, alpha);
                }
            } else if (match[1]) {
                // HEX颜色
                const hex = match[1].toUpperCase().slice(0, -1); // 去掉最后一个用于阻断正则匹配的字符
                const startIndex = match.index;
                range = new vscode.Range(document.positionAt(startIndex), document.positionAt(startIndex + hex.length + 1)); // 因为 match[0] 不包含开头的井号，所以这里要+1
                color = padHexColorToVsColor(hex);
            }

            if (color && range) {
                const colorKey = `${color.red.toString()}${color.green.toString()}${color.blue.toString()}${color.alpha.toString()}`;
                if (!this.colors[colorKey]) {
                    this.colors[colorKey] = color;
                }
                colorInfo.push(new vscode.ColorInformation(range, this.colors[colorKey]));
            }
        }

        return Promise.resolve(colorInfo);
    }

    /**
     * 这里可以添加逻辑来创建颜色选择器
     * 例如，可以创建一个颜色选择器，并将其呈现给用户
     * 然后返回这些颜色选择器
     */
    public provideColorPresentations(
        color: vscode.Color,
        context: { document: vscode.TextDocument; range: vscode.Range },
        token: vscode.CancellationToken
    ): Thenable<vscode.ColorPresentation[]> {
        // 点击颜色选择器的标题可以切换方案
        const colorPresentations: vscode.ColorPresentation[] = [];
        colorPresentations.push(new vscode.ColorPresentation(vscodeColorToHex(color)));

        const rgba = `rgba(${Math.round(color.red * 255)}, ${Math.round(color.green * 255)}, ${Math.round(color.blue * 255)}, ${
            color.alpha
        })`;
        colorPresentations.push(new vscode.ColorPresentation(rgba));

        return Promise.resolve(colorPresentations);
    }
}
