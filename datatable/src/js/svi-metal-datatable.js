/**
 * The soy template functions are automatically exported by `Modal.soy.js`.
 */
import templates from './svi-metal-datatable.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Grid} from 'ag-grid/main';
import '../styles/svi-metal-datatable.scss';

/**
 *
 */
class Datatable extends Component {
  /**
   * @constructor
   * @param {Object=} config
   * @param {Object=} parent
  **/
  constructor(config, parent) {
    super(config, parent);
    console.log('id=' + this.id);
    this.tableDiv = document.getElementById(this.id + '-myDataTable');
    console.log('tableDIV=' + this.tableDiv);
    this.gridOptions = {
      columnDefs: this._createColumnDefs(),
      rowData: this._createRowData(),
    };

    this.grid = new Grid(this.tableDiv, this.gridOptions);
  }

  /**
   * @return {Object}
   */
  _createColumnDefs() {
    return [
      {
        headerName: 'Make',
        field: 'make',
      },
      {
        headerName: 'Model',
        field: 'model',
      },
      {
        headerName: 'Price',
        field: 'price',
      },
    ];
  }

  /**
   * @return {Object}
   */
  _createRowData() {
    return [
      {
        make: 'Toyota',
        model: 'Celica',
        price: 35000,
      },
      {
        make: 'Ford',
        model: 'Mondeo',
        price: 32000,
      },
      {
        make: 'Porsche',
        model: 'Boxter',
        price: 72000,
      },
    ];
  }

  /**
   *
   */
  changeState() {
    console.log('stage changed' + this.myState);
    this.myState = this.myState + 1;
  }

  /**
   * This function is used as a listener by the soy file.
   *
   * @param {!Event} event
   */
  hide() {
    // All Metal.js components already have a `visible` state which
    // sets the
    // main element's `display` to "none" when set to false.
    this.visible = false;
  }

  /**
   *
   */
  sortFruits() {
    // this.fruits = this.fruits.sort;
    this.fruits.sort();
    console.log('sorted to ' + this.fruits);
  }
}

/**
 *
 */
Datatable.STATE = {
  fruits: {
    value: ['Banana', 'Apple', 'Mango'],
  },
  tableHeader: {},
  tableDiv: {},
  gridOptions: {},
  grid: {},
  myState: {
    value: 0,
  },
  id: {
    value: 'test',
  },
};
// This line is declaring that `Modal` will be using the given soy templates for
// rendering itself.
Soy.register(Datatable, templates);

export default Datatable;
