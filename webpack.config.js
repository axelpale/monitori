var path = require('path');

module.exports = {

  entry: {
    home: './client/home/index.js',
    monitor: './client/monitor/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      },
    ],
  },

  devtool: 'cheap-module-eval-source-map',

};
