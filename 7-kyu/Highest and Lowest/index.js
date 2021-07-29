
/*
  Title:
    Highest and Lowest
  Description:
    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
    Example:
    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"

    Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
    Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
    Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"

    highAndLow "1 2 3 4 5"  // return "5 1"
    highAndLow "1 2 -3 4 5" // return "5 -3"
    highAndLow "1 9 3 4 -5" // return "9 -5"

    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"

    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"

    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"

    highAndLow("1 2 3 4 5")  # return "5 1"
    highAndLow("1 2 -3 4 5") # return "5 -3"
    highAndLow("1 9 3 4 -5") # return "9 -5"

    high_and_low("1 2 3 4 5")  # return "5 1"
    high_and_low("1 2 -3 4 5") # return "5 -3"
    high_and_low("1 9 3 4 -5") # return "9 -5"

    high_and_low("1 2 3 4 5")  # return "5 1"
    high_and_low("1 2 -3 4 5") # return "5 -3"
    high_and_low("1 9 3 4 -5") # return "9 -5"

    high_and_low("1 2 3 4 5")  # return "5 1"
    high_and_low("1 2 -3 4 5") # return "5 -3"
    high_and_low("1 9 3 4 -5") # return "9 -5"

    high_and_low("1 2 3 4 5")  # return "5 1"
    high_and_low("1 2 -3 4 5") # return "5 -3"
    high_and_low("1 9 3 4 -5") # return "9 -5"

    highAndLow("1 2 3 4 5")  // return "5 1"
    highAndLow("1 2 -3 4 5") // return "5 -3"
    highAndLow("1 9 3 4 -5") // return "9 -5"

    highAndLow "1 2 3 4 5")  # return "5 1"
    highAndLow "1 2 -3 4 5") # return "5 -3"
    highAndLow "1 9 3 4 -5") # return "9 -5"

    HighAndLow("1 2 3 4 5")  // return "5 1"
    HighAndLow("1 2 -3 4 5") // return "5 -3"
    HighAndLow("1 9 3 4 -5") // return "9 -5"

    highAndLow("1 2 3 4 5")  // return "5 1"
    highAndLow("1 2 -3 4 5") // return "5 -3"
    highAndLow("1 9 3 4 -5") // return "9 -5"

    Kata.high_and_low("1 2 3 4 5")  # return "5 1"
    Kata.high_and_low("1 2 -3 4 5") # return "5 -3"
    Kata.high_and_low("1 9 3 4 -5") # return "9 -5"

    Notes:

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/554b4ac871d6813a03000035
  Discuss Link:
    https://www.codewars.com/kata/554b4ac871d6813a03000035/discuss
  Solutions Link:
    https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions
*/
// Long Solution
function highAndLow (numbers) {
  const orderedNumbers = numbers.split(' ').map(string => Number(string));
  return `${Math.max(...orderedNumbers)} ${Math.min(...orderedNumbers)}`;
}
// Short Solution
/*
const highAndLow = () => {}
*/
// Function Export
module.exports = highAndLow;
