'use strict';
import metalTreeview from 'metal-treeview/lib/Treeview.js'


/**
 * General Treeview component 
 */
class Treeview extends metalTreeview{
  
  
  /**
   * @constructor
   * @param {Object=} config
   * @param {Object=} parent
  **/
  constructor(config, parent) {
    super(config, parent);

    console.log("Treeview constructor");
   

  }
  
}

export default Treeview;