export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const idx of array) {
    array[i] = appendString + idx; /* eslint no-param-reassign: 0 */
    i += 1;
  }

  return array;
}
