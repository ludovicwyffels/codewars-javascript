/*
  Title:
    SpeedCode #2 - Array Madness
  Description:
    SpeedCode #2 - Array Madness
    Objective
    Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
    E.g.
    array_madness(3, {4, 5, 6}, 3, {1, 2, 3}) == true;
    // because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

    arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

    Kata.ArrayMadness(new int[] {4, 5, 6}, new int[] {1, 2, 3}) => true // because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

    array_madness([4, 5, 6], [1, 2, 3]) => True #because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

    { 4 5 6 } { 1 2 3 } array-madness ! returns t since 4 2 ^ 5 2 ^ + 6 2 ^ + is greater than 1 3 ^ 2 3 ^ + 3 3 ^ +

    Get your timer out.  Are you ready?  Ready, get set, GO!!!

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
  Discuss Link:
    https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/discuss
  Solutions Link:
    https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/solutions
*/
// Long Solution
function arrayMadness (a, b) {
  return (
    a.reduce((total, number) => total + number ** 2, 0) >
    b.reduce((total, number) => total + number ** 3, 0)
  );
}
// Short Solution
/*
const arrayMadness = (a, b) =>
  a.reduce((total, number) => total + number ** 2, 0) >
  b.reduce((total, number) => total + number ** 3, 0)
*/
// Function Export
module.exports = arrayMadness;
