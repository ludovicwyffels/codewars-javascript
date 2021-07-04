/*
  Title:
    Shortest Word
  Description:
    Simple, given a string of words, return the length of the shortest word(s).
    String will never be empty and you do not need to account for different data types.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
  Discuss Link:
    https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/discuss
  Solutions Link:
    https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions
*/
// Long Solution
function findShort (s) {
  const holder = s.split(' ');
  let min = holder[0].length;

  for (let i = 1; i < holder.length; i++) {
    if (min > holder[i].length) {
      min = holder[i].length;
    }
  }

  return min;
}

// Function Export
module.exports = findShort;
