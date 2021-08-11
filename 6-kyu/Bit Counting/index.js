
/*
  Title:
    Bit Counting
  Description:
    Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
    Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/526571aae218b8ee490006f4
  Discuss Link:
    https://www.codewars.com/kata/526571aae218b8ee490006f4/discuss
  Solutions Link:
    https://www.codewars.com/kata/526571aae218b8ee490006f4/solutions
*/

const countBits = function (n) {
  return n.toString(2).split('').reduce((a, b) => (b === '1' ? ++a : a), 0);
};

// Function Export
module.exports = countBits;
