/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from svi-metal-datatable.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SVIMetalDatatable.
 * @public
 */

goog.module('SVIMetalDatatable.incrementaldom');

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
  ie_open('div', null, null,
      'id', opt_data.id + '-table-container');
    ie_open('div', null, null,
        'class', 'table-header');
      var dyn0 = opt_data.tableHeader;
      if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
    ie_close('div');
    ie_open('div');
      ie_open('a', null, null,
          'data-onClick', 'changeState');
        itext('klick mich');
      ie_close('a');
      ie_open('span');
        var dyn1 = opt_data.myState;
        if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
      ie_close('span');
    ie_close('div');
    ie_open('div');
      ie_void('div', null, null,
          'id', opt_data.id + '-myDataTable',
          'style', 'height: 150px;width: 600px',
          'class', 'ag-bootstrap');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'SVIMetalDatatable.render';
}

exports.render.params = ["myState","id","tableHeader"];
exports.render.types = {"myState":"any","id":"any","tableHeader":"any"};
templates = exports;
return exports;

});

class SVIMetalDatatable extends Component {}
Soy.register(SVIMetalDatatable, templates);
export { SVIMetalDatatable, templates };
export default templates;
/* jshint ignore:end */
