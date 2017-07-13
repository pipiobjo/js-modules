// config/webpack.dev.js
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: './src/MyForm.js',

    output: {
		library: 'Form',
		path: path.resolve('./build'),
        publicPath: 'http://localhost:8080/',
        filename: 'Form.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
            
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?sourceMap'})
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

