import * as vscode from "vscode";
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


export function readJSONFile(filePath: string): any {
    try {
        const content = fs.readFileSync(filePath, "utf-8");
        return json5.parse(content);
    } catch (e) {
        vscode.window.showErrorMessage(String(e));
        return null;
    }
}

export function flattenJson(jsonData: { [x: string]: any } | any[], parentKey = ""): any[] {
    let resources: any[] = [];
    let newKey: string;

    if (Array.isArray(jsonData)) {
        jsonData.forEach((item, index) => {
            newKey = parentKey ? `${parentKey}[${index}]` : `[${index}]`;
            if (typeof item === "object") {
                resources = resources.concat(flattenJson(item, newKey));
            } else {
                resources.push({
                    key: newKey,
                    value: item,
                });
            }
        });
    } else if (jsonData !== null && typeof jsonData === "object") {
        for (const key in jsonData) {
            // Check if the key is a numeric string and treat it as an array index
            if (/^\d+$/.test(key)) {
                newKey = parentKey ? `${parentKey}[${key}]` : `[${key}]`;
            } else {
                newKey = parentKey ? `${parentKey}.${key}` : key;
            }
            if (typeof jsonData[key] === "object") {
                resources = resources.concat(flattenJson(jsonData[key], newKey));
            } else {
                resources.push({
                    key: newKey,
                    value: jsonData[key],
                });
            }
        }
    }

    return resources;
}
