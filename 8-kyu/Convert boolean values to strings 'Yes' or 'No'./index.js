/*
  Title:
    Convert boolean values to strings 'Yes' or 'No'.
  Description:
    Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/53369039d7ab3ac506000467
  Discuss Link:
    https://www.codewars.com/kata/53369039d7ab3ac506000467/discuss
  Solutions Link:
    https://www.codewars.com/kata/53369039d7ab3ac506000467/solutions
*/

// Long Solution
/*
function boolToWord(bool) {
  if (bool) return 'Yes'
  return 'No'
}
*/

// Short Solution
const boolToWord = (bool) => (bool ? 'Yes' : 'No');

// Function Export
module.exports = boolToWord;
