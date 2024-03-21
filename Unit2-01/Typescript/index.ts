/**
 *
 * This program uses stacks
 *
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-19
 */

import TheStack from './stack'

let treatsStack = new TheStack()
let numberStack = new TheStack()

treatsStack.push('chocolate')
treatsStack.push('chips')
treatsStack.push('candy')

numberStack.push('one')
numberStack.push('two')
numberStack.push('three')

console.log(`Treats: ${treatsStack}`)
console.log(`Numbers: ${numberStack}`)
