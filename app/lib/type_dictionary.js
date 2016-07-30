/**
 * This file contains:
 * 	- a dictionary definition containing regex that will identify column types
 * 	based on their column.
 *
 *  - a function which does how we decide to identify the columns
 *  TODO --- Identify this
 */

/**
 * Contains all regex matches to defined types
 * WARNING: Ideally we will keep these as specific and safe as possible.
 * @type {Object}
 */
const type_dictionary = {
  id: /id$/i,
  age: /age/i,
  date: /date|year|time/i,
  address: /place|address|location|post.*code$/i,
  name: /name/i,
};

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
    type_dictionary.keys().forEach(key => {
      if (columnKey.match(type_dictionary[key])) {
        matches.push(key);
      }
    });

    return matches;
  }
}
