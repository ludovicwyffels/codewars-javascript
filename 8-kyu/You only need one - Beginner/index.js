/*
  Title:
    You only need one - Beginner
  Description:
    You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
    Array can contain numbers or strings. X can be either.
    Return true if the array contains the value, false if not.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57cc975ed542d3148f00015b
  Discuss Link:
    https://www.codewars.com/kata/57cc975ed542d3148f00015b/discuss
  Solutions Link:
    https://www.codewars.com/kata/57cc975ed542d3148f00015b/solutions
*/
// Long Solution
function check (a, x) {
  return a.includes(x);
}
// Short Solution
/*
const check = () => {}
*/
// Function Export
module.exports = check;
