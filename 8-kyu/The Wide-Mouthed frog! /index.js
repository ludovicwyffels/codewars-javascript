
/*
  Title:
    The Wide-Mouthed frog!
  Description:
    The wide mouth frog is particularly interested in the eating habits of other creatures.
    He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!
    When he meets the alligator, it then makes a tiny mouth.
    Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
  Discuss Link:
    https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/discuss
  Solutions Link:
    https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/solutions
*/
// Long Solution
function mouthSize (animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

// Function Export
module.exports = mouthSize;
