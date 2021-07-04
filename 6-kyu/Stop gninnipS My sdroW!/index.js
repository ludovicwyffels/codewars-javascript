/*
  Title:
    Stop gninnipS My sdroW!
  Description:
    Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

    Strings passed in will consist of only letters and spaces.
    Spaces will be included only when more than one word is present.

    Examples:
    spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
    spinWords("This is a test") => "This is a test"
    spinWords("This is another test") => "This is rehtona test"

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5264d2b162488dc400000001
  Discuss Link:
    https://www.codewars.com/kata/5264d2b162488dc400000001/discuss
  Solutions Link:
    https://www.codewars.com/kata/5264d2b162488dc400000001/solutions
*/
// Long Solution
function spinWords (words) {
  return words
    .split(' ')
    .map((word) => {
      return word.length > 4 ? word.split('').reverse().join('') : word;
    })
    .join(' ');
}
// Function Export
module.exports = spinWords;
