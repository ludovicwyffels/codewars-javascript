/*
  Title:
    Beginner - Reduce but Grow
  Description:
    Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
    [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57f780909f7e8e3183000078
  Discuss Link:
    https://www.codewars.com/kata/57f780909f7e8e3183000078/discuss
  Solutions Link:
    https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions
*/
// Long Solution
function grow (x) {
  return x.reduce((a, b) => a * b);
}
// Short Solution
/*
const grow = (x) => x.reduce((a, b) => a * b);
*/
// Function Export
module.exports = grow;
