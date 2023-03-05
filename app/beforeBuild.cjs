const fs = require("fs-extra");
const path = require("path");
const buildPath = "out";
const packageDir = "package";

/**
 * 删除 git 子模块文件夹内容但不删除文件夹
 */
function deleteDir(url) {
  var files = [];

  if (fs.existsSync(url)) {
    //判断给定的路径是否存在

    files = fs.readdirSync(url); //返回文件和子目录的数组
    files.forEach(function (file, index) {
      var curPath = path.join(url, file);
      if (!curPath.endsWith(".git")) {
        if (fs.statSync(curPath).isDirectory()) {
          //同步读取文件夹文件，如果是文件夹，则函数回调
          deleteDir(curPath);
        } else {
          fs.unlinkSync(curPath); //是指定文件，则删除
        }
      }
    });

    if (url !== buildPath) fs.rmdirSync(url);
  } else {
    console.log("给定的路径不存在！");
  }
}

function copyPackageDir(from, to) {
  fs.copyFile(`${from}/package.json`, `${to}/package.json`, (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
  });
  fs.copyFile(`${from}/.npmignore`, `${to}/.npmignore`, (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
  });
  fs.copyFile(`${from}/.gitignore`, `${to}/.gitignore`, (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
  });
  fs.copyFile(`${from}/README.md`, `${to}/README.md`, (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
  });
  fs.copy(`${from}/.github`, `${to}/.github`, (err) => {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
  });
  fs.copy(`${from}/app`, `${to}/app`, (err) => {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
  });
}

deleteDir(buildPath);
copyPackageDir(packageDir, buildPath);
