
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
    rules: [{
      test: /\.txt$/, /\.s[ac]ss$/i,
      use: [
        "raw-loader",
        "style-loader",
        "css-loader",
        "sass-loader",
      ]
      
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html'})
  ],
  
}