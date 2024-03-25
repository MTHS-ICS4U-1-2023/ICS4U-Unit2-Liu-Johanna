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

const numberStack = new TheStack()
numberStack.push('one')
numberStack.push('two')
numberStack.push('three')

console.log(`Treats: ${treatsStack.showStack()}`)
console.log(`Numbers: ${numberStack.showStack()}`)
