// Defines a function that returns a string of all the set values that
// start with a specific string
// Accepts two arguments, a set and a start string
export default function cleanSet(set, startString) {
  const arr = Array.from(set);
  let retString = '';
  for (const element of arr) {
    if (startString === element.slice(0, 3)) {
      retString += `${element.slice(3)}-`;
    }
  }
  if (retString.length > 0) {
    const result = retString.slice(0, -1);
    return result;
  }
  return retString;
}
