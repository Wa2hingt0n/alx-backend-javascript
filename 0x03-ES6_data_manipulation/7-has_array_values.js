// Defines a function that returns a boolean if all the elements in the array
// exist within the set
// Accepts two arguments, a set and an array
export default function hasValuesFromArray(set, array) {
  for (const arr of array) {
    if (set.has(arr) === false) {
      return false;
    }
  }
  return true;
}
