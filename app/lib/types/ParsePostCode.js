import { Base } from './Base';

export default class ParsePostCode extends Base {

  static filters() {
    return {
      'Obscure Post Code by 1': ParsePostCode.obscurePostCodeOne,
      'Obscure Post Code by 2': ParsePostCode.obscurePostCodeTwo,
      'Obscure Post Code by 3': ParsePostCode.obscurePostCodeThree,
      'Obscure Entire Post Code': ParsePostCode.obscurePostCodeFour,
    };
  }

  static getColumnRegex() {
    return new RegExp('post.*code', 'i');
  }

  static obscurePostCodeOne(postCode) {
    return ParsePostCode.generalisePostCode(postCode, 1);
  }

  static obscurePostCodeTwo(postCode) {
    return ParsePostCode.generalisePostCode(postCode, 2);
  }

  static obscurePostCodeThree(postCode) {
    return ParsePostCode.generalisePostCode(postCode, 3);
  }

  static obscurePostCodeFour(postCode) {
    return ParsePostCode.generalisePostCode(postCode, 4);
  }

  static isValid(value) {
    const postCodeTest = /^[0-9]{4}$/;
    return postCodeTest.test(value);
  }

  /**
   *  Truncates the given number of digits from the postcode.
   *
   * @param {String} postCode
   * @param {number} n A value from 1 to 3 which determines the number of
   *                   postCode digits to be stripped
   * @returns {String}
   */
  static generalisePostCode(postCode, n) {
    let postCodeString = '';

    if (n > 0) {
      postCodeString = postCode.toString().slice(0, -n);
      postCodeString = postCodeString.concat('0'.repeat(n));
    } else {
      postCodeString = postCode;
    }
    return postCodeString;
  }

}
