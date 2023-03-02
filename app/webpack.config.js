const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");

module.exports = (env, argv) => {
  return {
    mode: argv.mode || "development",
    watch: argv.mode !== "production",
    devtool: argv.mode !== "production" ? "eval" : false,
    target: ["electron-renderer", "es2022"],
    output: {
      publicPath: "",
      filename: "[name].[chunkhash].js",
      path: path.resolve(__dirname, "stage/build/app"),
    },
    entry: {
      "main": "./src/index.ts",
      "window": "./src/window/index.ts",
    },
    resolve: {
      extensions: [".ts", ".js", ".jsx", ".tsx", ".tpl", ".scss", ".png", ".svg", ".json"],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
      minimize: true,
      minimizer: [
        new EsbuildPlugin({
          minify: false,
          minifyWhitespace: true,
          minifyIdentifiers: false,
          minifySyntax: false,
          keepNames: true,
          // !minifyIdentifiers + keepNames保留全部标识符，体积稍微增大
          target: ["es2022"],
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.tpl/,
          include: [
            path.resolve(__dirname, "src/assets/template/app/index.tpl"),
            path.resolve(__dirname, "src/assets/template/app/window.tpl")],
          loader: "html-loader",
          options: {
            sources: false,
          },
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "esbuild-loader",
              options: {
                target: ["es2022"],
              },
            },
            {
              loader: "ifdef-loader", options: {
                BROWSER: false,
                MOBILE: false,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "../../"
              }
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
            },
            {
              loader: "sass-loader", // compiles Sass to CSS
            },
          ],
        },
        {
          test:/\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.[jt]sx$/,
          // 处理一个文件可以使用多个loader，loader的执行顺序和配置中的顺序是相反的，最后一个loader最先执行，第一个loader最后执行。ifdef-loader 一般都要放在最后来先执行
          exclude: /node_modules/,
          use: [{
              loader: "babel-loader",
              options: {
                  presets: ["@babel/preset-react", "@babel/preset-typescript"],
                  plugins: [
                      "@babel/plugin-transform-runtime",
                  ]
              }
          },
          {
            loader: "ifdef-loader", options: {
              BROWSER: false,
              MOBILE: false,
            },
          }]
      },
        {
          test: /\.woff$/,
          type: "asset/resource",
          generator: {
            filename: "../fonts/JetBrainsMono-Regular.woff",
          },
        },
        {
          test: /\.(png|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "../../",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: [
          path.join(__dirname, "stage/build/app")],
      }),
      new webpack.DefinePlugin({
        SIYUAN_VERSION: JSON.stringify(pkg.version),SIYUAN_ORIGIN_VERSION: JSON.stringify(pkg.syv),
        NODE_ENV: JSON.stringify(argv.mode),
      }),
      new MiniCssExtractPlugin({
        filename: "base.[contenthash].css",
      }),
      new HtmlWebpackPlugin({
        inject: "head",
        chunks: ["main"],
        filename: "index.html",
        template: "src/assets/template/app/index.tpl",
      }),
      new HtmlWebpackPlugin({
        inject: "head",
        chunks: ["window"],
        filename: "window.html",
        template: "src/assets/template/app/window.tpl",
      }),
    ],
  };
};
