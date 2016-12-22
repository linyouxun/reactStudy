// var path = require('path'),
//     ExtractTextPlugin = require('extract-text-webpack-plugin'),
//     autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
var pathToReactRedux = path.resolve(node_modules, 'react-redux/dist/react-redux.min.js');

var pathToReduxThunk = path.resolve(node_modules, 'redux-thunk/dist/redux-thunk.min.js');
var pathToReduxLogger = path.resolve(node_modules, 'redux-logger/dist/index.min.js');


var pathToRedux = path.resolve(node_modules, 'redux/dist/redux.min.js');


module.exports = {
  entry: './index.jsx',
  output: {
    path: 'statics/chunkJs',
    filename: 'bundle.js',
    publicPath: '/',
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  resolve:{
    extensions:["",".js",".jsx","css","less","scss","png","jpg"],
    alias: {
      'react$': pathToReact,
      'react-dom$':pathToReactDom,
      'react-redux$':pathToReactRedux,
      'redux$':pathToRedux,
      'redux-chunk$':pathToReduxThunk,
      'redux-logger$':pathToReduxLogger,
    },
  },
  module: {
    // noParse: [/react/],
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
      // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract('style', 'css!postcss!scss')
      // },
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  // postcss: function () {
  //   return [autoprefixer];
  // },
  // plugins: [
  //   new ExtractTextPlugin('./modules/App.scss')
  // ],
}
