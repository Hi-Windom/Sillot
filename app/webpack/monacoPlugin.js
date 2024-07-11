const fs = require("fs");
const path = require("path");

class MonacoPlugin {
    constructor(options) {
        this.options = options || {};
        this.folderNames = Array.isArray(this.options.folderNames) ? this.options.folderNames : [];
    }

    apply(compiler) {
        compiler.hooks.beforeCompile.tapAsync("RemoveModulesPlugin", (params, callback) => {
            let foldersToRemove = this.folderNames.length;

            if (foldersToRemove === 0) {
                console.log("No folders to remove.");
                return callback();
            }

            this.folderNames.forEach(folderName => {
                const folderPath = path.resolve(__dirname, '..', "node_modules", folderName); // 这里需要先跳出本文件子目录再找 node_modules

                // 使用 fs.access 检查文件夹是否存在
                fs.access(folderPath, err => {
                    if (err) {
                        if (err.code === "ENOENT") {
                            console.log(`Folder ${folderPath} does not exist. No need to remove.`);
                        } else {
                            console.error(`Error accessing folder ${folderPath}:`, err);
                        }
                        foldersToRemove--;
                        if (foldersToRemove === 0) {
                            callback();
                        }
                        return;
                    }

                    // 如果文件夹存在，则删除它
                    fs.rmdir(folderPath, { recursive: true }, err => {
                        if (err) {
                            console.error(`Error removing folder ${folderPath}:`, err);
                            callback(err);
                            return;
                        }
                        console.log(`Successfully removed folder ${folderPath}`);
                        foldersToRemove--;
                        if (foldersToRemove === 0) {
                            callback();
                        }
                    });
                });
            });
        });
    }
}

module.exports = MonacoPlugin;
