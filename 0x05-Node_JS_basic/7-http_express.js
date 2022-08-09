// Creates a small http server using the http module

// Reads a csv database file of students and prints certain metrics

const fs = require('fs');

let count = 0;
let numSWE = 0;
let numCS = 0;
const arrayCS = [];
const arraySWE = [];

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(
    path, { encoding: 'utf8', ignoreEmpty: true }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else if (data) {
        const dataArray = data.toString().split('\n');

        // Remove empty lines from database
        for (let i = 0; i < dataArray.length; i += 1) {
          if (dataArray[i] === '') {
            dataArray.splice(i, 1);
            i -= 1;
          }
        }
        const numStudents = dataArray.length - 1;
        for (const item of dataArray) {
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
        resolve(true);
      }
    },
  );
});

const express = require('express');

const port = 1245;
const DATABASE = process.argv.length > 2 ? process.argv[2] : '';
const app = express;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseMsg = ['This is the list of our students'];

  countStudents(DATABASE)
    .then((report) => {
      responseMsg.push(report);
      const responseText = responseMsg.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseMsg.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseMsg.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
