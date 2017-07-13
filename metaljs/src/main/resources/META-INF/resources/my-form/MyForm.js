'use strict';

import templates from './MyForm.soy';
import myValidators from '../validator/commonValidators'
import Component from 'metal-component';
import Soy from 'metal-soy';
//import React from "react";
//import ReactDOM from 'react-dom';

class MyForm extends Component {
	
    
	enableSubmitButton(){
		this.activeSubmit = true
	}
	
	clickSubmit(){
		
		console.log("React")
//		ReactDOM.render((
//			    <Main/>
//			), document.getElementById('main'));

	}
	
	
	emailChanged(event){
		let myMail = event.target.value
		if(myValidators.isMail(myMail)){
			this.mail = myMail;
			this.mailError = false;
			
		}else{
			this.mailError = true
		}
		
		this.enableSubmitButton();
	}

}
Soy.register(MyForm, templates);

MyForm.STATE = {
		
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
		mailErrorMsg: {value: "Bitte Feld korrekt ausfüllen" }
		
};

export default MyForm;
