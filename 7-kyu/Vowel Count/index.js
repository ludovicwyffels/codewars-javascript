/*
  Title:
    Vowel Count
  Description:
    Return the number (count) of vowels in the given string. 
    We will consider a, e, i, o, u as vowels for this Kata (but not y).
    The input string will only consist of lower case letters and/or spaces.
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/54ff3102c1bad923760001f3
  Discuss Link:
    https://www.codewars.com/kata/54ff3102c1bad923760001f3/discuss
  Solutions Link:
    https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions
*/

// Long Solution
/*
function getCount(str) {
  return str.split('').reduce((sum, value) => (/[aeiou]/gi.test(value) ? sum + 1 : sum), 0)
}
*/

// Short Solution
const getCount = (string) => (string.match(/[aeiou]/gi) || []).length;

// Function Export
module.exports = getCount;
