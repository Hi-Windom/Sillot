const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

/** @type WebpackConfig */
const baseConfig = {
    mode: "none", // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
    externals: {
        vscode: "commonjs vscode", // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
        // modules added here also need to be added in the .vscodeignore file
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    devtool: "nosources-source-map",
    infrastructureLogging: {
        level: "log", // enables logging required for problem matchers
    },
};

/** @type WebpackConfig */
const extensionConfig = {
    ...baseConfig,
    target: "node", // VS Code extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
    mode: "none", // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
    entry: "./src/extension.ts", // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
    output: {
        // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
        path: path.resolve(__dirname, "dist"),
        filename: "extension.js",
        libraryTarget: "commonjs2",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{ loader: "ts-loader" }],
            },
        ],
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
    },
};

/** @type WebpackConfig */
const webviewConfig = {
    ...baseConfig,
    target: ["web", "es2020"],
    entry: "./src/webview/main.mts",
    experiments: { outputModule: true },
    output: {
        path: path.resolve(__dirname, "out"),
        filename: "webview.js",
        libraryTarget: "module",
        chunkFormat: "module",
    },
    module: {
        rules: [
            {
                test: /\.(ts|mts)$/,
                exclude: /node_modules/,
                use: [{ loader: "ts-loader" }],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: "./src/webview/*.css",
                to: path.resolve(__dirname, "out/[name].css"), // 如果是 "out" 则会保留原路径结构，如果是 "out/[name].css" 则是扁平化。
            }],
        }),
    ],
};

module.exports = [extensionConfig, webviewConfig];
