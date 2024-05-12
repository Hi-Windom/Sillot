import type * as vscode from "vscode";
import fs from "fs-extra";
import json5 from "json5";
import path, { resolve } from "path";
import { Log } from "../utils/log";

// 序列化并保存到文件
export async function saveCompletionItemsToFile(filePath: string, items: Array<vscode.CompletionItem> | { [key: string]: any }) {
    // 使用 json5.stringify 格式化 JSON，使其更易读
    const serializedItems = json5.stringify(items, {
        space: 2,
        quote: '"',
    });

    // 使用 fs-extra 写入文件
    await fs.writeFile(filePath, serializedItems, "utf-8");
}

// 从文件反序列化
export async function loadCompletionItemsFromFile(filePath: string): Promise<any> {
    // 使用 fs-extra 读取文件
    const serializedItems = await fs.readFile(filePath, "utf-8");

    // 使用 json5.parse 反序列化 JSON
    const items = json5.parse(serializedItems);

    // 返回反序列化后的数组
    return items;
}
