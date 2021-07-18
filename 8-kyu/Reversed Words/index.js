
/*
  Title:
    Reversed Words
  Description:
    Complete the solution so that it reverses all of the words within the string passed in.
    Example:
    "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/51c8991dee245d7ddf00000e
  Discuss Link:
    https://www.codewars.com/kata/51c8991dee245d7ddf00000e/discuss
  Solutions Link:
    https://www.codewars.com/kata/51c8991dee245d7ddf00000e/solutions
*/
// Long Solution
function reverseWords (str) {
  return str
    .split(' ')
    .reverse()
    .join(' ');
}

// Function Export
module.exports = reverseWords;
