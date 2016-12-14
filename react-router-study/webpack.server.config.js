var fs = require('fs')
var path = require('path')

module.exports = {

  entry: path.resolve(__dirname, 'server2.js'),

  output: {
    path: __dirname,
    // path: "statics/chunkJs",
    filename: 'server.bundle.js',
    publicPath: '/',
    // chunkFilename: '/statics/chunkJs/[name].server.[chunkhash:5].chunk.js',
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
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
    ]
  }

}
