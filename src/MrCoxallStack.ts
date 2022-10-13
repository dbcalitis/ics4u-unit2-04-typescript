/**
 * MrCoxallStack Class
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-13
 */

class MrCoxallStack {
  private readonly stack: number[] = []

  // getter
  getStack(): number[] {
    return this.stack
  }

  // pushItem - Adds a new item in stack array.
  pushItem(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  // popItem - Returns and removes the last item from the stack array.
  popItem(): number | undefined | string {
    if (this.stack.length !== 0) {
      return this.stack.pop()
    } else {
      return 'No items to pop in the stack.'
    }
  }

  // peekItem - returns teh last item from the stack array.
  peekItem(): number | undefined | string {
    if (this.stack.length !== 0) {
      return this.stack[this.stack.length - 1]
    } else {
      return 'No items to pop in the stack.'
    }
  }

  clearStack(): void {
    this.stack.length = 0
  }
}

export = MrCoxallStack
