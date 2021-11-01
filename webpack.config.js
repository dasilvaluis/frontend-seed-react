const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

const DEFAULT_PORT = 3000;

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
    extensions: [ '.js', '.jsx' ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js?v=[hash]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: process.env.PORT || DEFAULT_PORT,
  },
};
