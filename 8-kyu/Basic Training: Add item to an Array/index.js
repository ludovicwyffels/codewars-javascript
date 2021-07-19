
/*
  Title:
    Basic Training: Add item to an Array
  Description:
    Add the value "codewars" to the websites array.After your code executes the websites array should == ["codewars"]
    The websites array has already been defined for you using the following code:
    websites = []

    var websites = [];

    websites = []

    websites = []

    export const websites: string[] = [];

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/511f0fe64ae8683297000001
  Discuss Link:
    https://www.codewars.com/kata/511f0fe64ae8683297000001/discuss
  Solutions Link:
    https://www.codewars.com/kata/511f0fe64ae8683297000001/solutions
*/
// Long Solution
function solution () {
  const websites = [];
  websites.push('codewars');

  return websites;
}

// Function Export
module.exports = solution;
