// Reads a csv database file of students and prints certain metrics

const fs = require('fs');

let count = 0;
let numSWE = 0;
let numCS = 0;
const arrayCS = [];
const arraySWE = [];

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(
    path, { encoding: 'utf8', ignoreEmpty: true },
  ).toString().split('\n');

  // Remove empty lines from database
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] === '') {
      data.splice(i, 1);
      i -= 1;
    }
  }
  const numStudents = data.length - 1;
  for (const item of data) {
    if (count === 0) {
      // pass
    } else {
      const newValues = item.split(',');
      if (newValues[3] === 'CS') {
        numCS += 1;
        arrayCS.push(newValues[0]);
      } else if (newValues[3] === 'SWE') {
        numSWE += 1;
        arraySWE.push(newValues[0]);
      }
    }
    count += 1;
  }
  const stringArrayCS = arrayCS.join(', ');
  const stringArraySWE = arraySWE.join(', ');
  console.log(`Number of students: ${numStudents}`);
  console.log(
    `Number of students in CS: ${numCS}. List: ${stringArrayCS}`,
  );
  console.log(
    `Number of students in SWE: ${numSWE}. List: ${stringArraySWE}`,
  );
}

module.exports = countStudents;
