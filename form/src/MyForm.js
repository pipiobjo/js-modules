'use strict';

import templates from './Form.soy';
import myValidators from './validator/commonValidators'
import Component from 'metal-component';
import Soy from 'metal-soy';
import Table from 'svi-metal-datatable/src/svi-metal-datatable.js';

class MyForm extends Component {
	
    
	enableSubmitButton(){
		this.activeSubmit = true;
		this.table = new Table({id: this.id}, "#" + this.id + "-table");
	}
	
	clickSubmit(event){
		evt.preventDefault();
		console.log("table")
		

	}
	
	
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

}
Soy.register(MyForm, templates);

MyForm.STATE = {
		
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
		mailErrorMsg: {value: "Bitte Feld korrekt ausfüllen" }
		
};

export default MyForm;
