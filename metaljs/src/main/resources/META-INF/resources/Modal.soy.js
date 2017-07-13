/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Modal.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Modal.
 * @public
 */

goog.module('Modal.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('CloseHeader.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'modal ' + (opt_data.shown ? 'show' : ''));
    ie_open('div', null, null,
        'class', 'modal-dialog');
      ie_open('div', null, null,
          'class', 'modal-content');
        $templateAlias1({cssClass: 'modal-header', onClick: opt_data.close, title: opt_data.header}, null, opt_ijData);
        ie_open('section', null, null,
            'class', 'modal-body');
          var dyn1 = opt_data.body;
          if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
        ie_close('section');
        ie_open('footer', null, null,
            'class', 'modal-footer');
          ie_open('button', null, null,
              'type', 'button',
              'class', 'btn btn-primary');
            itext('OK');
          ie_close('button');
        ie_close('footer');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Modal.render';
}

exports.render.params = ["body","close","header","shown"];
exports.render.types = {"body":"any","close":"any","header":"any","shown":"any"};
templates = exports;
return exports;

});

class Modal extends Component {}
Soy.register(Modal, templates);
export { Modal, templates };
export default templates;
/* jshint ignore:end */
