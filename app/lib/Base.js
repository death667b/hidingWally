class Base {

  static filters() {
    return {
      suppress: suppress,
      doNothing: doNothing
    };
  }

  static isValid(value) {
    // Base class can process everything
    return true;
  }

  static suppress(value) {
    return '*****';
  }

  static doNothing(value) {
    return value;
  }

}