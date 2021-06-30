/*
  Title:
    Counting sheep...
  Description:
    Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
    For example,
    [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true]
    
    [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true]
    
    [True,  True,  True,  False,
      True,  True,  True,  True ,
      True,  False, True,  False,
      True,  False, False, True ,
      True,  True,  True,  True ,
      False, False, True,  True]
    
    [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true]
    
    { true,  true,  true,  false,
      true,  true,  true,  true,
      true,  false, true,  false,
      true,  false, false, true,
      true,  true,  true,  true,
      false, false, true,  true }
    
    [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true]
    
    [True,  True,  True,  False,
      True,  True,  True,  True ,
      True,  False, True,  False,
      True,  False, False, True ,
      True,  True,  True,  True ,
      False, False, True,  True]
    
    [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true]
    
    &[true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true]
    
    Array(
      true,  true,  true,  false,
      true,  true,  true,  true,
      true,  false, true,  false,
      true,  false, false, true,
      true,  true,  true,  true,
      false, false, true,  true
    )
    
    ;for racket in this kata, 
    ;only values that are exactly #t count as sheep. 
    ;any other value is not a sheep.
    (count-sheeps '(#t #t #t #f #t #t 1
                    #t #f #f #f #f #f #f
                    #t #f #t #t #t #t #t
                    #t #t #f #t #t #t 5))
    
    The correct answer would be 17.
    Hint: Don't forget to check for bad values like null/undefined
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/54edbc7200b811e956000556
  Discuss Link:
    https://www.codewars.com/kata/54edbc7200b811e956000556/discuss
  Solutions Link:
    https://www.codewars.com/kata/54edbc7200b811e956000556/solutions
*/
// Long Solution
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

// Function Export
module.exports = countSheeps;
