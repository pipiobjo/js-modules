/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from MyForm.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MyForm.
 * @public
 */

goog.module('MyForm.incrementaldom');

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
      'class', 'container');
    ie_open('div', null, null,
        'class', 'container-fluid');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'class', 'col-md-6 col-sm-6 col-xs-12');
          ie_open('form', null, null,
              'method', 'post');
            ie_open('div', null, null,
                'class', 'form-group ');
              ie_open('label', null, null,
                  'class', 'control-label ',
                  'for', 'name');
                itext(' Name ');
              ie_close('label');
              itext(' ');
              ie_open('input', null, null,
                  'class', 'form-control',
                  'id', 'name',
                  'name', 'name',
                  'type', 'text');
              ie_close('input');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'form-group ' + (opt_data.mailError ? 'has-error' : ''));
              ie_open('label', null, null,
                  'class', 'control-label requiredField',
                  'for', 'email');
                itext('Email ');
                ie_open('span', null, null,
                    'class', 'asteriskField');
                  itext(' * ');
                ie_close('span');
              ie_close('label');
              ie_open('input', null, null,
                  'data-onfocusout', 'emailChanged',
                  'class', 'form-control',
                  'id', 'email',
                  'name', 'email',
                  'type', 'text',
                  'placeholder', 'test@liferay.com',
                  'value', opt_data.mail);
              ie_close('input');
              ie_open('label', null, null,
                  'id', 'email-warning',
                  'class', opt_data.mailError ? 'text-danger' : '',
                  'for', 'email',
                  'style', 'display: inline-block;');
                var dyn2 = opt_data.mailError ? opt_data.mailErrorMsg : '';
                if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
              ie_close('label');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'form-group ');
              ie_open('label', null, null,
                  'class', 'control-label ',
                  'for', 'number');
                itext(' Number ');
              ie_close('label');
              itext(' ');
              ie_open('input', null, null,
                  'class', 'form-control',
                  'id', 'number',
                  'name', 'number',
                  'type', 'text');
              ie_close('input');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'form-group ');
              ie_open('label', null, null,
                  'class', 'control-label ',
                  'for', 'date');
                itext(' Date ');
              ie_close('label');
              itext(' ');
              ie_open('input', null, null,
                  'class', 'form-control',
                  'id', 'date',
                  'name', 'date',
                  'placeholder', 'MM/DD/YYYY',
                  'type', 'text');
              ie_close('input');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'form-group');
              ie_open('div');
                ie_open('button', null, null,
                    'class', 'btn btn-primary ' + (opt_data.activeSubmit ? '' : 'disabled'),
                    'data-onClick', 'clickSubmit',
                    'name', 'submit',
                    'type', 'submit');
                  itext('Submit');
                ie_close('button');
              ie_close('div');
            ie_close('div');
          ie_close('form');
        ie_close('div');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'MyForm.render';
}

exports.render.params = ["mail","mailError","mailErrorMsg","activeSubmit"];
exports.render.types = {"mail":"any","mailError":"any","mailErrorMsg":"any","activeSubmit":"any"};
templates = exports;
return exports;

});

class MyForm extends Component {}
Soy.register(MyForm, templates);
export { MyForm, templates };
export default templates;
/* jshint ignore:end */
