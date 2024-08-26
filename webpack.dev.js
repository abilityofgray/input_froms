const path = require('path');
const webpack = require('webpack');
const PugPlugin = require('pug-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const loader = require('sass-loader');


module.exports = {

  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.txt$/, 
        use: "raw-loader",
      },
      {
        test: /\.s[ac]ss$/i, 
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader'],
      },
      {
        test: /\.pug$/,
        loader: '@webdiscus/pug-loader',
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext][query]',
        },
      },
    ]
  },
  plugins: [
    /*
    new HtmlBundlerPlugin({
      entry: {
        // source favicon file must be specified directly in HTML using link tag
        index: './src/index.html',
      },
    }),
    */
    
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src'),
      filename: 'index.html',
    }),
    
    new MiniCssExtractPlugin({ filename: 'stylesheet.css'}),
    /*
    new PugPlugin({
      
      //☝🏽 Format HTML (only in dev mode)
      entry: {
        // Insert your PUG templates here
        index: 'src/template.pug',
        //about: './src/views/about.pug'
      },
      
    })
    */
      
  ],
  
}