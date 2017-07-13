// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: '../',
    paths: {
        app: 'build/globals'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
//requirejs(['app/modal']);

requirejs(['app/modal'], function(modal){
	window.myForm = new metal.MyForm();
	
});



//
requirejs(['react'], function(){
	var React = require('react');
	var MyMain = React.createFactory(Main);
	ReactDOM.render(MyMain({}),
	  document.getElementById('main'));
	
});
//
//requirejs(['orb'], function(){
//	
//	let orb = require('orb');
//	
//});