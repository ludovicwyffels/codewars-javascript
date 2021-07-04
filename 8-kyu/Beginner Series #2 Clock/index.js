/*
  Title:
    Beginner Series #2 Clock
  Description:
    Clock shows h hours, m minutes and s seconds after midnight.
    Your task is to write a function which returns the time since midnight in milliseconds.
    Example:
    h = 0
    m = 1
    s = 1

    result = 61000

    Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
  Discuss Link:
    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/discuss
  Solutions Link:
    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions
*/
// Long Solution
function past (h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// Short Solution
/*
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);
*/
// Function Export
module.exports = past;
