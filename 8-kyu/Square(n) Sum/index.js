/*
  Title:
    Square(n) Sum
  Description:
    Complete the square sum function so that it squares each number passed into it and then sums the results together.
    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/515e271a311df0350d00000f
  Discuss Link:
    https://www.codewars.com/kata/515e271a311df0350d00000f/discuss
  Solutions Link:
    https://www.codewars.com/kata/515e271a311df0350d00000f/solutions
*/
// Long Solution
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

// Function Export
module.exports = squareSum;
