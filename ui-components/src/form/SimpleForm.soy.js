/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from SimpleForm.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SimpleForm.
 * @public
 */

goog.module('SimpleForm.incrementaldom');

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
      incrementalDom.attr('id', opt_data.id + '-form-container');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'container-fluid');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'row');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'col-md-6 col-sm-6 col-xs-12');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('form');
              incrementalDom.attr('method', 'post');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'form-group ');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('label');
                  incrementalDom.attr('class', 'control-label ');
                  incrementalDom.attr('for', 'name');
              incrementalDom.elementOpenEnd();
                incrementalDom.text(' Name ');
              incrementalDom.elementClose('label');
              incrementalDom.text(' ');
              incrementalDom.elementOpenStart('input');
                  incrementalDom.attr('class', 'form-control');
                  incrementalDom.attr('id', 'name');
                  incrementalDom.attr('name', 'name');
                  incrementalDom.attr('type', 'text');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('input');
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'form-group ' + (opt_data.mailError ? 'has-error' : ''));
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('label');
                  incrementalDom.attr('class', 'control-label requiredField');
                  incrementalDom.attr('for', 'email');
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Email ');
                incrementalDom.elementOpenStart('span');
                    incrementalDom.attr('class', 'asteriskField');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text(' * ');
                incrementalDom.elementClose('span');
              incrementalDom.elementClose('label');
              incrementalDom.elementOpenStart('input');
                  incrementalDom.attr('data-onfocusout', 'emailChanged');
                  incrementalDom.attr('class', 'form-control');
                  incrementalDom.attr('id', 'email');
                  incrementalDom.attr('name', 'email');
                  incrementalDom.attr('type', 'text');
                  incrementalDom.attr('placeholder', 'test@liferay.com');
                  incrementalDom.attr('value', opt_data.mail);
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('input');
              incrementalDom.elementOpenStart('label');
                  incrementalDom.attr('id', 'email-warning');
                  incrementalDom.attr('class', opt_data.mailError ? 'text-danger' : '');
                  incrementalDom.attr('for', 'email');
                  incrementalDom.attr('style', 'display: inline-block;');
              incrementalDom.elementOpenEnd();
                soyIdom.print(opt_data.mailError ? opt_data.mailErrorMsg : '');
              incrementalDom.elementClose('label');
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'form-group ');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('label');
                  incrementalDom.attr('class', 'control-label ');
                  incrementalDom.attr('for', 'number');
              incrementalDom.elementOpenEnd();
                incrementalDom.text(' Number ');
              incrementalDom.elementClose('label');
              incrementalDom.text(' ');
              incrementalDom.elementOpenStart('input');
                  incrementalDom.attr('class', 'form-control');
                  incrementalDom.attr('id', 'number');
                  incrementalDom.attr('name', 'number');
                  incrementalDom.attr('type', 'text');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('input');
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'form-group ');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('label');
                  incrementalDom.attr('class', 'control-label ');
                  incrementalDom.attr('for', 'date');
              incrementalDom.elementOpenEnd();
                incrementalDom.text(' Date ');
              incrementalDom.elementClose('label');
              incrementalDom.text(' ');
              incrementalDom.elementOpenStart('input');
                  incrementalDom.attr('class', 'form-control');
                  incrementalDom.attr('id', 'date');
                  incrementalDom.attr('name', 'date');
                  incrementalDom.attr('placeholder', 'MM/DD/YYYY');
                  incrementalDom.attr('type', 'text');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('input');
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'form-group');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpen('div');
                incrementalDom.elementOpenStart('button');
                    incrementalDom.attr('class', 'btn btn-primary ' + (opt_data.activeSubmit ? '' : 'disabled'));
                    incrementalDom.attr('data-onClick', 'clickSubmit');
                    incrementalDom.attr('name', 'submit');
                    incrementalDom.attr('type', 'submit');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('Submit');
                incrementalDom.elementClose('button');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('form');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', opt_data.id + '-table');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'SimpleForm.render';
}

exports.render.params = ["id","mail","mailError","mailErrorMsg","activeSubmit"];
exports.render.types = {"id":"any","mail":"any","mailError":"any","mailErrorMsg":"any","activeSubmit":"any"};
templates = exports;
return exports;

});

class SimpleForm extends Component {}
Soy.register(SimpleForm, templates);
export { SimpleForm, templates };
export default templates;
/* jshint ignore:end */
