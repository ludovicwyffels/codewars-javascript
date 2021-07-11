
/*
  Title:
    Count by X
  Description:
    Create a function with two arguments that will return an array of the first (n) multiples of (x).
    Assume both the given number and the number of times to count will be positive numbers greater than 0.
    Return the results as an array (or list in Python, Haskell or Elixir).
    Examples:
    countBy(1,10)  should return  {1,2,3,4,5,6,7,8,9,10}
    countBy(2,5)  should return {2,4,6,8,10}

    countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
    countBy(2,5) === [2,4,6,8,10]

    mov rdi, .memory ; {,,,,,,,,}
    mov esi, 1
    mov rdx, 10
    call cntbyx     ; [RAX] <- {1,2,3,4,5,6,7,8,9,10}

    mov rdi, .memory  ; {,,,,}
    mov esi 2
    mov rdx, 5
    call cntbyx     ; [RAX] <- {2,4,6,8,10}

    countBy(1,10) == [1,2,3,4,5,6,7,8,9,10]
    countBy(2,5) == [2,4,6,8,10]

    countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
    countBy(2,5) === [2,4,6,8,10]

    countBy(1,10) == [1,2,3,4,5,6,7,8,9,10]
    countBy(2,5) == [2,4,6,8,10]

    count_by(1,10) #should return [1,2,3,4,5,6,7,8,9,10]
    count_by(2,5) #should return [2,4,6,8,10]

    count_by(1,10) #should return [1,2,3,4,5,6,7,8,9,10]
    count_by(2,5) #should return [2,4,6,8,10]

    count_by(1,10) #should return [1,2,3,4,5,6,7,8,9,10]
    count_by(2,5) #should return [2,4,6,8,10]

    countBy 1 10 `shouldBe` [1,2,3,4,5,6,7,8,9,10]
    countBy 2  5 `shouldBe` [2,4,6,8,10]

    count_by(1, 10) == [1,2,3,4,5,6,7,8,9,10]
    count_by(2, 5) == [2,4,6,8,10]

    countBy(1,10) // should return [1,2,3,4,5,6,7,8,9,10]
    countBy(2,5) // should return [2,4,6,8,10]

    countBy(1,10) // should return [1,2,3,4,5,6,7,8,9,10]
    countBy(2,5) // should return [2,4,6,8,10]

    Kata.countBy(1, 10) == [1,2,3,4,5,6,7,8,9,10]
    Kata.countBy(2, 5) == [2,4,6,8,10]

    (count-by 1 10) ; returns '(1 2 3 4 5 6 7 8 9 10)
    (count-by 2 5)  ; returns '(2 4 6 8 10)

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5513795bd3fafb56c200049e
  Discuss Link:
    https://www.codewars.com/kata/5513795bd3fafb56c200049e/discuss
  Solutions Link:
    https://www.codewars.com/kata/5513795bd3fafb56c200049e/solutions
*/
// Long Solution
function countBy (x, n) {
  const result = [];
  const limit = x * n;

  for (let i = 1; i <= limit; i++) {
    if (i % x === 0) result.push(i);
  }

  return result;
}
// Short Solution
/*
const countBy = () => {}
*/
// Function Export
module.exports = countBy;
