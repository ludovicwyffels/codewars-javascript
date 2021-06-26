/*
  Title:
    Return Negative
  Description:
    In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
    Example:
    makeNegative(1); // return -1
    makeNegative(-5); // return -5
    makeNegative(0); // return 0
    
    makeNegative(1); // return -1
    makeNegative(-5); // return -5
    makeNegative(0); // return 0
    
    Kata.MakeNegative(1); // return -1
    Kata.MakeNegative(-5); // return -5
    Kata.MakeNegative(0); // return 0
    
    Kata.makeNegative(1); // return -1
    Kata.makeNegative(-5); // return -5
    Kata.makeNegative(0); // return 0
    
    make_negative(1);  # return -1
    make_negative(-5); # return -5
    make_negative(0);  # return 0
    
    make_negative(1);  # return -1
    make_negative(-5); # return -5
    make_negative(0);  # return 0
    
    make_negative(1);  # return -1
    make_negative(-5); # return -5
    make_negative(0);  # return 0
    
    makeNegative(1); // return -1
    makeNegative(-5); // return -5
    makeNegative(0); // return 0
    makeNegative(0.12); // return -0.12
    
    makeNegative(1); // return -1
    makeNegative(-5); // return -5
    makeNegative(0); // return 0
    
    makeNegative(1); // return -1
    makeNegative(-5); // return -5
    makeNegative(0); // return 0
    
    makeNegative    1 -- return -1
    makeNegative (-5) -- return -5
    makeNegative    0 -- return 0
    makeNegative 0.12 -- return -0.12
    
    makeNegative(1); # return -1
    makeNegative(-5); # return -5
    makeNegative(0); # return 0
    
    makeNegative 1    # return -1
    makeNegative -5   # return -5
    makeNegative 0    # return 0
    
    make_negative 1    # return -1
    make_negative -5   # return -5
    make_negative 0    # return 0
    
    MakeNegative(1)    # return -1
    MakeNegative(-5)   # return -5
    MakeNegative(0)    # return 0
    
    Kata.makenegative(1)  # return -1
    Kata.makenegative(-5) # return -5
    Kata.makenegative(0)  # return 0
    
    Kata().makeNegative(1)  // return -1
    Kata().makeNegative(-5) // return -5
    Kata().makeNegative(0)  // return 0
    
    make_negative(1);    // return -1
    make_negative(-5);   // return -5
    make_negative(0);    // return 0
    
    Kata.makeNegative(1)    // return -1
    Kata.makeNegative(-5)   // return -5
    Kata.makeNegative(0)    // return 0
    
    makeNegative(1)    // return -1
    makeNegative(-5)   // return -5
    makeNegative(0)    // return 0
    makeNegative(0.12) // return -0.12
    
    (make-negative 1)    ; -1
    (make-negative -5)   ; -5
    (make-negative 0)    ; 0
    (make-negative 0.12) ; -0.12
    
    Notes:
    
    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
    
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/55685cd7ad70877c23000102
  Discuss Link:
    https://www.codewars.com/kata/55685cd7ad70877c23000102/discuss
  Solutions Link:
    https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions
*/

// Long Solution
/*
function makeNegative(num) {
  return Math.sign(num) === 1 ? -num : num
}
*/

// Short Solution
const makeNegative = (number) => (Math.sign(number) === 1 ? -number : number);

// Function Export
module.exports = makeNegative;
