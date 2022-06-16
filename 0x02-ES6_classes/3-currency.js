// Defines and implements a class Currency
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // code getter
  get code() {
    return this._code;
  }

  // code setter
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Function that returns the attributes
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
