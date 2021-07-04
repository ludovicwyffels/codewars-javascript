/*
  Title:
    Find The Parity Outlier
  Description:
    You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
    Examples
    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number)

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5526fc09a1bbd946250002dc
  Discuss Link:
    https://www.codewars.com/kata/5526fc09a1bbd946250002dc/discuss
  Solutions Link:
    https://www.codewars.com/kata/5526fc09a1bbd946250002dc/solutions
*/
// Long Solution
function findOutlier (int) {
  const even = int.filter((a) => a % 2 === 0);
  const odd = int.find((a) => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd;
}

// Function Export
module.exports = findOutlier;
