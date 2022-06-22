interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  location: 'Nakuru',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  location: 'Isiolo',
};

const studentsList = [student1, student2];

console.table(studentsList, ['firstName', 'location']);