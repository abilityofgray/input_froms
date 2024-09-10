const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const loader = require('sass-loader');
const { prototype } = require('events');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  mode: 'development',
  //devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  //watch: true,
  devServer: {
    static: './dist',
    port: 9000,
  },
  module: {
    
    rules: [
      {
        test: /\.txt$/, 
        use: "raw-loader",
      },
      /*
      {
        test: /\.s[ac]ss$/i, 
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      */
      {
        test: /\.twig$/,
        use: {
          loader: 'twig-loader',
          options: {
              // See options section below
              
          },
        }
      },
      
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader'],
      },
      
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        generator: {
          filename: './svg/[name][ext]'
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          // keep original filenames and copy images to `dist/img/`
          filename: './image/[name][ext]', 
          //filename: path.join('icons', '[name].[contenthash][ext]'),
          //filename: 'img/[name].[hash:8][ext][query]',
        },
      },
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './index.twig',
      inject: 'body'}),
    new HtmlWebpackPlugin({
      filename: './templates/footer.twig',
      //template: './templates/footer.twig',
      //hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: './templates/header.twig',
      
    }),
    new MiniCssExtractPlugin({ filename: 'stylesheet.css'}),
  ],
}