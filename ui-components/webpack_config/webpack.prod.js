// config/webpack.prod.js
var webpack = require('webpack');

var config = require('./webpack-common.js');
const BabiliPlugin = require('babili-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;




// https://webpack.js.org/configuration/output/#output-library
config.output.libraryTarget = "umd";

config.output.filename = '[name].lib-min.js';
config.output.chunkFilename = '[id].[hash].chunk.js';

// https://webpack.github.io/docs/configuration.html#externals
config.externals = {
  "metal-soy-bundle": true,
  "incremental-dom": true,
  "metal": true,
  "metal-component": true,
  "metal-dom": true,
  "metal-events": true,
  "metal-soy": true,
  "metal-state": true,
//  "html-entities": true,
//  "sockjs-client": true,
//  "json3": true,
};


/**
 * Minifying for ES6 Moduls dont work with webpack defaults (--optimize-minimize)
 * https://survivejs.com/webpack/optimizing/minifying/
 * So we use the recommeded babel minifier
 */
var plugins = config.plugins;
plugins.push(new BabiliPlugin());

//plugins.push(
//		new BundleAnalyzerPlugin({
//            analyzerMode: 'static'
//        })
//);


config.plugins = plugins;

module.exports = config;
