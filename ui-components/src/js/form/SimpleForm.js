'use strict';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './SimpleForm.soy.js';
import myValidators from './validator/commonValidators';
import LoadingAnimator from '../LoadingAnimator/LoadingAnimator.js';


/**
* A simple form for embedding the logger and the LoadingAnimator
**/
class SimpleForm extends Component {

	/**
	 * @constructor
	 * @param {Object=} config
	 * @param {Object=} parent
	**/
	constructor(config, parent) {
		super(config, parent);

		console.log("SimpleForm constructor");
		let loaderParentId = this.id + '-loadingAnimator';
		console.log("loaderParentId=" + loaderParentId)

		let loaderChildId = this.id + 'form-loadingAnimator';
		console.log("LoadingAnimatorChildID=" + loaderChildId);
		this.loadingAnimator = new LoadingAnimator({'id': loaderChildId, 'size': LoadingAnimator.SIZES.L}, '#' + loaderParentId);


		console.log("SimpleForm.loaderButtonText_OFF:" + SimpleForm.loaderButtonText_OFF);
		console.log("SimpleForm.loaderButtonText_ON:" + SimpleForm.loaderButtonText_ON);
	}



/**
 * Enable Submit Button
 * @param  {Object} event
 * @return {void}
 */
	enableSubmitButton(event){
		this.activeSubmit = true;
//		this.table = new Table({id: this.id}, "#" + this.id + "-table");
	}

/**
 * Event for click on the Submit Button
 * @param  {Object} event
 */
	clickSubmit(event){
		event.preventDefault();
		console.log("event %o", event);
		this.showFormLoader()
	}



/**
 * Listener for email Input field
 * @param  {Object} event
 */
	emailChanged(event){
		let myMail = event.target.value
		if(myValidators.isMail(myMail)){
			this.mail = myMail;
			this.mailError = false;
			this.enableSubmitButton();

		}else{
			this.mailError = true
		}


	}
/**
 * Shows the form loader and toggle the disable button
 * @return {void} [description]
 */
	showFormLoader(){
		this.animatorIsHidden=false;
		this.loadingAnimator.showAnimator();
		this.loaderButtonText = SimpleForm.loaderButtonText_OFF;
	}

	/**
	 * Shows the form loader and toggle the disable button
	 * @return {void} [description]
	 */
	hideFormLoader(){
		this.animatorIsHidden=true;
		this.loadingAnimator.hideAnimator();
		this.loaderButtonText = SimpleForm.loaderButtonText_ON;
	}

/**
 * Toggles the Button for the loading animation
 * @return {void} [description]
 */
	toggleLoader(){
		if(this.animatorIsHidden===true){
			this.showFormLoader();
		}else{
			this.hideFormLoader();
		}

	}



}
Soy.register(SimpleForm, templates);

SimpleForm.STATE = {

		id: {value: "default-id"},
		activeSubmit: {
			value: false
		},
		mail:{
			value: "",
			// Accepts either number or string types. If the validator check fails,
		    // the new value is discarded, and the current value kept.
		    // validator: val => myValidators.isMail(val) -> this is shit
		},
		mailError: {value: false },
		mailErrorMsg: {value: "Its not a valid input" },
		loaderButtonText: {value: "Loader: ON"},
		animatorIsHidden: {value: true}

};
SimpleForm.loaderButtonText_ON = "Loader: ON";
SimpleForm.loaderButtonText_OFF = "Loader: OFF";
export default SimpleForm;
