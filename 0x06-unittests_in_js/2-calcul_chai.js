// Defines a function that rounds the arguments
// and returns the sum, difference or quotient according to the type argument
// passed
function calculateNumber(type, a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);
  if (type === 'SUM') {
    return aRound + bRound;
  } if (type === 'SUBTRACT') {
    return aRound - bRound;
  } if (type === 'DIVIDE') {
    if (bRound === 0) {
      return 'Error';
    } return aRound / bRound;
  }
}

module.exports = calculateNumber;
