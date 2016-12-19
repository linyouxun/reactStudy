var webpack = require('webpack');
module.exports = {
    entry: "./index",
    output: {
      path: 'statics/chunkJs',
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
        //加载器配置
        loaders: [
          {
            test: /\.js$/, exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
          },
        ]
    }
};
