
/*
  Title:
    Short Long Short
  Description:
    Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside
    and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).
    For example:
    solution("1", "22") // returns "1221"
    solution("22", "1") // returns "1221"

    solution("1", "22") // returns "1221"
    solution("22", "1") // returns "1221"

    solution("1", "22") # returns "1221"
    solution("22", "1") # returns "1221"

    solution("1", "22") # returns "1221"
    solution("22", "1") # returns "1221"

    solution("1", "22") # returns "1221"
    solution("22", "1") # returns "1221"

    ShortLongShort.Solution("1", "22"); // returns "1221"
    ShortLongShort.Solution("22", "1"); // returns "1221"

    solution("1", "22") # returns "1221"
    solution("22", "1") # returns "1221"

    shortLongShort("1", "22") // returns "1221"
    shortLongShort("22", "1") // returns "1221"

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/50654ddff44f800200000007
  Discuss Link:
    https://www.codewars.com/kata/50654ddff44f800200000007/discuss
  Solutions Link:
    https://www.codewars.com/kata/50654ddff44f800200000007/solutions
*/
// Long Solution
function solution (a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

// Short Solution
/*
const solution = () => {}
*/
// Function Export
module.exports = solution;
