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
        .on('close', () => resolve(line.slice(0, position - 1)))
        .on('error', error => { throw error; });
    });
  }

  /**
   * returns a file read stream
   * @param  {[type]} pathname [description]
   * @return {ReadStream} a readable stream (see node ReadStream)
   */
  static readStream(pathname) {
    return fs.createReadStream(pathname, { encoding: 'utf8' });
  }
}
