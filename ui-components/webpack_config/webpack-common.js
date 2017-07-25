/**
 * Common configuration for webpack TODO is hjs-webpack a option
 * https://github.com/henrikjoreteg/hjs-webpack
 */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../build/dist');

module.exports = {
  entry: {
    simpleLogger: './src/js/SimpleLogger/simple.js',
    loadingAnimator: './src/js/LoadingAnimator/LoadingAnimator.js',
    loadingAnimator2: './src/js/LoadingAnimator2/LoadingAnimator2.js'
    
  },
    
  output: {
    path: BUILD_DIR,
    libraryTarget: "umd",
    filename: "UIComponents.[name].js",
    library: ['UIComponents', "[name]"]
  },
  

  resolve: {
    extensions: ['.js', '.scss'],
    modules : ['../node_modules' ],
    alias: {
          src: path.join(__dirname, './src'),
     }
  },

  module: {

    rules: [{
      test: /\.js?$/,
      exclude: [/node_modules/, /\.soy\.js?$/],
      use: ['babel-loader', 'eslint-loader']

    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }

    ]
  },
  
  
  plugins : [
  
//    new webpack.LoaderOptionsPlugin({
//      options: {
//        eslint: {
//          useEslintrc: true,
//          fix: true
//        },
//        postcss: () => {
//          return [autoprefixer];
//        }
//      }
//    }),
//    
//    new ExtractTextPlugin({
//      filename : '[name].css',
//      allChunks: true
//    }),
  
    new HtmlWebpackPlugin({
      template : 'webpack_config/index.html'
    })
      
  
  ]

};