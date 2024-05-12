import * as vscode from "vscode";
import fs from "fs-extra";
import json5 from "json5";

export async function add_task_unwantedRecommendations_check_by_id(profilePath: string) {
    const serializedItems = await fs.readFile(profilePath, "utf-8");
    const wp_json = json5.parse(serializedItems);
    if (wp_json.extensions?.unwantedRecommendations) {
        const _list = wp_json.extensions.unwantedRecommendations as string[];
        _list.forEach(async (value, index) => {
            // 当扩展激活时检查另一个扩展的状态
            const is = await checkExtensionStatusIsActive(value);
            is ? vscode.window.showWarningMessage(`扩展 ${value} 已启用，但当前工作区不建议启用该扩展`) : null
        });
    }
}

export const checkExtensionStatusIsActive = async (extensionId: string) => {
    try {
        const extension = vscode.extensions.getExtension(extensionId);
        return extension?.isActive;
        // if (extension) {
        //     const isEnabled = extension.isActive;
        //     if (isEnabled) {
        //         vscode.window.showInformationMessage(`扩展 ${extensionId} 目前已启用。`);
        //     } else {
        //         vscode.window.showInformationMessage(`扩展 ${extensionId} 目前未启用。`);
        //     }
        // } else {
        //     // vscode.window.showErrorMessage(`扩展 ${extensionId} 目前未启用。`);
        //     return false;
        // }
    } catch (error) {
        vscode.window.showErrorMessage(`检查扩展状态时出错: ${error}`);
    }
};
