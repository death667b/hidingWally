/* eslint camelcase: 0 */
import csv from 'fast-csv';

import { File } from './file';
import { Dictionary } from './type_dictionary';

/**
 * This static class will provide operations for csv files.
 */
export class CSV {

  /**
   * returns the parsed csv as an object, formatted with column keys.
   * @param  {String} pathname - the path to the file.
   * @return {Promise} (Array) returns an array of objects { column: type }.
   */
  static parseColumnKeys(pathname) {
    return new Promise(resolve => {
      File.readLine(pathname)
        .then(line => {
          const headers = line.split(',');

          resolve(headers.map(header => ({
            [header]: Dictionary.getColumnType(header),
          })));
        })
        .catch(error => { throw error; });
    });
  }

  /**
   * transforms a csv file and returns the new pathname.
   * @param  {String} pathname - the pathname of the original csv
   * @param  {Object} transformer - methods with keys matching the rows
   * @return {String} the pathname to the new file.
   */
  static transformCSV(pathname, transformer) {
    // transforms the stream
    const stream_transform = csv
      .createWriteStream({ headers: true })
      .transform(row => {
        const new_row = {};

        row.keys().forEach(value => {
          new_row.push({ [value]: transformer[value]() });
        });
      });

    // output stream
    const new_file_path = `${pathname}_dus_good.csv`;
    const stream_output = File.readStream(new_file_path);

    // create new csv
    csv
      .fromPath(pathname)
      .pipe(stream_transform)
      .pipe(stream_output);

    return new_file_path;
  }
}
