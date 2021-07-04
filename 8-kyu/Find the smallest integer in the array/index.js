/*
  Title:
    Find the smallest integer in the array
  Description:
    Given an array of integers your solution should find the smallest integer.
    For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

    You can assume, for the purpose of this kata, that the supplied array will not be empty.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/55a2d7ebe362935a210000b2
  Discuss Link:
    https://www.codewars.com/kata/55a2d7ebe362935a210000b2/discuss
  Solutions Link:
    https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions
*/
// Long Solution
class SmallestIntegerFinder {
  findSmallestInt (args) {
    return Math.min(...args);
  }
}
// Short Solution
/*
const  = () => {}
*/
// Function Export
module.exports = SmallestIntegerFinder;
