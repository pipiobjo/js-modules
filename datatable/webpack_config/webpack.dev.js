// config/webpack.dev.js
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool : 'source-map',

	entry : './src/js/svi-metal-datatable.js',

	output : {
		library : 'Datatable',
		libraryTarget: "umd",
		path : path.resolve('./build'),
		publicPath : 'http://localhost:8080/',
		filename : 'svi-metal-datatable.js'
	},

	resolve : {
		extensions : [ '.js', '.scss' ],
		modules : [ 'node_modules' ],
		alias: {
		      src: path.join(__dirname, './src'),
		    }
	},

	module : {
		
		rules: [
		{
			test : /\.js?$/,
			exclude : /node_modules/,
			use : [
				'babel-loader',
				'eslint-loader'
			]
			
		},
		{
			test : /\.html$/,
			loader : 'html-loader'
		},
		{
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
	
		new webpack.LoaderOptionsPlugin({
		      options: {
		        eslint: {
		          useEslintrc: true,
		          fix: true
		        },
		        postcss: () => {
		          return [autoprefixer];
		        }
		      }
		    }),
	
	new ExtractTextPlugin({
		filename : '[name].css',
		allChunks: true
	}),

	new HtmlWebpackPlugin({
		template : 'webpack_config/index.html'
	}) ]
};
