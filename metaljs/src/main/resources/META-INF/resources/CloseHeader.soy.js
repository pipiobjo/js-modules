/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from CloseHeader.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CloseHeader.
 * @public
 */

goog.module('CloseHeader.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('header', null, null,
      'class', opt_data.cssClass);
    ie_open('button', null, null,
        'onClick', opt_data.onClick,
        'type', 'button',
        'class', 'close');
      ie_open('span');
        itext('Klick Mich');
      ie_close('span');
    ie_close('button');
    ie_open('h4');
      var dyn0 = opt_data.title;
      if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
    ie_close('h4');
  ie_close('header');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'CloseHeader.render';
}

exports.render.params = ["cssClass","onClick","title"];
exports.render.types = {"cssClass":"any","onClick":"any","title":"any"};
templates = exports;
return exports;

});

class CloseHeader extends Component {}
Soy.register(CloseHeader, templates);
export { CloseHeader, templates };
export default templates;
/* jshint ignore:end */
