/**
 *
 * This program uses stacks
 *
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-19
 */

import TheStack from './stack'

const treatsStack = new TheStack()
treatsStack.push('chocolate')
treatsStack.push('chips')
treatsStack.push('candy')
console.log(`Snacks: ${treatsStack.showStack()}`)

// pop last item
let removedTreat = treatsStack.pop()
console.log(`Popped treats: ${removedTreat}`)
// show updated stack
console.log(`Snacks: ${treatsStack.showStack()}\n`)

const numberStack = new TheStack()
numberStack.push('one')
numberStack.push('two')
numberStack.push('three')
console.log(`Numbers: ${numberStack.showStack()}`)

// pop last item
let removedNumber = numberStack.pop()
console.log(`Popped number: ${removedNumber}`)
// show updated stack
console.log(`Numbers: ${numberStack.showStack()}`)

const fruitStack = new TheStack()
fruitStack.push('apple')
fruitStack.push('tomato')
fruitStack.push('orange')
console.log(`\nFruits: ${fruitStack.showStack()}`)

// pop last item
let removedFruit = fruitStack.pop()
console.log(`Popped fruit: ${removedFruit}`)
// show updated stack
console.log(`Fruits: ${fruitStack.showStack()}`)
