
/*
  Title:
    Square Every Digit
  Description:
    Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
    For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
    Note: The function accepts an integer and returns an integer

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/546e2562b03326a88e000020
  Discuss Link:
    https://www.codewars.com/kata/546e2562b03326a88e000020/discuss
  Solutions Link:
    https://www.codewars.com/kata/546e2562b03326a88e000020/solutions
*/
// Long Solution
function squareDigits (num) {
  return Number(
    String(num)
      .split('')
      .map(digit => digit ** 2)
      .join('')
  );
}
// Short Solution
/*
const squareDigits = () => {}
*/
// Function Export
module.exports = squareDigits;
