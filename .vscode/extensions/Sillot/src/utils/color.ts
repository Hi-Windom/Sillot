import * as vscode from "vscode";
import { Log } from "./log";

export function vscodeColorToHex(color: vscode.Color): string {
    const red = Math.round(color.red * 255)
        .toString(16)
        .padStart(2, "0");
    const green = Math.round(color.green * 255)
        .toString(16)
        .padStart(2, "0");
    const blue = Math.round(color.blue * 255)
        .toString(16)
        .padStart(2, "0");
    const alpha = Math.round(color.alpha * 255)
        .toString(16)
        .padStart(2, "0");

    return color.alpha === 1 ? `#${red}${green}${blue}` : `#${red}${green}${blue}${alpha}`;
}

export function padHexColorToVsColor(hex: string): vscode.Color {
    let _hex = hex;

    // 移除开头的'#'
    if (_hex.startsWith("#")) {
        _hex = _hex.substring(1);
    }

    // 根据原始长度填充前导零
    switch (_hex.length) {
        case 3:
            _hex = _hex
                .split("")
                .map((c: string) => c + c)
                .join("") + "FF";
            break;
        case 4:
            _hex = _hex.slice(0,3)
                .split("")
                .map((c: string) => c + c)
                .join("") + _hex.slice(-1) + _hex.slice(-1);
            break;
        case 6:
            _hex = _hex + "FF";
            break;
        case 8:
            break;
        default:
            throw new Error("Invalid hex color length");
    }
    Log.i(`${hex}->${_hex}`)
    // 解析十六进制颜色值
    const red = Number.parseInt(_hex.slice(0, 2), 16) / 255;
    const green = Number.parseInt(_hex.slice(2, 4), 16) / 255;
    const blue = Number.parseInt(_hex.slice(4, 6), 16) / 255;
    const alpha = Number.parseInt(_hex.slice(6, 8), 16) / 255;
    Log.i(`vscode.Color(${red}, ${green}, ${blue}, ${alpha})`);
    // 返回vscode.Color对象
    return new vscode.Color(red, green, blue, alpha);
}
