#!/usr/bin/env node
import inquirer from "inquirer";
// import download from "download-git-repo";
// import handlebars from "handlebars";
// import chalk from "chalk";
import ora from "ora";
import fs from "fs";
import path from "path";
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
const works = {
  a: { a01: "构建 build", a02: "检查 check", a03: "开发 dev" },
  a01: { a0101: "Win App 构建", a0102: "安卓构建" },
  a02: { a0201: "升级 npm 包", a0202: "eslint（暂不支持）" },
  a03: { a0301: "生成本地版本 changelog" },
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
    function (code, stdout, stderr) {
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
        // console.log("cli work done.");
        spinner.succeed("Sillot mini cli work done.");
      } else {
        spinner.fail("Sillot mini cli work failed.");
      }
    }
  );
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
      console.warn("建议暂时退出杀毒软件，避免弹窗影响体验");
      switch (answers.b) {
        case works.a01.a0101:
          exeHandler("cd .. && .\\scripts\\sillot-win-build.bat", true);
          break;
        case works.a01.a0102:
          exeHandler("cd .. && .\\scripts\\sillot-android-build.bat", true);
          break;
        case works.a02.a0201:
          exeHandler("set NPM_CHECK_INSTALLER=pnpm && npm-check -y", false);
          break;
        case works.a02.a0202:
          console.warn("敬请期待");
          break;
        case works.a03.a0301:
          inquirer
            .prompt([
              {
                name: "b",
                type: "list",
                message: "从何处获取思源更新",
                choices: [
                  { name: "Github milestone" },
                  { name: "local changelog zh_CN" },
                  { name: "local changelog" },
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
      }
    })
    .catch((e) => {
      eCatcher(e);
    });
}
