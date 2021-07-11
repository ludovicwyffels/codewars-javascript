
/*
  Title:
    Powers of 2
  Description:
    Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
    Examples
    n = 0  ==> [1]        # [2^0]
    n = 1  ==> [1, 2]     # [2^0, 2^1]
    n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

    n = 0  ==> {1}        // {2^0}
    n = 1  ==> {1, 2}     // {2^0, 2^1}
    n = 2  ==> {1, 2, 4}  // {2^0, 2^1, 2^2}

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57a083a57cb1f31db7000028
  Discuss Link:
    https://www.codewars.com/kata/57a083a57cb1f31db7000028/discuss
  Solutions Link:
    https://www.codewars.com/kata/57a083a57cb1f31db7000028/solutions
*/
// Long Solution
function powersOfTwo (n) {
  return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
}
// Short Solution
/*
const powersOfTwo = () => {}
*/
// Function Export
module.exports = powersOfTwo;
