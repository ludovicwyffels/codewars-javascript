
/*
  Title:
    Exes and Ohs
  Description:
    Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
    Examples input/output:
    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/55908aad6620c066bc00002a
  Discuss Link:
    https://www.codewars.com/kata/55908aad6620c066bc00002a/discuss
  Solutions Link:
    https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions
*/
// Long Solution
function XO (str) {
  const totalX = str.split('').filter(char => /x/gi.test(char)).length;
  const totalO = str.split('').filter(char => /o/gi.test(char)).length;
  return totalX === totalO;
}

// Function Export
module.exports = XO;
