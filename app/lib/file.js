/* eslint no-unused-expressions: 0 */
import fs from 'fs';

/**
 * This static class will provice a nice symantical implementation
 * to operate on files.
 */
export class File {

  /**
   * Reads a line from file.
   * @param  {String} pathname - path to the file.
   * @return {String} the line of the file.
   */
  static readLine(pathname) {
    return new Promise(resolve => {
      const stream = fs.createReadStream(pathname, { encoding: 'utf8' });
      let [line, position] = ['', 0];

      stream
        .on('data', character => {
          line += character;
          character === '\n' ?
            stream.close() : position += character.length;
        })
        .on('close', () => resolve(line.slice()))
        .on('error', error => { throw error; });
    });
  }
}
