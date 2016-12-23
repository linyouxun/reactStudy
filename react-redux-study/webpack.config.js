// var path = require('path'),
//     ExtractTextPlugin = require('extract-text-webpack-plugin'),
//     autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');
const Clean = require("clean-webpack-plugin");
// const TransferWebpackPlugin = require('transfer-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var node_modules = path.resolve(__dirname, 'node_modules');
var process_name = process.env.NODE_ENV;

var pathToBuild = path.resolve(__dirname, 'statics/chunkJs');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
var pathToReactRedux = path.resolve(node_modules, 'react-redux/dist/react-redux.min.js');
var pathToReduxThunk = path.resolve(node_modules, 'redux-thunk/dist/redux-thunk.min.js');
var pathToReduxLogger = path.resolve(node_modules, 'redux-logger/dist/index.min.js');
var pathToRedux = path.resolve(node_modules, 'redux/dist/redux.min.js');

//基础配置
var baseConfig = {
  entry: {
    'bundle':'./src/client/index.jsx',
  },
  output: {
    path: 'statics/chunkJs',
    filename: '[name].js',
    publicPath: '/',
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
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: './index.html',
      template: './indexDev.html',
      inject: 'body'
    })
  ],
}

// react 额外打包
var libConfig = {
  entry: {
    'lib': ["react", "react-dom","react-redux"],
  },
  plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name:'chunk',
  //      chunks:['lib','lib2'],
  //      filename:"lib.min.js",//忽略则以name为输出文件的名字，否则以此为输出文件名字
  //     //  minChunks: 2,
  //  })
  ]
}
//react从外部引入
var externalConfig = {
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  resolve:{
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
    // noParse: [pathToReact,pathToReactDom],
  },
  plugins: [
    new CopyWebpackPlugin([
      {from :pathToReact, to: "./react.min.js"},
      {from :pathToReactDom, to: "./react-dom.min.js"},
      ]),
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: './index.html',
      template: './index.html', // Load a custom template
      // excludeChunks: ['app'],
      inject: 'body' // Inject all scripts into the body
    })
  ],
}

//清除插件
const cleanConfig = {
  plugins: [
    new Clean(pathToBuild),
  ]
};

//压缩
const uglifyJsConfig = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

function mergeConfig() {
  let config = baseConfig;
  switch (process_name) {
    case 'dev':{
      config = merge(baseConfig,libConfig);
      break;
    }
    case 'production':{
      config = merge(baseConfig,uglifyJsConfig,cleanConfig,externalConfig);
      break;
    }
    default:{

    }
  }
  return config;
}

module.exports = mergeConfig();
