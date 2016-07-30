import { Base } from './Base.js';

export class ParseAge extends Base {

  static isValid(value) {
    return !!(typeof value === 'number' && value >= 0);
  }

  static filters() {
    return {
      'Generalise Age': ParseAge.generaliseAge,
      'Random Age': ParseAge.randomAge,
      'Round to nearest number': ParseAge.roundToNearestN,
    };
  }

  /**
   * Anonymises ages by generalising ages into ranges; e.g. range of 9
   * would return ages 0-9, 10-19, 20-29...
   *
   * @param age {number} age as an integer >= 0
   * @param range {number} range as a positive integer
   * @returns {string}
   */
  static generaliseAge(age, range) {
    const minAgeBucket = parseInt((age / 10), 10) * 10;
    const maxAgeBucket = minAgeBucket + range;

    return `${minAgeBucket}-${maxAgeBucket}`;
  }

  /**
   * Generates a random age within a range from the given age
   *
   * @param age {number} age as an integer >= 0
   * @param range {number} range as a positive integer
   * @returns {number}
   */
  static randomAge(age, range) {
    const rangeMin = age - range;
    const rangeMax = age + range;

    return Math.floor(Math.random() * (rangeMax - rangeMin) + rangeMin);
  }

  /**
   * Rounds age to the nearest given number
   *
   * @param age {number} age as an integer >= 0
   * @param n {number} n as a positive integer
   * @returns {number}
   */
  static roundToNearestN(age, n) {
    let result = age + n / 2;
    result -= result % n;

    return result;
  }

}







