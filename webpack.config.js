var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webAppPath = path.resolve(__dirname, 'app');
var cssFilePath = 'style.css';

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve(webAppPath, 'app.js'),
    path.resolve(webAppPath, 'styles/style.css')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.html$/,
        loader: "html"
      }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.html'],
    alias: {
      'cmpt': path.resolve(webAppPath, 'component')
    }
  },
  plugins: [
    new ExtractTextPlugin(cssFilePath),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};
