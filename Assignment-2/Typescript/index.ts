/**
 *
 * This program finds the largest run
 *
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-04-01
 */

import { createPrompt } from 'bun-promptx'

function maxRun(stringInput) {

  let runCount = 0
  let maxCount = 0

  for (let counter = 0; counter < stringInput.length; counter ++) {
    if (stringInput[counter] === stringInput[counter + 1]) {
      runCount ++
      if (runCount > maxCount) {
        maxCount = runCount
      }
    } else {
      runCount = 1
    }
  }
  return maxCount
}

// get input
let userString: string = createPrompt(`Enter a random string: `)
const stringInput = userString.value

if (stringInput.length == 0) {
  console.log("Invalid Input")
} else {
  let maxVar = maxRun(stringInput)
  console.log(`The max run is ${maxVar}.`)
}

console.log("\nDone.")
