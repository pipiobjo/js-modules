import Component from 'metal-component';
// import core from 'metal/src/core';
// import dom from 'metal-dom/src/dom';
import Soy from 'metal-soy/src/Soy';


// import Component from 'metal-component';
// import Soy from 'metal-soy/src/Soy';
import templates from './LoadingAnimator2.soy.js';
import './LoadingAnimator2.scss';

/**
 * Generic Loading Animator Component
 * You can use it in the following configurations
 * <ul>
 * <li>XS</li>
 * <li>S</li>
 * <li>MEDIUM</li>
 * <li>LARGE</li>
 * <li>XL</li>
 * </ul>
 * 
 * This sizes should be mapped on different css classes which handle the correct layout
 * 
 * 
 */
class LoadingAnimator2 extends Component{
  
  /**
   * @constructor
   * @param {Object=} config
   * @param {Object=} parent
  **/
  constructor(config, parent) {
    super(config, parent);
    
    console.log("LoadingAnimator constructor");
    let argSize = config.size;
    
    if (Object.values(LoadingAnimator2.SIZES).indexOf(argSize) > -1) {
      console.log('has argSize');
      this.cssClass=LoadingAnimator2.cssSizeClassPrefix + argSize;
    }else{
      throw new Error("Invalid Configuration")
    }
    
  }
  
  /**
   * activates the loading animation
   */
  showAnimator(){
    this.show = true;
  }
  
  /**
   * deactivates the loading animation
   */
  hideAnimator(){
    this.show = false;
  }
}
 

Soy.register(LoadingAnimator2, templates);

/**
*
*/
LoadingAnimator2.STATE = {
 show: false,
 cssClass: {
   value: "loading-animation loading-animation-medium"
 },
 id: {
   value: 'svi.id-portal.ui-components.loadingAnimator',
 },
};

/**
* Define supported sizes
*/
LoadingAnimator2.SIZES = {
      "XS": "xs",
      "S": "small",
      "M": "medium",
      "L": "large",
      "XL": "xl"
};


/**
* Constant for all css size class
*/
LoadingAnimator2.cssSizeClassPrefix = 'loading-animation loading-animation-';

export default LoadingAnimator2;
