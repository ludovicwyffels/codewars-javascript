/*
  Title:
    Get the mean of an array
  Description:
    It's the academic year's end, fateful moment of your school report.
    The averages must be calculated. All the students come to you and entreat you to calculate their average for them.
    Easy ! You just need to write a script.
    Return the average of the given array rounded down to its nearest integer.
    The array will never be empty.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/563e320cee5dddcf77000158
  Discuss Link:
    https://www.codewars.com/kata/563e320cee5dddcf77000158/discuss
  Solutions Link:
    https://www.codewars.com/kata/563e320cee5dddcf77000158/solutions
*/
// Long Solution
/*
const getAverage = (marks) =>
  Math.floor(marks.reduce((total, value) => total + value, 0) / marks.length);
*/

// Short Solution
const getAverage = (marks) =>
  ~~(marks.reduce((total, value) => total + value, 0) / marks.length);

// The double bitwase operator (~~) acts like Math.floor()
// https://coderwall.com/p/9b6ksa/is-faster-than-math-floor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT

// Function Export
module.exports = getAverage;
