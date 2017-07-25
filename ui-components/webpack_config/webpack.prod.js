// config/webpack.prod.js
var webpack = require('webpack');

var config = require('./webpack-common.js');
const BabiliPlugin = require('babili-webpack-plugin');




// https://webpack.js.org/configuration/output/#output-library
config.output.libraryTarget = "umd";

config.output.filename = '[name].lib-min.js';
config.output.chunkFilename = '[id].[hash].chunk.js';

// https://webpack.github.io/docs/configuration.html#externals
config.externals = {
////  "metal-component/lib/Component": true,
  "metal-soy/src/Soy": false,
//  "goog": true,
//  "goog.string": true
////  "metal-component/lib/Component": "svi-metal-component/src/Component"
};


/**
 * Minifying for ES6 Moduls dont work with webpack defaults (--optimize-minimize)
 * https://survivejs.com/webpack/optimizing/minifying/
 * So we use the recommeded babel minifier
 */
var plugins = config.plugins;
plugins.push(new BabiliPlugin());
config.plugins = plugins;

module.exports = config;
