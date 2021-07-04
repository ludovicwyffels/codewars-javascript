/*
  Title:
    Even or Odd
  Description:
    Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
  Discuss Link:
    https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/discuss
  Solutions Link:
    https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions
*/

/* eslint-disable camelcase */

// Long Solution
/*
function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}
*/

// Short Solution
const even_or_odd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');

// Function Export
module.exports = even_or_odd;
