/*
  Title:
    Quarter of the year
  Description:
    Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer
     number.
    For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
  Discuss Link:
    https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/discuss
  Solutions Link:
    https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/solutions
*/
// Long Solution
/*
const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
  return undefined;
};
*/

// Short Solution

const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

// Function Export
module.exports = quarterOf;
