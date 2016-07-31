import Base from './Base';
import randName from 'node-random-name';

export default class Name extends Base {

  static filters() {
    return {
      'Suppress First Name': Name.suppressFirst,
      'Suppress Last Name': Name.suppressLast,
      'Initialise First Name': Name.trimFirst,
      'Initialise': Name.initials,
      'Generate Random Name': Name.randomise,
      'Generate Random Last Name': Name.randomLastName,
    }
  }

  static getColumnRegex() {
    return new RegExp('name', 'i');
  }

  static isValid(value) {
    const name = new PrivateName(value);
    return name.isValid();
  }

  static suppressFirst(value) {
    const name = new PrivateName(value);
    return `${name.getName().lastname}, ***`;
  }

  static suppressLast(value) {
    const name = new PrivateName(value);
    return `***, ${name.getName().firstname}`;
  }

  static trimFirst(value) {
    const name = new PrivateName(value);
    const proc = name.getName();
    return `${proc.lastname}, ${proc.firstname.substr(0,1)}`;
  }

  static initials(value) {
    const name = new PrivateName(value);
    const proc = name.getName();
    return `${proc.firstname.substr(0,1)}.${proc.lastname.substr(0,1)}`;
  }

  static randomise() {
    // it'd be really, really cool to try and figure out the gender of this person and
    // generate a name that was similar
    const name = randName();
    const nameArray = name.split(' ');
    return `${nameArray[1]}, ${nameArray[0]}`;
  }

  static randomLastName(value) {
    const name = new PrivateName(value);
    const randomLast = randName({ last: true });
    return `${randomLast}, ${name.getName().firstname}`;
  }
}

class PrivateName {

  constructor(string) {
    this._raw = string;
    this.processRaw();
  }

  isValid() {
    return (this.name.length > 1);
  }

  processRaw() {
    this.name = this._raw.split(', ');
    this.lastname = this.name[0];
    this.firstname = this.name[1];
  }

  getName() {
    return {
      lastname,
      firstname,
    }
  }

}