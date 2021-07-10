
/*
  Title:
    FIXME: Replace all dots
  Description:
    The code provided is supposed replace all the dots . in the specified String str with dashes -
    But it's not working properly.
    Task
    Fix the bug so we can all go home early.
    Notes
    String str will never be null.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/596c6eb85b0f515834000049
  Discuss Link:
    https://www.codewars.com/kata/596c6eb85b0f515834000049/discuss
  Solutions Link:
    https://www.codewars.com/kata/596c6eb85b0f515834000049/solutions
*/
// Long Solution
const replaceDots = function (str) {
  return str.replace(/\./g, '-');
};
// Short Solution
/*
const replaceDots = () => {}
*/
// Function Export
module.exports = replaceDots;
