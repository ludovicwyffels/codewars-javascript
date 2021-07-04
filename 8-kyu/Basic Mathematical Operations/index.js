/*
  Title:
    Basic Mathematical Operations
  Description:
    Your task is to create a function that does four basic mathematical operations.
    The function should take three arguments - operation(string/char), value1(number), value2(number).The function should return result of numbers after applying the chosen operation.
    Examples
    basicOp('+', 4, 7)         // Output: 11
    basicOp('-', 15, 18)       // Output: -3
    basicOp('*', 5, 5)         // Output: 25
    basicOp('/', 49, 7)        // Output: 7

    basicOp('+', 4, 7)         // Output: 11
    basicOp('-', 15, 18)       // Output: -3
    basicOp('*', 5, 5)         // Output: 25
    basicOp('/', 49, 7)        // Output: 7

    basicOp('+', 4, 7)         // Output: 11
    basicOp('-', 15, 18)       // Output: -3
    basicOp('*', 5, 5)         // Output: 25
    basicOp('/', 49, 7)        // Output: 7

    basicOp('+', 4, 7)         // Output: 11
    basicOp('-', 15, 18)       // Output: -3
    basicOp('*', 5, 5)         // Output: 25
    basicOp('/', 49, 7)        // Output: 7

    basicOp('+', 4, 7)         // Output: 11
    basicOp('-', 15, 18)       // Output: -3
    basicOp('*', 5, 5)         // Output: 25
    basicOp('/', 49, 7)        // Output: 7

    basicOp '+' 4 7            -- Output: 11
    basicOp '-' 15 18          -- Output: -3
    basicOp '*' 5 5            -- Output: 25
    basicOp '/' 49 7           -- Output: 7

    basicOp '/' 50 7           -- Output: 7 -- because integer division

    basic_op('+', 4, 7)         # Output: 11
    basic_op('-', 15, 18)       # Output: -3
    basic_op('*', 5, 5)         # Output: 25
    basic_op('/', 49, 7)        # Output: 7

    basic_op('+', 4, 7)         # Output: 11
    basic_op('-', 15, 18)       # Output: -3
    basic_op('*', 5, 5)         # Output: 25
    basic_op('/', 49, 7)        # Output: 7

    mov dil, '+'
    mov rax, __float64__(4.0)
    mov rdx, __float64__(7.0)
    movq xmm0, rax
    movq xmm1, rdx
    call basic_op        ; XMM0 <- 11.0

    mov dil, '-'
    mov rax, __float64__(15.0)
    mov rdx, __float64__(18.0)
    movq xmm0, rax
    movq xmm1, rdx
    call basic_op        ; XMM0 <- -3.0

    mov dil, '*'
    mov rax, __float64__(5.0)
    movq xmm0, rax
    movq xmm1, rax
    call basic_op        ; XMM0 <- 25.0

    mov dil, '/'
    mov rax, __float64__(49.0)
    mov rdx, __float64__(7.0)
    movq xmm0, rax
    movq xmm1, rdx
    call basic_op        ; XMM0 <- 7.0

    SimpleMath.basic_op("+", 4, 7)     # Output: 11
    SimpleMath.basic_op("-", 15, 18)   # Output: -3
    SimpleMath.basic_op("*", 5, 5)     # Output: 25
    SimpleMath.basic_op("/", 49, 7)    # Output: 7

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57356c55867b9b7a60000bd7
  Discuss Link:
    https://www.codewars.com/kata/57356c55867b9b7a60000bd7/discuss
  Solutions Link:
    https://www.codewars.com/kata/57356c55867b9b7a60000bd7/solutions
*/
// Long Solution
function basicOp (operation, value1, value2) {
  return this.eval(value1 + operation + value2);
}
// Short Solution
/*
const basicOp = () => {}
*/
// Function Export
module.exports = basicOp;
