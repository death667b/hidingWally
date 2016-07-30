class Name extends Base {

  static isValid(value) {
    if (typeof value === 'string') {
      return true;
    }
  }

  // i don't need to touch the suppress or doNothing methods
  // they extend
}