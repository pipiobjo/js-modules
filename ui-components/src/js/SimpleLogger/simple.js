
/**
*
**/
class Simple {

  /**
   * @constructor
  **/
  constructor() {

    console.log("SimpleLogger constructor");

  }

/**
 * print default message
 * @return {void}
 */
  print(){
	console.log("SimpleLogger: print from simple ES6 Module");
  }

/**
 * Prints your msg
 * @param  {String} msg simple message
 * @return {void}
 */
  printMsg(msg){
    console.log("SimpleLogger: " + msg);
  }
}


export default Simple;
