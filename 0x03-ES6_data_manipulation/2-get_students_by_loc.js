// Defines a function that returns an array of objects
// who are located in a specific city
// The function accepts a list of students and a city
export default function getStudentsByLocation(studentList, city) {
  if (!(studentList instanceof Array) || (typeof city !== 'string')) {
    return 'TypeError: studentList must be an array and city must be a string';
  }
  return studentList.filter((x) => x.location === city);
}
