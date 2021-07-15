
/*
  Title:
    Mr. Freeze
  Description:
    There is an object/class already created called MrFreeze.  Mark this object as frozen so that no other changes can be made to it.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/514a3996d22ce03198000003
  Discuss Link:
    https://www.codewars.com/kata/514a3996d22ce03198000003/discuss
  Solutions Link:
    https://www.codewars.com/kata/514a3996d22ce03198000003/solutions
*/
// Long Solution
// mark the MrFreeze object instance as frozen
const MrFreeze = {};
Object.freeze(MrFreeze);

// Function Export
module.exports = MrFreeze;
