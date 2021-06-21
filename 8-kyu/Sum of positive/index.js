/*
  Title:
    Sum of positive
  Description:
    You get an array of numbers, return the sum of all of the positives ones.
    Example [1,-4,7,12] => 1 + 7 + 12 = 20
    Note: if there is nothing to sum, the sum is default to 0.
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5715eaedb436cf5606000381
  Discuss Link:
    https://www.codewars.com/kata/5715eaedb436cf5606000381/discuss
  Solutions Link:
    https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions
*/

// Long Solution
function positiveSum(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

// Short Solution
// const positiveSum = (arr) => {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// };

// Function Export
module.exports = positiveSum;
