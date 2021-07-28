
/*
  Title:
    Descending Order
  Description:
    Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
    Examples:
    Input: 42145
    Output: 54421
    Input: 145263
    Output: 654321
    Input: 123456789
    Output: 987654321

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5467e4d82edf8bbf40000155
  Discuss Link:
    https://www.codewars.com/kata/5467e4d82edf8bbf40000155/discuss
  Solutions Link:
    https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions
*/
// Long Solution
function descendingOrder (n) {
  return Number(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
// Short Solution
/*
const descendingOrder = () => {}
*/
// Function Export
module.exports = descendingOrder;
