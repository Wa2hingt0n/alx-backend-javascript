// Defines a function that returns a new array buffer with an int8 value
// at a specific position
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const buf = new DataView(buffer, 0, length);
  const int8View = new Int8Array(buffer);
  if (position > length) {
    throw new Error('Position outside range');
  }
  int8View[position] = value;
  return buf;
}
