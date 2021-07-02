/*
  Title:
    Remove String Spaces
  Description:
    Simple, remove the spaces from the string, then return the resultant string.
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57eae20f5500ad98e50002c5
  Discuss Link:
    https://www.codewars.com/kata/57eae20f5500ad98e50002c5/discuss
  Solutions Link:
    https://www.codewars.com/kata/57eae20f5500ad98e50002c5/solutions
*/
// Long Solution
function noSpace(x) {
  return x.replace(/\s/g, '');
}
// Short Solution
/*
const noSpace = () => {}
*/
// Function Export
module.exports = noSpace;
