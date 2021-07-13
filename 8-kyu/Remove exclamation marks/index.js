
/*
  Title:
    Remove exclamation marks
  Description:
    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57a0885cbb9944e24c00008e
  Discuss Link:
    https://www.codewars.com/kata/57a0885cbb9944e24c00008e/discuss
  Solutions Link:
    https://www.codewars.com/kata/57a0885cbb9944e24c00008e/solutions
*/
// Long Solution
function removeExclamationMarks (s) {
  return s.replace(/!/g, '');
}

// Function Export
module.exports = removeExclamationMarks;
