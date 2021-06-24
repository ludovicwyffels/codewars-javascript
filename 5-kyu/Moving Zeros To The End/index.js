/*
  Title:
    Moving Zeros To The End
  Description:
    Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
    
    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
    
    move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]
    
    move_zeros({1, 0, 1, 2, 0, 1, 3}) // returns {1, 1, 2, 1, 3, 0, 0}
    
    moveZeros [false,1,0,1,2,0,1,3,"a"] # returns[false,1,1,2,1,3,"a",0,0]
    
    Kata.MoveZeroes(new int[] {1, 2, 0, 1, 0, 1, 0, 3, 0, 1}) => new int[] {1, 2, 1, 1, 3, 1, 0, 0, 0, 0}
    
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/52597aa56021e91c93000cb0
  Discuss Link:
    https://www.codewars.com/kata/52597aa56021e91c93000cb0/discuss
  Solutions Link:
    https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions
*/
// Long Solution
function moveZeros(array) {
  const arrayWithZeros = array.filter((number) => number === 0);
  const arrayWithoutZeros = array.filter((number) => number !== 0);

  return [...arrayWithoutZeros, ...arrayWithZeros];
}

// Function Export
module.exports = moveZeros;
