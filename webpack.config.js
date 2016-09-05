var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webAppPath = path.resolve(__dirname, 'app');

//console.log(webAppPath);
module.exports = {
  entry: [
    path.resolve(webAppPath, 'app.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx$/,
        loaders: ['babel'],
        include: webAppPath
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.html$/,
        loader: "html"
      }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.html'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'public/index.html'
  })]
};
