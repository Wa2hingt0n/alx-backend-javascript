// Defines a function that returns an array of objects
export default function getListStudents() {
  class Person {
    constructor(id, name, location) {
      this.id = id;
      this.name = name;
      this.location = location;
    }
  }
  const person1 = new Person(1, 'Guillaume', 'San Francisco');
  const person2 = new Person(2, 'James', 'Columbia');
  const person3 = new Person(5, 'Serena', 'San Francisco');

  const arr = [];
  const perArr = [person1, person2, person3];
  for (const per of perArr) {
    arr.push({
      id: per.id,
      firstName: per.name,
      location: per.location,
    });
  }

  return arr;
}
