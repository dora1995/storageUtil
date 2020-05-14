const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: '[name]-storageUtil',
  //     template: 'public/index.html'
  //   })
  // ],
  output: {
    filename: '[name].bundle.js',
    library: 'storageutil',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules:[   
      {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
      }
    ]
  }
};