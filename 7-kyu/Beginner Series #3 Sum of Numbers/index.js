
/*
  Title:
    Beginner Series #3 Sum of Numbers
  Description:
    Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
    Note: a and b are not ordered!
    Examples
    GetSum(1, 0) == 1   // 1 + 0 = 1
    GetSum(1, 2) == 3   // 1 + 2 = 3
    GetSum(0, 1) == 1   // 0 + 1 = 1
    GetSum(1, 1) == 1   // 1 Since both are same
    GetSum(-1, 0) == -1 // -1 + 0 = -1
    GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

    get_sum(1, 0) == 1   # 1 + 0 = 1
    get_sum(1, 2) == 3   # 1 + 2 = 3
    get_sum(0, 1) == 1   # 0 + 1 = 1
    get_sum(1, 1) == 1   # 1 Since both are same
    get_sum(-1, 0) == -1 # -1 + 0 = -1
    get_sum(-1, 2) == 2  # -1 + 0 + 1 + 2 = 2

    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

    GetSum(1, 0) == 1   // 1 + 0 = 1
    GetSum(1, 2) == 3   // 1 + 2 = 3
    GetSum(0, 1) == 1   // 0 + 1 = 1
    GetSum(1, 1) == 1   // 1 Since both are same
    GetSum(-1, 0) == -1 // -1 + 0 = -1
    GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

    GetSum(1, 0) == 1   // 1 + 0 = 1
    GetSum(1, 2) == 3   // 1 + 2 = 3
    GetSum(0, 1) == 1   // 0 + 1 = 1
    GetSum(1, 1) == 1   // 1 Since both are same
    GetSum(-1, 0) == -1 // -1 + 0 = -1
    GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

    get_sum(1, 0) == 1   // 1 + 0 = 1
    get_sum(1, 2) == 3   // 1 + 2 = 3
    get_sum(0, 1) == 1   // 0 + 1 = 1
    get_sum(1, 1) == 1   // 1 Since both are same
    get_sum(-1, 0) == -1 // -1 + 0 = -1
    get_sum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

    get_sum(1, 0) == 1   # 1 + 0 = 1
    get_sum(1, 2) == 3   # 1 + 2 = 3
    get_sum(0, 1) == 1   # 0 + 1 = 1
    get_sum(1, 1) == 1   # 1 Since both are same
    get_sum(-1, 0) == -1 # -1 + 0 = -1
    get_sum(-1, 2) == 2  # -1 + 0 + 1 + 2 = 2

    get_sum(1, 0) == 1   // 1 + 0 = 1
    get_sum(1, 2) == 3   // 1 + 2 = 3
    get_sum(0, 1) == 1   // 0 + 1 = 1
    get_sum(1, 1) == 1   // 1 Since both are same
    get_sum(-1, 0) == -1 // -1 + 0 = -1
    get_sum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

    get_sum(1, 0) == 1   // 1 + 0 = 1
    get_sum(1, 2) == 3   // 1 + 2 = 3
    get_sum(0, 1) == 1   // 0 + 1 = 1
    get_sum(1, 1) == 1   // 1 Since both are same
    get_sum(-1, 0) == -1 // -1 + 0 = -1
    get_sum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

    get_sum(1, 0) == 1   # 1 + 0 = 1
    get_sum(1, 2) == 3   # 1 + 2 = 3
    get_sum(0, 1) == 1   # 0 + 1 = 1
    get_sum(1, 1) == 1   # 1 Since both are same
    get_sum(-1, 0) == -1 # -1 + 0 = -1
    get_sum(-1, 2) == 2  # -1 + 0 + 1 + 2 = 2

    mov edi, 1
    mov esi, 0
    call get_sum    ; EAX <- 1 = 1 + 0

    mov edi, 1
    mov esi, 2
    call get_sum    ; EAX <- 3 = 1 + 2

    mov edi, 0
    mov esi, 1
    call get_sum    ; EAX <- 1 = 0 + 1

    getSum 1 0 == 1   // 1 + 0 = 1
    getSum 1 2 == 3   // 1 + 2 = 3
    getSum 0 1 == 1   // 0 + 1 = 1
    getSum 1 1 == 1   // 1 Since both are same
    getSum -1 0 == -1 // -1 + 0 = -1
    getSum -1 2 == 2  // -1 + 0 + 1 + 2 = 2

    getsum(1, 0) == 1   # 1 + 0 = 1
    getsum(1, 2) == 3   # 1 + 2 = 3
    getsum(0, 1) == 1   # 0 + 1 = 1
    getsum(1, 1) == 1   # 1 Since both are same
    getsum(-1, 0) == -1 # -1 + 0 = -1
    getsum(-1, 2) == 2  # -1 + 0 + 1 + 2 = 2

    get_sum(1, 0, 1) % 1 + 0 = 1
    get_sum(1, 2, 3) % 1 + 2 = 3
    get_sum(0, 1, 3) % 0 + 1 = 1
    get_sum(1, 1, 1)  % 1 Since both are same
    get_sum(-1, 0, -1) % -1 + 0 = -1
    get_sum(-1, 2, 2) % -1 + 0 + 1 + 2 = 2

    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

    GetSum(1, 0) = 1   // 1 + 0 = 1
    GetSum(1, 2) = 3   // 1 + 2 = 3
    GetSum(0, 1) = 1   // 0 + 1 = 1
    GetSum(1, 1) = 1   // 1 Since both are same
    GetSum(-1, 0) = -1 // -1 + 0 = -1
    GetSum(-1, 2) = 2  // -1 + 0 + 1 + 2 = 2

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/55f2b110f61eb01779000053
  Discuss Link:
    https://www.codewars.com/kata/55f2b110f61eb01779000053/discuss
  Solutions Link:
    https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions
*/
// Long Solution
function getSum (...range) {
  const rangeSort = range.sort((a, b) => a - b);
  if (rangeSort[0] === rangeSort[1]) return rangeSort[0];

  let result = 0;
  for (let i = rangeSort[0]; i <= rangeSort[1]; i++) result += i;

  return result;
}
// Short Solution
/*
const getSum = () => {}
*/
// Function Export
module.exports = getSum;
