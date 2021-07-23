
/*
  Title:
    Create Phone Number
  Description:
    Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
    Example
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

    createPhoneNumber(int[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"

    create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"

    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"

    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"

    Kata.createPhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"

    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

    createPhoneNumber [1,2,3,4,5,6,7,8,9,0] -- => returns "(123) 456-7890"

    Kata.CreatePhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"

    createPhoneNumber [1; 2; 3; 4; 5; 6; 7; 8; 9; 0] // => returns "(123) 456-7890"

    create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"

    Kata.createPhoneNumber(Seq(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) # => returns "(123) 456-7890"

    createPhoneNumber([1,2,3,4,5,6,7,8,9,0]); // => returns "(123) 456-7890"

    createPhoneNumber [1; 2; 3; 4; 5; 6; 7; 8; 9; 0] // => returns "(123) 456-7890"

    (create-phone-number [1 2 3 4 5 6 7 8 9 0]) ;; => returns "(123) 456-7890"

    create_phone_number(&[1,2,3,4,5,6,7,8,9,0]); // returns "(123) 456-7890"

    CreatePhoneNumber([10]uint{1,2,3,4,5,6,7,8,9,0})  // returns "(123) 456-7890"

    create_phone_number(phnum, (const unsigned char[]){1,2,3,4,5,6,7,8,9,0});
        // phnum <- "(123) 456-7890"

    phnum:  resb 15
    nums:   db  1,2,3,4,5,6,7,8,9,0

    mov rdi, phnum
    mov rsi, nums
    call create_phone_number  ; RAX <- phnum <- "(123) 456-7890"

    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

    createphonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # -> returns "(123) 456-7890"

    createPhoneNumber( [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] ) // => returns "(123) 456-7890"

    { 1 2 3 4 5 6 7 8 9 0 } create-phone-number ! returns "(123) 456-7890"

    The returned format must be correct in order to complete this challenge.Don't forget the space after the closing parentheses!

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/525f50e3b73515a6db000b83
  Discuss Link:
    https://www.codewars.com/kata/525f50e3b73515a6db000b83/discuss
  Solutions Link:
    https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions
*/
// Long Solution
function createPhoneNumber (numbers) {
  const numbersString = numbers.join('');
  const firstPart = numbersString.slice(0, 3);
  const secondPart = numbersString.slice(3, 6);
  const thirdPart = numbersString.slice(6, 10);

  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}
// Short Solution
/*
const createPhoneNumber = () => {}
*/
// Function Export
module.exports = createPhoneNumber;
