
'use strict';

/**
 * A collection of core utility functions.
 * 
 * @const
 */
class commonValidators {
	
	/**
	 * Returns true if the specified value is a valid mail.
	 * 
	 * @param {?}
	 *            val Variable to test.
	 * @return {boolean} Whether variable is a mail.
	 */
	static isMail(val) {
		var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        if (filter.test(val))
            return true
        else {
            console.log("Please input a valid email address!")
//            throw new Error("Invalid Mail")
            return false;
        }
	}

}
export default commonValidators;