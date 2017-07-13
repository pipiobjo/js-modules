// config/webpack.prod.js
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool : 'source-map',

	entry : './src/js/simple.js',

	//https://webpack.js.org/configuration/output/#output-library
	output : {
		library : 'Simple',
		libraryTarget: "umd",
		path : path.resolve('./build'),
		filename : '[name].lib.js',
		chunkFilename : '[id].[hash].chunk.js'
	},

	resolve : {
		extensions : [ '.js', '.scss' ],
		modules : [ 'node_modules' ]
	},

	module : {
		loaders : [ {
			test : /\.js?$/,
			exclude : /node_modules/,
			loader : 'babel-loader',
			query : {
				presets : [ 'es2015' ]
			}
		},{
			test : /\.html$/,
			loader : 'html-loader'
		}, {
			test: /\.scss$/,
			use: [
			    'style-loader',
			    'css-loader',
			    'sass-loader'
			  ]
		}

		]
	},

	plugins : [
	new ExtractTextPlugin({
		filename : '[name].css',
		allChunks: true
	}),	
		
		
	//new webpack.optimize.UglifyJsPlugin({}),

	new HtmlWebpackPlugin({
		template : 'webpack_config/index.html'
	}) ]
};