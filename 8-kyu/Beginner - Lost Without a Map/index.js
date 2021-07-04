/*
  Title:
    Beginner - Lost Without a Map
  Description:
    Given an array of integers, return a new array with each value doubled.
    For example:
    [1, 2, 3] --> [2, 4, 6]
    For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57f781872e3d8ca2a000007e
  Discuss Link:
    https://www.codewars.com/kata/57f781872e3d8ca2a000007e/discuss
  Solutions Link:
    https://www.codewars.com/kata/57f781872e3d8ca2a000007e/solutions
*/
// Long Solution
function maps (x) {
  return x.map((n) => n * 2);
}
// Short Solution
/*
const maps = () => {}
*/
// Function Export
module.exports = maps;
