
/*
  Title:
    Sum The Strings
  Description:
    Create a function that takes 2 nonnegative integers in form of a string as an input, and outputs the sum (also as a string):
    Example: (Input1, Input2 -->Output)
    "4",  "5" --> "9"
    "34", "5" --> "39"

    Notes:

    If either input is an empty string, consider it as zero.

    Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5966e33c4e686b508700002d
  Discuss Link:
    https://www.codewars.com/kata/5966e33c4e686b508700002d/discuss
  Solutions Link:
    https://www.codewars.com/kata/5966e33c4e686b508700002d/solutions
*/
// Long Solution
function sumStr (a, b) {
  return `${Number(a) + Number(b)}`;
}

// Function Export
module.exports = sumStr;
