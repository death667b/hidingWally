export default class Base {

  static filters() {
    return {
      'Suppress': Base.suppress,
      'Do nothing': Base.doNothing,
    };
  }

  static getColumnRegex() {
    return new RegExp('.*');
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