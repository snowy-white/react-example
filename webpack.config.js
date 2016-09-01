var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        test: /\.js$/,
        loaders: ['babel'],
        include: webAppPath
      },
      {
        test: /\.jsx$/,
        loaders: ['babel'],
        include: webAppPath
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias:{'dir':'./component'}
  }
};
