/** 
 * This program defines a stack
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-03
 */

class Stack {
  //create stack as list
  stackList: string[]

  constructor() {
    this.stackList = []
  }

  push(pushedString: string): void {
    // push the value onto the stack
    this.stackList.push(pushedString)
  }

  showStack(): string {
    // return the stack
    let stackValues: string = ""

    for (const value of this.stackList) {
      stackValues += value + ", "
    }
    stackValues = stackValues.slice(0, -2) // Remove the trailing comma

    return stackValues
  }
}

// Export the class
export default Stack;