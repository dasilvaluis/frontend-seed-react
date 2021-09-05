const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

const pluginsByEnv = {
  development: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: process.env.PORT || 3000,
      server: { baseDir: [ 'dist' ] },
    }),
  ],
};

module.exports = (_env, argv) => {
  const envSpecificPlugins = pluginsByEnv[argv.mode] || [];

  return {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [ 'babel-loader' ],
        },
        {
          test: /\.s?css$/i,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ],
        },
        {
          test: /\.(png|jpe?g|svg|gif)$/,
          use: [ 'file-loader' ],
        },
        {
          test: /\.svg$/,
          use: [ '@svgr/webpack' ],
        },
      ],
    },
    resolve: {
      extensions: [ '.js' ],
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js?v=[hash]',
    },
    plugins: [
      ...envSpecificPlugins,
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, './dist'),
    },
  };
};
