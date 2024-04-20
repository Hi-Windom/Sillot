#!/usr/bin/env node
import inquirer from "inquirer";
// import download from "download-git-repo";
// import handlebars from "handlebars";
// import chalk from "chalk";
import ora from "ora";
import fs from "fs";
import path from "path";
import { spawn } from 'node:child_process';
const shell = (await import("shelljs")).default;
const iconv = (await import("iconv-lite")).default;
import pkg from "./package.json" assert { type: "json" };
let V = pkg.version.split(".");
V = `v${V.at(0)}.${V.at(1)}`;
const SYV = `v${pkg.syv}`;

if (!shell.which("go")) {
  shell.echo("Sorry, this script requires go");
  shell.exit(1);
}

const spinner = ora("正在执行, 请稍后...\n");
let startTime = new Date().getTime();

function updateSpinnerText() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    spinner.text = `正在执行, 请稍后...\n\n\n\t\t\t已用时 ${hours}时${minutes}分${seconds}秒\n\n\n`;
}

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

const intervalId = setInterval(updateSpinnerText, 1000); // 每秒更新一次spinner文本
const works = {
  a: { a01: "构建 build", a03: "开发 dev", a02: "检查 check" },
  a01: { a0101: "Win App 构建", a0102: "安卓构建", a0103: "生成本地版本 changelog" },
  a02: { a0201: "升级 npm 包", a0202: "eslint（暂不支持）" },
  a03: { a0301: "electron 调试", a0302: "electron 调试（使用 dlv 和 @electron-forge/cli）"},
};
inquirer
  .prompt([
    {
      name: "b",
      type: "rawlist",
      message: "请选择要执行的操作",
      choices: Object.values(works.a),
      default: "",
    },
  ])
  .then((answers) => {
    switch (answers.b) {
      case works.a.a01:
        doit(works.a01);
        break;
      case works.a.a02:
        doit(works.a02);
        break;
      case works.a.a03:
        doit(works.a03);
        break;
    }
  })
  .catch((e) => {
    eCatcher(e);
  });

function eCatcher(e) {
  console.error(e);
  if (e.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
}

function exeHandler(cmds, silent) {
  spinner.start();
  shell.exec(
    cmds,
    { encoding: silent ? "base64" : "utf8", silent: silent },
    (code, stdout, stderr) => {
      clearInterval(intervalId); // 停止更新spinner文本
      console.log("Exit code:", code);
      console.log(
        "Program output:",
        silent ? iconv.decode(iconv.encode(stdout, "base64"), "gb2312") : stdout
      );
      console.log(
        "Program stderr:",
        silent ? iconv.decode(iconv.encode(stderr, "base64"), "gb2312") : stderr
      );
      if (code === 0) {
        spinner.succeed("Sillot mini cli work done. \t" + getCurrentDateTime());
      } else {
        spinner.fail("Sillot mini cli work failed.");
      }
    }
  );
}


function exeHandlerWindow(cmds) {
  spinner.start();
  // 使用 spawn 创建一个新的进程
  const child = spawn(cmds, [], { shell: true, detached: true });

  child.on('exit', (code) => {
    clearInterval(intervalId); // 停止更新spinner文本
    console.log("Exit code:", code);
    if (code === 0) {
      spinner.succeed("Sillot mini cli work done. \t" + getCurrentDateTime());
    } else {
      spinner.fail("Sillot mini cli work failed.");
    }
  });
}

function doit(obj) {
  inquirer
    .prompt([
      {
        name: "b",
        type: "rawlist",
        message: "请选择要执行的操作",
        choices: Object.values(obj),
        default: "",
      },
    ])
    .then((answers) => {
      console.warn("\n建议暂时退出杀毒软件，避免弹窗影响体验\n");
      switch (answers.b) {
        case works.a01.a0101:
          exeHandler("cd .. && .\\scripts\\sillot-win-build.bat", true);
          break;
        case works.a01.a0102:
          exeHandler("cd .. && .\\scripts\\sillot-android-build.bat", true);
          break;
        case works.a01.a0103:
          inquirer.prompt([
                {
                  name: "b",
                  type: "list",
                  message: "从何处获取思源更新",
                  choices: [
                    { name: "Github milestone" },
                    { name: "local changelog zh_CN.md（未正式发布的版本无该文件）" },
                    { name: "local changelog.md（未正式发布的版本无该文件）" },
                  ],
                },
              ])
              .then((answers) => {
                switch (answers.b) {
                  case "Github milestone":
                    exeHandler(
                      `cd .. && python .\\scripts\\parse-changelog2File-sillot.py -t ${V} -v ${SYV} -w github`,
                      true
                    );
                    break;
                  case "local changelog":
                    exeHandler(
                      `cd .. && python .\\scripts\\parse-changelog2File-sillot.py -t ${V} -v ${SYV} -w local`,
                      true
                    );
                    break;
                  default:
                    exeHandler(
                      `cd .. && python .\\scripts\\parse-changelog2File-sillot.py -t ${V} -v ${SYV} -w local_zh`,
                      true
                    );
                    break;
                }
              })
              .catch((e) => {
                eCatcher(e);
              });
          break;
        case works.a02.a0201:
          exeHandler("set NPM_CHECK_INSTALLER=pnpm && npm-check -y", false);
          break;
        case works.a02.a0202:
          console.warn("敬请期待");
          break;
        case works.a03.a0301:
          console.warn("\n请手动执行 pnpm start 命令\n\n注意：内核可执行文件是否已经正确拉起\n");
          break;
        case works.a03.a0302:
          console.warn("\n请手动执行 pnpm dlv 命令\n\n注意：dlv debug 是否在独立终端运行中（需要在dlv里执行continue）？没有请先启动（终端工作路径是 kernel/main.go 所在目录），不需要内核调试则应该运行 pnpm run dev 命令\n");
          break;
      }
    })
    .catch((e) => {
      eCatcher(e);
    });
}
