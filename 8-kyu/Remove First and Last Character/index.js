/*
  Title:
    Remove First and Last Character
  Description:
    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.  You don't have to worry with strings with less than two characters.
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
  Discuss Link:
    https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/discuss
  Solutions Link:
    https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions
*/
// Long Solution
function removeChar(str) {
  return str
    .split('')
    .slice(1, str.length - 1)
    .join('');
}

// Short Solution
/*
const removeChar = () => {}
*/
// Function Export
module.exports = removeChar;
