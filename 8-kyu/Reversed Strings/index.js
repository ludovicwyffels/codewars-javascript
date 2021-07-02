/*
  Title:
    Reversed Strings
  Description:
    Complete the solution so that it reverses the string passed into it. 
    'world'  =>  'dlrow'
    
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5168bb5dfe9a00b126000018
  Discuss Link:
    https://www.codewars.com/kata/5168bb5dfe9a00b126000018/discuss
  Solutions Link:
    https://www.codewars.com/kata/5168bb5dfe9a00b126000018/solutions
*/
// Long Solution
function solution(str) {
  return str.split('').reverse().join('');
}
// Short Solution
/*
const solution = () => {}
*/
// Function Export
module.exports = solution;
