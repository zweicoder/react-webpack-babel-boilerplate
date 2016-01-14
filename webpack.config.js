var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: [
  'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  path.resolve(APP_DIR, 'index.jsx') // Your appʼs entry point
  ],

  output: {
  	path: BUILD_DIR,
  	filename: 'bundle.js',
  	publicPath: path.resolve(BUILD_DIR, 'static')
  },

  module : {
  	loaders : [{
  		test : /\.jsx?/,
  		include : APP_DIR,
  		loaders : [
        'react-hot', // React hot-loader
        'babel'
        ],
        include: path.join(__dirname, 'src')
    }]


},

plugins: [
new webpack.HotModuleReplacementPlugin()
]

};

module.exports = config;