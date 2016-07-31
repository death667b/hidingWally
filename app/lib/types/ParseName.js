import Base from './Base';
import randName from 'node-random-name';

export default class ParseName extends Base {

  static filters() {
    return {
      'Suppress First Name': ParseName.suppressFirst,
      'Suppress Last Name': ParseName.suppressLast,
      'Initialise First Name': ParseName.trimFirst,
      'Initialise Full Name': ParseName.initials,
      'Generate Random Name': ParseName.randomise,
      'Generate Random Last Name': ParseName.randomLastName,
    }
  }

  static getColumnRegex() {
    return new RegExp('name|surname', 'i');
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

    // It would, but wouldn't that require some machine learning shit?
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
    if (this._raw.indexOf(',') > -1) {
      // this is a comma separated name
      this.name = this._raw.split(', ');
      this.lastname = this.name[0];
      this.firstname = this.name[1];
    } else {
      // split on the space
      // everything before is a first name (first chunk)
      // everything after is a last name
      this.name = this._raw.split(' ');
      this.firstname = this.name[0];
      this.lastname = this.name[1];
    }

  }

  getName() {
    return {
      lastname: this.lastname,
      firstname: this.firstname,
    }
  }

}