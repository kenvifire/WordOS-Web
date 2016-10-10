var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localost:8088',
		'webpack/hot/only-dev-server',
		'./src/index.js'
		],
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel'
		}]
	},
	resolve: {
		extensions: ['','.js']
	},
	output: {
		path: 'dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	externals :{
		'Config': JSON.stringify(process.env.ENV === 'production' ? require('config.prod.json') : require('./config.dev.json'))
	}
};	
