// config/webpack.dev.js
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack-common.js');



config.devtool = 'cheap-module-eval-source-map';
//https://webpack.js.org/configuration/output/#output-library

config.output.filename = '[name].lib.js';

module.exports = config;
