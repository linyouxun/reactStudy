var webpack = require('webpack');

module.exports = {
    entry: undefined,
    output: {
        pathinfo: true
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader' }
        ]
    }
};
