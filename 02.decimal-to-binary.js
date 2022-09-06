import { Stack } from './01.stack.js'

export function decToBin(decNumber) {
  const stack = new Stack()
  while(decNumber > 0) {
    stack.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }
  let binaryString = ''
  while(!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  
  return binaryString
}
