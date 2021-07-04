/*
  Title:
    Beginner Series #1 School Paperwork
  Description:
    Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
    Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
    Example:
    n= 5, m=5: 25
    n=-5, m=5:  0

    Waiting for translations and Feedback! Thanks!

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
  Discuss Link:
    https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/discuss
  Solutions Link:
    https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/solutions
*/
// Long Solution
function paperwork (n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

// Short Solution
/*
const paperwork = () => {}
*/
// Function Export
module.exports = paperwork;
