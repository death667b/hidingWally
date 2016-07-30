import { Base } from './Base';

export default class PostCode extends Base {

  static isValid(value) {
    const postCodeTest = /^[0-9]{4}$/;
    return postCodeTest.test(value);
  }

  static filters() {
    return {
      'Generalise Post Code': PostCode.generalisePostCode,
    };
  }

  /**
   *  Truncates the given number of digits from the postcode.
   *
   * @param postCode
   * @param n {number} A value from 1 to 3 which determines the number of
   *                   postCode digits to be stripped
   * @returns {number}
   */
  static generalisePostCode(postCode, n) {
    let postCodeString = '';
    let postCodeValue = 0;

    if (n > 0) {
      postCodeString = postCode.toString().slice(0, -n);
      postCodeString = postCodeString.concat('0'.repeat(n));
      postCodeValue = parseInt(postCodeString, 10);
    } else {
      postCodeValue = postCode;
    }

    return postCodeValue;
  }

}
