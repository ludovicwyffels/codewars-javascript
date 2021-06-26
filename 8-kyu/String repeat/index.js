/*
  Title:
    String repeat
  Description:
    Write a function called repeatStr which repeats the given string string exactly n times.
    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
    
    repeat_str(6, "I") // "IIIIII"
    repeat_str(5, "Hello") // "HelloHelloHelloHelloHello"
    
    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
    
    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") //*"HelloHelloHelloHelloHello"
    
    6 "I" repeat-str ! "IIIIII"
    5 "Hello" repeat-str ! "HelloHelloHelloHelloHello"
    
    repeatStr(6, "I") -- "IIIIII"
    repeatStr(5, "Hello") -- "HelloHelloHelloHelloHello"
    
    repeat_str(6, "I") # "IIIIII"
    repeat_str(5, "Hello") # "HelloHelloHelloHelloHello"
    
    StringRepeat.repeatStr(6, "I") # "IIIIII"
    StringRepeat.repeatStr(5, "Hello") # "HelloHelloHelloHelloHello"
    
    repeatStr(6, "I") # "IIIIII"
    repeatStr(5, "Hello") # "HelloHelloHelloHelloHello"
    
    repeatstr(6, "I") # "IIIIII"
    repeatstr(5, "Hello") # "HelloHelloHelloHelloHello"
    
    repeatstr(6, "I") # "IIIIII"
    repeatstr(5, "Hello") # "HelloHelloHelloHelloHello"
    
    repeatString(6, "I") // "IIIIII"
    repeatString(5, "Hello") // "HelloHelloHelloHelloHello"
    
    (repeat-string 6 "I") ; "IIIIII"
    (repeat-string 5 "Hello") ; "HelloHelloHelloHelloHello"
    
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
  Discuss Link:
    https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/discuss
  Solutions Link:
    https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/solutions
*/

// Long Solution
/*
function repeatStr(n, s) {
  return s.repeat(n)
}
*/

// Short Solution
const repeatStr = (n, s) => s.repeat(n);

// Function Export
module.exports = repeatStr;
