
/*
  Title:
    Shifty Closures
  Description:
    Functional closures can get overly attached. Set them straight!
    Why doesn't greet_abe() actually greet Abe?

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/514aa0dc21607ae236000017
  Discuss Link:
    https://www.codewars.com/kata/514aa0dc21607ae236000017/discuss
  Solutions Link:
    https://www.codewars.com/kata/514aa0dc21607ae236000017/solutions
*/
// Long Solution
let name;

const greetAbe = () => {
  name = 'Abe';
  return `Hello, ${name}!`;
};

const greetBen = () => {
  name = 'Ben';
  return `Hello, ${name}!`;
};

// Function Export
module.exports = { greetAbe, greetBen };
