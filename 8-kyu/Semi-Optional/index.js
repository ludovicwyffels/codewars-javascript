
/*
  Title:
    Semi-Optional
  Description:
    We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new Javascript Object setting  the 'value' key on the new Object to the passed-in value.
    So, for example, if we execute the following code:
    var wrappedObj = wrap("MyWrappedString");
     // wrappedObject should be  {"value":"MyWrappedString"}

    We would then expect the following statement to be true:
    wrappedObj.value === "MyWrappedString"

    Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/521cd52e790405a74800032c
  Discuss Link:
    https://www.codewars.com/kata/521cd52e790405a74800032c/discuss
  Solutions Link:
    https://www.codewars.com/kata/521cd52e790405a74800032c/solutions
*/
// Long Solution
function wrap (value) {
  return { value };
}
// Short Solution
/*
const wrap = () => {}
*/
// Function Export
module.exports = wrap;
