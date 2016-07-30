// import fastCSV from 'fast-csv';

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
      return File.readLine(pathname)
        .then(line => {
          const headers = line.split(',');

          return headers.map(header => ({
            [header]: Dictionary.getColumnType(header),
          }));
        })
  }
}
