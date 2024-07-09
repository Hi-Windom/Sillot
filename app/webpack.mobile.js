const path = require("path");
const fs = require('fs');
const webpack = require("webpack");
const pkg = require("./package.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CircularDependencyPlugin = require('circular-dependency-plugin')
const { EsbuildPlugin } = require("esbuild-loader");

module.exports = (env, argv) => {
  return {
    mode: argv.mode || "development",
    watch: argv.mode !== "production",
    devtool: argv.mode !== "production" ? "eval" : false,
    target: ["web", "es2022"],
    output: {
      publicPath: "/stage/build/mobile/",
      filename: "[name].[chunkhash].js",
      path: path.resolve(__dirname, "stage/build/mobile"),
    },
    entry: {
      "main": "./src/mobile/index.ts",
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
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
      },
      extensions: [".ts", ".js", ".jsx", ".tsx", ".tpl", ".scss"],
    },
    module: {
      rules: [
        {
          test: /\.tpl/,
          include: [
            path.resolve(__dirname, "src/assets/template/mobile/index.tpl")],
          loader: "html-loader",
          options: {
            sources: false,
          },
        },
        {
          test: /\.ts$/,
          include: [path.resolve(__dirname, "src")],
          use: [
            {
              loader: "esbuild-loader",
              options: {
                target: ["es2022"],
              },
            },
            {
              loader: "ifdef-loader",
              options: {
                "ifdef-verbose": false,
                BROWSER: true,
                MOBILE: true,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          include: [
            path.resolve(__dirname, "src/assets/scss"),
          ],
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
              "ifdef-verbose": false,
              BROWSER: true,
              MOBILE: true,
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
      new CircularDependencyPlugin(
        {
          exclude: /node_modules/,
          include: /src\\plugin/,
          failOnError: false,
          allowAsyncCycles: false,
          cwd: process.cwd(),
          onStart({ compilation }) {
            const logFilePath = path.resolve(__dirname, 'webpack.mobile.js.cyc_le_detection.sillot.ltx');
            fs.writeFileSync(logFilePath, '');
            compilation.warnings.push(new Error('start detecting webpack modules cycles --> ' + logFilePath))
          },
          onDetected({ module: webpackModuleRecord, paths, compilation }) {
            compilation.warnings.push(new Error(paths.join(' -> ')))
            const logFilePath = path.resolve(__dirname, 'webpack.mobile.js.cyc_le_detection.sillot.ltx');
            fs.appendFileSync(logFilePath, paths.join(' -> ') + '\n\n\n');
          },
        }
      ),
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: [
          path.join(__dirname, "stage/build/mobile")],
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
        template: "src/assets/template/mobile/index.tpl",
      }),
    ],
  };
};
