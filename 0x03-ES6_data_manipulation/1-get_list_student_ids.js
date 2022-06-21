// Defines a function that returns an array of ids from a list of objects.
// If the argument to the function is not an array, it returns an empty array.
export default function getListStudentIds(arr) {
  if (!(arr instanceof Array)) {
    return [];
  }
  return arr.map((x) => x.id);
}
