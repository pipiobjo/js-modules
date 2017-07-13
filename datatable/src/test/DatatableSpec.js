

import Datatable from '../js/svi-metal-datatable.js';
// testing the logic of the component
describe('DatatableFunctions', function() {
	it('should test the component units', function() {
		var component = new Datatable({
			id: 1
		});

		component.changeState();
		expect(1).toEqual(component.myState);
		component.changeState();

		expect(2).toEqual(component.myState);
		component.sortFruits();
		expect("Apple").toEqual(component.fruits[0]);
	});
});

// testing the render method
describe('DatatableRendering', function() {
	it('should render the body and test the ui parts', function() {
		var component = new Datatable({
			tableHeader: 'asd'
		});
		var bodyElement = component.element.querySelector('.table-header');
		//assert.ok(bodyElement);
		expect('asd').toEqual(bodyElement.textContent);
	});
});
