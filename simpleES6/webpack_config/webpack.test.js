// config/webpack.dev.js
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/test/DatatableSpec.js',

    output: {
		path: path.join(__dirname, "build"),
		filename: "[name].bundle.js",
		library: "Datatable",
		chunkFilename: "[id].chunk.js"
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

    plugins: [
        new ExtractTextPlugin({filename: '[name].css'}),

        new HtmlWebpackPlugin({
            template: 'webpack_config/index.html'
        })
    ]
};
