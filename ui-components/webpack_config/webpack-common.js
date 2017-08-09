/**
 * Common configuration for webpack
 * TODO is hjs-webpack a option?
 * Check https://github.com/henrikjoreteg/hjs-webpack
 */

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, '../build/dist');
const BUILD_DIR_STYLES = path.resolve(__dirname, '../build/styles');

module.exports = {

  entry:  {
    theme: './src/styles/main.scss',
    simpleLogger: './src/js/SimpleLogger/simple',
    loadingAnimator: './src/js/LoadingAnimator/LoadingAnimator.js',
//    loadingAnimator2: './src/js/LoadingAnimator2/LoadingAnimator2.js'
    simpleForm: './src/js/form/SimpleForm',
    treeView: './src/js/Treeview/Treeview',
    

  },

  output: {
    path: BUILD_DIR,
    libraryTarget: "umd",
    filename: "UIComponents.js",
    library: ['UIComponents', "[name]"],
    umdNamedDefine: true
  },


  resolve: {
    extensions: ['.js', '.scss'],
    modules : ['../node_modules' ],
//    alias: {
//          src: path.join(__dirname, './src'),
//     }
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
      test: /\.(css|scss)/, 
      use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
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
    new ExtractTextPlugin({
      filename : 'styles/[name].css',
      allChunks: true
    }),

// find the duplicate libs and extract it to a commons lib
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			minChunks(module, count) {
        let context = module.context;
        return context && context.indexOf('node_modules') >= 0;
			}
		}),

    new HtmlWebpackPlugin({
      template : 'webpack_config/index.html'
    })


  ]

};
