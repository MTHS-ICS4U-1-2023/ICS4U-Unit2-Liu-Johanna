/** 
 * This program defines a stack
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-03
 */

class Stack {
  //create stack as list
  stackList: string[]

  contructor() {
    this.stackList = []
  }

  push(pushedString: string): void {
    //push value in stack
    this.stackList.push(pushedString)
  }

  showStack(): string {
    let stackValue: string = ""

    for (const value of this.stackAsList) {
      stackValue += value + ", "
    }
    stackValues = stackValues.slice(0, -1)

    return stackValues
  }
}

// Export the class
export default Stack;
