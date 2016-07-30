/**
 * This file contains:
 * 	- a dictionary definition containing regex that will identify column types
 * 	based on their column.
 *
 *  - a function which does how we decide to identify the columns
 *  TODO --- Identify this
 */
import { types } from './types';

/**
 * Contains all methods that use the dictionary.
 */
export class Dictionary {

  /**
   * returns an array  match on column type, or null. TODO --- better define
   * @param  {String} columnKey the column key to be typed.
   * @return {String} the column type identified.
   */
  static getColumnType(columnKey) {
    const matches = [];

    // cycle through dictionary keys. test for match. push matches.
    types.keys().forEach(type => {
      if (type.getColumnRegex().test(columnKey)) {
        matches.push(key);
      }
    });

    return matches;
  }
}
