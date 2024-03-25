const fs = require('fs');
const path = require('path');

const folderPath = 'src/content'; // 文件夹路径

function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 如果文件内容不以---开头，则进行处理
        if (!content.startsWith('---')) {
            const fileName = path.basename(filePath, path.extname(filePath));
            const newContent = `---\ntitle: ${fileName}\n---\n${content}`;
            
            // 将更新后的内容写回文件
            fs.writeFileSync(filePath, newContent);
            console.log(`File ${filePath} processed successfully.`);
        } else {
            console.log(`File ${filePath} already starts with '---'. Skipping...`);
        }
    } catch (err) {
        console.error(`Error processing file ${filePath}:`, err);
    }
}

function traverseDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            traverseDirectory(filePath); // 递归处理子文件夹
        } else if (path.extname(filePath) === '.md' || path.extname(filePath) === '.mdx') {
            processFile(filePath); // 处理.md和.mdx文件
        }
    });
}

traverseDirectory(folderPath);
