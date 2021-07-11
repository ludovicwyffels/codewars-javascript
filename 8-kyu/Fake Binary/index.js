
/*
  Title:
    Fake Binary
  Description:
    Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57eae65a4321032ce000002d
  Discuss Link:
    https://www.codewars.com/kata/57eae65a4321032ce000002d/discuss
  Solutions Link:
    https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions
*/
// Long Solution
/*
function fakeBin (x) {
  return x
    .split('')
    .map(num => (Number(num) >= 5 ? 1 : 0))
    .join('');
}
*/

// Short Solution
const fakeBin = x => x.replace(/\d/g, d => (d >= 5 ? 1 : 0));

// Function Export
module.exports = fakeBin;
