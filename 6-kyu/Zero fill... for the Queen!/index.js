
/*
  Title:
    Zero fill... for the Queen!
  Description:
    Queen of the Forest needs a function that will add a specified quantity of leading zeros to any given number.
    For example, if a 5-digit number is needed, and we pass in 11, the returned value would be 00011. There are many ways to achieve this. Additionally, if the size passed is less than the length of number, just return the number as a string. Let's have one that would be both useful and good performance-wise.
    NOTES:

    Numbers passed only - no strings, objects, functions, etc.

    Whole positives only - negatives converted, decimals dropped (provided in solution setup)

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5302f383be2a91e4d70002c6
  Discuss Link:
    https://www.codewars.com/kata/5302f383be2a91e4d70002c6/discuss
  Solutions Link:
    https://www.codewars.com/kata/5302f383be2a91e4d70002c6/solutions
*/
// Long Solution
function zeroFill (number, size) {
  const num = Math.floor(Math.abs(number)).toFixed(0);
  return '0'.repeat(size - num.length > 0 ? size - num.length : 0) + num;
}

// Function Export
module.exports = zeroFill;
