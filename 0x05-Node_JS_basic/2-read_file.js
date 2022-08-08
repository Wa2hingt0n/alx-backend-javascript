// Reads a csv database file of students and prints certain metrics

const fs = require('fs');
const { parse } = require('csv-parse');

function countStudents(path) {
    if (!fs.existsSync(path)) {
	throw new Error('Cannot load the database');
    }
    if (!fs.statSync(path)) {
	throw new Error('Cannot load the database');
    }
    let numStudents = 0;
    let numSWE = 0;
    let numCS = 0;
    const arrayCS = [];
    const arraySWE = []
    const parser = parse({columns: true}, function(err, records) {
	for (let row of records) {
	    numStudents += 1;
	    if (row === '\n') {
		continue;
	    } else if (row.field === 'CS') {
		numCS += 1;
		arrayCS.push(row.firstname);
	    } else if (row.field === 'SWE') {
		numSWE += 1;
		arraySWE.push(row.firstname.split(','));
	    }
	}
	const stringArrayCS = arrayCS.join(', ');
	const stringArraySWE = arraySWE.join(', ');
	console.log(`Number of students: ${numStudents}`);
	console.log(
	    `Number of students in CS: ${numCS}. List: ${stringArrayCS}`);
	console.log(
	    `Number of students in SWE: ${numSWE}. List: ${stringArraySWE}`);
    });

    fs.createReadStream(path).pipe(parser);
};

module.exports = countStudents;
