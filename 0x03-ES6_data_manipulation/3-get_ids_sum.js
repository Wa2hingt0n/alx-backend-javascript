// Defines a function that returns the sum of all the student ids
// The function accepts a list of students as a parameter
// Uses the reduce function on the array
export default function getStudentIdsSum(studentList) {
  if (!(studentList instanceof Array)) {
    return 'Parameter must be a list of students';
  }
  return studentList.reduce((previousValue, currentValue) => previousValue + currentValue.id, 0);
}
