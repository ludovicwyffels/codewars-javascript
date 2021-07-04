/*
  Title:
    Abbreviate a Two Word Name
  Description:
    Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
    The output should be two capital letters with a dot separating them.
    It should look like this:
    Sam Harris => S.H
    Patrick Feeney => P.F

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
  Discuss Link:
    https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/discuss
  Solutions Link:
    https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions
*/
// Long Solution
function abbrevName (name) {
  return name
    .split(' ')
    .map((x) => x.substr(0, 1).toUpperCase())
    .join('.');
}
// Short Solution
/*
const abbrevName = () => {}
*/
// Function Export
module.exports = abbrevName;
