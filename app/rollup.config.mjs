// https://www.rollupjs.com/guide/command-line-reference
// rollup.config.js

// 导入defineConfig方法可以让编辑器（VSCode）智能提示所有的rollup的配置项，很方便
import { defineConfig } from "rollup";
// 这里是babel的插件，用来处理es的转换，当然会用一个.babelrc配置文件
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import css from "rollup-plugin-import-css";
import postcss from 'rollup-plugin-postcss'
import pkg from "./package/package.json" assert { type: "json" };

const libName = "sillotBridge";
const banner = `/*!
* ${libName} v${pkg.version}
* https://github.com/Hi-Windom/Sillot
* https://www.npmjs.com/package/sillot
*/`

export default defineConfig({
  input: "bridge/index.ts",
  output: [
    {
      file: "out/index.mjs",
      format: "es",
      banner
    },
    {
      file: "out/index.cjs",
      format: "cjs",
      banner
    },
    {
      file: `out/${libName}.min.js`,
      // 通用格式可以用于node和browser ，参加 https://juejin.cn/post/7051236803344334862
      format: "umd",
      // 外部引入的模块需要显式告知使用的三方模块的命名，结合下面的external使用
      globals: {},
      // 注意如果是umd格式的bundle的话name属性是必须的，这时可以在script标签引入后window下会挂载该属性的变量来使用你的类库方法
      name: libName,
      plugins: [terser()],
      banner
    },
  ],
  // 解释同globals配置，这个配置的意思是我简单处理把外部依赖不打包进bundle中，而是前置引入或者作为依赖安装使用
  external: [],
  plugins: [
    commonjs({ transformMixedEsModules: true }),
    json({
      compact: true,
    }),
    // css(),
    postcss(),
    babel({babelHelpers: 'bundled',}),
    typescript({
      declaration: true,
      sourceMap: false,
    }),
    resolve({
      moduleDirectories: ["node_modules"],
    }),
  ],
});
