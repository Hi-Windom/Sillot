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

if (!shell.which("go")) {
  shell.echo("Sorry, this script requires go");
  shell.exit(1);
}

const spinner = ora("正在执行, 请稍后...\n");
const works = {
  a: { a01: "构建 build", a02: "检查 check", a03: "开发 dev（暂不支持）" },
  a01: { a0101: "Win App 构建", a0102: "安卓构建" },
  a02: { a0201: "升级 npm 包", a0202: "eslint（暂不支持）" },
  a03: {},
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
        console.warn("敬请期待");
        // doit(works.a03);
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
      }
    })
    .catch((e) => {
      eCatcher(e);
    });
}
