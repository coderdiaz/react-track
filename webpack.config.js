const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    port: 9000,
    compress: true,
    watchContentBase: true,
    progress: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};