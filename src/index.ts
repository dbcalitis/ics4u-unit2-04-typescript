/**
 * This is the main code that runs
 * with the MrCoxallStack.
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-13
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

// use MrCoxallStack and promptSync classes
const prompt = promptSync()
const myStack = new MrCoxallStack()

let continueLoop = true

while (continueLoop) {
  console.log("Enter 'q' to exit the loop.")
  let num
  const answer = prompt('Enter action (pop/peek/push/clear): ')

  switch (answer.toLowerCase()) {
    case 'pop':
      console.log(myStack.popItem())
      break
    case 'peek':
      console.log(myStack.peekItem())
      break
    case 'push':
      num = Number(prompt('Enter a number: '))
      myStack.pushItem(num)
      break
    case 'clear':
      myStack.clearStack()
      break
    default:
      if (answer === 'q') {
        continueLoop = false
      } else {
        console.log('Enter a valid action.')
      }
      break
  }
  console.log()
}

console.log('\nDone.')
