// config/webpack.prod.js
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: './src/Form.js',

    output: {
    	library: 'Form',
        path: path.resolve('./build'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
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
        new webpack.optimize.UglifyJsPlugin({}),

        new ExtractTextPlugin({filename: '[name].css'}),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'app'
        }),

        new HtmlWebpackPlugin({
            template: 'webpack_config/index.html'
        })
    ]
};