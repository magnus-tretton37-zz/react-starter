/* eslint-disable */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var WWW_ROOT = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'src');
var MODULES_DIR = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    filename: 'app.js',
    path: WWW_ROOT + '/build'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      inject: true,
      template: APP_DIR + '/index.html',
      filename: WWW_ROOT + '/build/index.html',
      hash: true
  })],
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
};