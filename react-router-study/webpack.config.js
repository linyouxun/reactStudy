var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer');

module.exports = {
  entry: './index.jsx',
  output: {
    path: 'statics/js',
    filename: 'bundle.js',
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  resolve:{
    extensions:["",".js",".jsx","css","less","scss","png","jpg"],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract('style', 'css!postcss!scss')
      // },
    ]
  },
  // postcss: function () {
  //   return [autoprefixer];
  // },
  // plugins: [
  //   new ExtractTextPlugin('./modules/App.scss')
  // ],
}
