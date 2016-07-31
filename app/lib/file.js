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
  static readFirst(pathname) {
    const chars = [];
    return new Promise(resolve => {
      const stream = fs.createReadStream(pathname, { encoding: 'utf8' });
      stream
        .on('readable', () => {
          do {
            char = stream.read(1);
            chars.push(char);
          } while (char !== '\n');
          stream.close();
        })
        .on('close', () => {
          const firstLine = chars.join('').split('\n')[0].trim();
          console.log('line is', firstLine);
          resolve(firstLine);
        })
        .on('error', error => { throw error; });
    });
  }


  static readFile(pathname) {
     return new Promise(resolve => {
      const stream = fs.createReadStream(pathname, { encoding: 'utf8' });
      let [line, position] = ['', 0];

      stream
        .on('data', () => {
          let line = ''
          do {
            char = stream.read(1);
            line += char;
          } while (char !== '\n');
          stream.close();
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
