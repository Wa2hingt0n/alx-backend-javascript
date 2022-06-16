export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = n;
  }

  // length getter
  get length() {
    return this._length;
  }

  // length setter
  set length(l) {
    if (typeof l !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = l;
  }

  // students getter
  get students() {
    return this._students;
  }

  // students setter
  set students(s) {
    if (!(s instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = s;
  }
}
