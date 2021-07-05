/*
  Title:
    Count of positives / sum of negatives
  Description:
    Given an array of integers.
    Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
    If the input array is empty or null, return an empty array.
    Example
    For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/576bb71bbbcf0951d5000044
  Discuss Link:
    https://www.codewars.com/kata/576bb71bbbcf0951d5000044/discuss
  Solutions Link:
    https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions
*/
// Long Solution
function countPositivesSumNegatives (input) {
  if (!input || !input.length) return [];
  const positives = input.filter((x) => x > 0);
  const negatives = input.filter((x) => x <= 0);

  return [
    positives.length,
    Math.floor(negatives.reduce((sum, value) => sum + value, 0))
  ];
}
// Short Solution
/*
const countPositivesSumNegatives = () => {}
*/
// Function Export
module.exports = countPositivesSumNegatives;
