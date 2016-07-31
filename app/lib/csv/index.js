/* eslint camelcase: 0 */
import csv from 'fast-csv';

import { File } from '../file';
import { Dictionary } from '../Dictionary';
import fs from 'fs';

import { types } from '../types';

/**
 * This static class will provide operations for csv files.
 */
export class CSV {


  /**
   * transforms a csv file and returns the new pathname.
   * @param  {String} pathname - the pathname of the original csv
   * @param  {Object} transformer - methods with keys matching the rows
   * @return {String} the pathname to the new file.
   */
  static transformCSV(pathname, transformer) {
    return new Promise(resolve => {

      // output stream
      const new_file_path = `${pathname}_dus_good.csv`;
      const stream_output = fs.createWriteStream(new_file_path, {encoding: "utf8"});
      // create new csv
      const stream = csv
        .fromPath(pathname, { headers: true, objectMode: true })
        .transform(row => {
          const newRow = {};
          console.log(row);
          Object.keys(row).forEach(colName => {
            console.log(colName);
            newRow[colName] = transformer[colName.trim()](row[colName]);
            console.log(newRow[colName]);
          });
          return newRow;
        })
        .pipe(csv.createWriteStream({ headers: true, objectMode: true }))
        .pipe(stream_output);

      stream.on('finish', () => {
        resolve(new_file_path);
      })
    })

  }


  /**
   * returns the parsed csv as an object, formatted with column keys.
   * @param  {String} pathname - the path to the file.
   * @return {Promise} (Array) returns an array of objects { column: type }.
   */
  static parseColumnKeys(pathname) {
    return File.readFirst(pathname)
      .then(line => {
        const headers = line.split(',');
        return headers.map(header => ({
            header,
            transforms: Dictionary.getColumnType(header)
        }));
      })
  }

  /**
   * helper method: returns a transformer object for used by
   * the transform function.
   * @param  {Array} selectors - set of objects used to select
   * transform funcitons.
   * @param  {Object} types - set of type classes.
   * @return {Object} a set of column identified transform functions.
   */
  static createTransformer(selectors, types) {
    const transformer = {}

    selectors.forEach(selector => {
      transformer[selector.column] = types[selector.type]
        .filters()[selector.method]
    })

    return transformer;
  }

}
