export class Base {

  static filters() {
    return {
      'Suppress': suppress,
      'Do nothing': doNothing,
    };
  }

  static getColumnRegex() {
    return new RegExp('*');
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