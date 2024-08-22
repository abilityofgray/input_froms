
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [{test: /\.txt$/, use: 'raw-loader'}],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html'})
  ],
}