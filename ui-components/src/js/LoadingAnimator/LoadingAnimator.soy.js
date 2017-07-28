/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from LoadingAnimator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace LoadingAnimator.
 * @public
 */

goog.module('LoadingAnimator.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
var soyIdom = goog.require('soy.idom');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', opt_data.id + '-parent');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', opt_data.id + '-loader');
        incrementalDom.attr('class', opt_data.show ? opt_data.cssClass : '');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'LoadingAnimator.render';
}

exports.render.params = ["id","show","cssClass"];
exports.render.types = {"id":"any","show":"any","cssClass":"any"};
templates = exports;
return exports;

});

class LoadingAnimator extends Component {}
Soy.register(LoadingAnimator, templates);
export { LoadingAnimator, templates };
export default templates;
/* jshint ignore:end */
