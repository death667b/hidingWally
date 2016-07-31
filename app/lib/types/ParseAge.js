import { Base } from './Base.js';

export default class ParseAge extends Base {

  static filters() {
    return {
      'Generalise Age by 5 years': ParseAge.generaliseAgeFiveYears,
      'Generalise Age by 10 years': ParseAge.generaliseAgeTenYears,
      'Random Age +- 5 Years': ParseAge.randomizeAgeFiveYears,
      'Random Age +- 10 Years': ParseAge.randomizeAgeTenYears,
      'Random Age +- 20 Years': ParseAge.randomizeAgeTwentyYears,
      'Round to nearest 5 years': ParseAge.roundAgeToNearestFive,
      'Round to nearest 10 years': ParseAge.roundAgeToNearestTen,
      'Round to nearest 20 years': ParseAge.roundAgeToNearestTwenty,
    }
  }

  static generaliseAgeFiveYears(age){
    return ParseAge.generaliseAge(age, 5);
  }

  static generaliseAgeTenYears(age){
    return ParseAge.generaliseAge(age, 10);
  }

  static randomizeAgeFiveYears(age){
    return ParseAge.randomAge(age, 5);
  }

  static randomizeAgeTenYears(age){
    return ParseAge.randomAge(age, 10);
  }

  static randomizeAgeTwentyYears(age){
    return ParseAge.randomAge(age, 20);
  }

  static roundAgeToNearestFive(age){
    return ParseAge.roundToNearestN(age, 5);
  }

  static roundAgeToNearestTen(age){
    return ParseAge.roundToNearestN(age, 10);
  }

  static roundAgeToNearestTwenty(age){
    return ParseAge.roundToNearestN(age, 20);
  }

  static isValid(value) {
    const postCodeTest = /^[0-9]*$/;
    return postCodeTest.test(value);
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
    if (!isValid(age)){
      return "";
    }

    const minAgeBucket = (parseInt((age / range), 10) * range);
    const maxAgeBucket = minAgeBucket + (range - 1);

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
    if (!isValid(age)){
      return "";
    }
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
    if (!isValid(age)){
      return "";
    }
    
    let result = age + n / 2;
    result -= result % n;

    return result;
  }

}







