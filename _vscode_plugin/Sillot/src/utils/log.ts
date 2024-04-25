import * as vscode from "vscode";

export abstract class Log {
    private static 分隔符 = " > ";
    private static ChannelName = "汐洛插件日志";
    public static Channel: vscode.LogOutputChannel = vscode.window.createOutputChannel(Log.ChannelName, { log: true });
    constructor() {
        if (!Log.Channel) {
            Log.Channel = vscode.window.createOutputChannel(Log.ChannelName, { log: true });
        }
    }
    static t(message: string): void;
    static t(tag: string, message: string): void;
    static t(...args: [string] | [string, string]): void {
        if (Log.Channel.logLevel > 1) {
            vscode.window.showInformationMessage(args[0]);
            return;
        }
        if (args.length === 1) {
            Log.Channel?.debug(args[0]);
        } else if (args.length === 2) {
            Log.Channel?.debug(`${args[0]}${Log.分隔符}${args[1]}`);
        }
    }
    static d(message: string): void;
    static d(tag: string, message: string): void;
    static d(...args: [string] | [string, string]): void {
        if (Log.Channel.logLevel > 2) {
            vscode.window.showInformationMessage(args[0]);
            return;
        }
        if (args.length === 1) {
            Log.Channel?.debug(args[0]);
        } else if (args.length === 2) {
            Log.Channel?.debug(`${args[0]}${Log.分隔符}${args[1]}`);
        }
    }
    static a(message: string): void;
    static a(tag: string, message: string): void;
    static a(...args: [string] | [string, string]): void {
        if (Log.Channel.logLevel > 3) {
            vscode.window.showInformationMessage(args[0]);
            return;
        }
        if (args.length === 1) {
            Log.Channel?.appendLine(args[0]);
        } else if (args.length === 2) {
            Log.Channel?.appendLine(`${args[0]}${Log.分隔符}${args[1]}`);
        }
    }
    static i(message: string): void;
    static i(tag: string, message: string): void;
    static i(...args: [string] | [string, string]): void {
        if (Log.Channel.logLevel > 3) {
            vscode.window.showInformationMessage(args[0]);
            return;
        }
        if (args.length === 1) {
            Log.Channel?.info(args[0]);
        } else if (args.length === 2) {
            Log.Channel?.info(`${args[0]}${Log.分隔符}${args[1]}`);
        }
    }
    static w(message: string): void;
    static w(tag: string, message: string): void;
    static w(...args: [string] | [string, string]): void {
        if (Log.Channel.logLevel > 4) {
            vscode.window.showInformationMessage(args[0]);
            return;
        }
        if (args.length === 1) {
            Log.Channel?.warn(args[0]);
        } else if (args.length === 2) {
            Log.Channel?.warn(`${args[0]}${Log.分隔符}${args[1]}`);
        }
    }
    static e(message: string): void;
    static e(tag: string, message: string): void;
    static e(...args: [string] | [string, string]): void {
        if (args.length === 1) {
            Log.Channel?.error(args[0]);
        } else if (args.length === 2) {
            Log.Channel?.error(`${args[0]}${Log.分隔符}${args[1]}`);
        }
        Log.Channel?.show(true); // 激活，使其成为焦点。参数 true 表示将输出通道显示在活动视图组的最前面。
    }
}
