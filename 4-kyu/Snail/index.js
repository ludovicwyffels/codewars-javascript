/*
  Title:
    Snail
  Description:
    Snail Sort
    Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
    array = [[1,2,3],
             [4,5,6],
             [7,8,9]]
    snail(array) #=> [1,2,3,6,9,8,7,4,5]

    For better understanding, please follow the numbers of the next array consecutively:
    array = [[1,2,3],
             [8,9,4],
             [7,6,5]]
    snail(array) #=> [1,2,3,4,5,6,7,8,9]

    This image will illustrate things more clearly:

    NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
    NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
  Discuss Link:
    https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/discuss
  Solutions Link:
    https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/solutions
*/
// Long Solution
const snail = function (array) {
  const vector = [];
  while (array.length > 0) {
    vector.push(...array.shift());
    array.map((row) => vector.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return vector;
};

module.exports = snail;
