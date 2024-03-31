<<<<<<< HEAD
/**
 *
 * This program uses stacks
 *
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-19
 */

class Stack {
  // create stack as list
  stackList: string[]

  push(pushedString: string): void {
=======
/** 
 * This program defines a stack
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-03
 */

class Stack {
  //create stack as list
  private stackList: string[]

  constructor() {
    this.stackList = []
  }

  public push(pushedString: string): void {
>>>>>>> bce3f5957b3a20bea1a9637bdb7e8146efae4dff
    // push the value onto the stack
    this.stackList.push(pushedString)
  }

<<<<<<< HEAD
  showStack(): string {
    // return the stack
=======
  // getters
  public showStack(): string {
  // return the stack
>>>>>>> bce3f5957b3a20bea1a9637bdb7e8146efae4dff
    let stackValues: string = ""

    for (const value of this.stackList) {
      stackValues += value + ", "
    }
    stackValues = stackValues.slice(0, -2) // Remove the trailing comma

    return stackValues
  }
<<<<<<< HEAD
}

  pop(poppedString: string): void {
    // pop value from stack
    returnvalue = ""

  }
=======
  // methods
  public pop(): string {
    let remove = ""
    if (this.stackList.length > 0) {
      // splice (last item, delete x amount)
      remove =  this.stackList.splice(-1, 1)
    } else {
      remove = "Stack Empty."
      }
    return remove
  }
}
>>>>>>> bce3f5957b3a20bea1a9637bdb7e8146efae4dff

// Export the class
export default Stack;
