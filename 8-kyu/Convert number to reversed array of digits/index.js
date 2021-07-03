/*
  Title:
    Convert number to reversed array of digits
  Description:
    Convert number to reversed array of digits
    Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
    Example:
    348597 => [7,9,5,8,4,3]
    
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5583090cbe83f4fd8c000051
  Discuss Link:
    https://www.codewars.com/kata/5583090cbe83f4fd8c000051/discuss
  Solutions Link:
    https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions
*/
// Long Solution
function digitize(n) {
  return (n + '').split('').map(Number).reverse();
}
// Short Solution
/*
const digitize = () => {}
*/
// Function Export
module.exports = digitize;
