// config/webpack.dev.js
// let webpack = require('webpack');
// let path = require('path');

let config = require('./webpack-common.js');


config.devtool = 'cheap-module-eval-source-map';
// https://webpack.js.org/configuration/output/#output-library

config.output.filename = '[name].lib.js';

module.exports = config;
