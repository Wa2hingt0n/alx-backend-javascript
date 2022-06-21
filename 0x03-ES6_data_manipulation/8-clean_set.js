// Defines a function that returns a string of all the set values that
// start with a specific string
// Accepts two arguments, a set and a start string
export default function cleanSet(set, startString) {
  const arr = Array.from(set);
  let retString = '';
  const sliceLength = startString.length;
  for (const element of arr) {
    if (startString === element.slice(0, sliceLength) && sliceLength > 0) {
      retString += `${element.slice(sliceLength)}-`;
    }
  }
  if (retString.length > 0) {
    retString = retString.slice(0, -1);
  }
  return retString;
}
