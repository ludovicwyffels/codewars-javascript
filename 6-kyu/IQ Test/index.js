/*
  Title:
    IQ Test
  Description:
    Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
    ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
    Examples:
    IQ.Test("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

    IQ.Test("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

    iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

    iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

    iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

    iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

    iq_test("2 4 7 8 10") => 3 # Third number is odd, while the rest of the numbers are even

    iq_test("1 2 1 1") => 2 # Second number is even, while the rest of the numbers are odd

    iq_test("2 4 7 8 10") => 3 # Third number is odd, while the rest of the numbers are even

    iq_test("1 2 1 1") => 2 # Second number is even, while the rest of the numbers are odd

    iq_test("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

    iq_test("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/552c028c030765286c00007d
  Discuss Link:
    https://www.codewars.com/kata/552c028c030765286c00007d/discuss
  Solutions Link:
    https://www.codewars.com/kata/552c028c030765286c00007d/solutions
*/
// Long Solution
const iqTest = (numbers) => {
  const nums = numbers.split(' ').map((x) => x % 2);
  const sum = nums.reduce((a, b) => a + b);
  const target = sum > 1 ? 0 : 1;

  return nums.indexOf(target) + 1;
};

// Function Export
module.exports = iqTest;
