const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require(
  'webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    watch: argv.mode !== 'production',
    devtool: argv.mode !== 'production' ? 'eval' : false,
    target: 'electron-renderer',
    output: {
      publicPath: '',
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'stage/build/app'),
    },
    entry: {
      'main': './src/index.ts',
      'window': './src/window/index.ts',
    },
    resolve: {
      extensions: ['.ts', '.js', '.jsx', '.tsx', '.tpl', '.scss', '.png', '.svg'],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimize: true, // 调试时关闭
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.tpl/,
          include: [
            path.resolve(__dirname, 'src/assets/template/app/index.tpl'),
            path.resolve(__dirname, 'src/assets/template/app/window.tpl')],
          loader: 'html-loader',
          options: {
            sources: false,
          },
        },
        {
          test: /\.ts(x?)$/,
          include: [path.resolve(__dirname, 'src')],
          use: [
            {
              loader: 'ts-loader',
            },
            {
              loader: 'ifdef-loader', options: {
                BROWSER: false,
                MOBILE: false,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          include: [
            path.resolve(__dirname, 'src/assets/scss'),
          ],
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../../'
              }
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
            },
          ],
        },
        {
          test:/\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.jsx?$/,
          include: path.join(__dirname, 'src'),
          loader: 'babel-loader'
        },
        {
          test: /\.woff$/,
          type: 'asset/resource',
          generator: {
            filename: '../fonts/JetBrainsMono-Regular.woff',
          },
        },
        {
          test: /\.(png|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: '../../',
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
          path.join(__dirname, 'stage/build/app')],
      }),
      new webpack.DefinePlugin({
        SIYUAN_VERSION: JSON.stringify(pkg.version),SIYUAN_ORIGIN_VERSION: JSON.stringify(pkg.syv),
        NODE_ENV: JSON.stringify(argv.mode),
      }),
      new MiniCssExtractPlugin({
        filename: 'base.[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        inject: 'head',
        chunks: ['main'],
        filename: 'index.html',
        template: 'src/assets/template/app/index.tpl',
      }),
      new HtmlWebpackPlugin({
        inject: 'head',
        chunks: ['window'],
        filename: 'window.html',
        template: 'src/assets/template/app/window.tpl',
      }),
    ],
  }
}
