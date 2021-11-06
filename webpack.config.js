const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

require('dotenv').config();

const DEFAULT_PORT = 3000;
const SERVER_PORT = process.env.PORT || DEFAULT_PORT;

module.exports = (_env, options) => {
  const isProduction = options.mode === 'production';

  const optimizationByEnv = {
    development: {},
    production: {
      minimize: true,
      moduleIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
      },
    },
  };

  return {
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
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: !isProduction,
                postcssOptions: { plugins: [ autoprefixer() ] },
              },
            },
          ],
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
      filename: 'js/[name].js?v=[fullhash]',
      chunkFilename: 'js/chunks/[name].js?v=[chunkhash]',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],
    devServer: {
      port: SERVER_PORT,
      hot: true,
      static: path.resolve(__dirname, './dist'),
    },
    optimization: optimizationByEnv[options.mode],
  };
};
