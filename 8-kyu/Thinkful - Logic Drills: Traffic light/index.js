
/*
  Title:
    Thinkful - Logic Drills: Traffic light
  Description:
    You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
    Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
    For example, update_light('green') should return 'yellow'.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/58649884a1659ed6cb000072
  Discuss Link:
    https://www.codewars.com/kata/58649884a1659ed6cb000072/discuss
  Solutions Link:
    https://www.codewars.com/kata/58649884a1659ed6cb000072/solutions
*/
// Long Solution
function updateLight (current) {
  return ({
    green: 'yellow',
    yellow: 'red',
    red: 'green'
  }[current]);
}
// Short Solution
/*
const updateLight = () => {}
*/
// Function Export
module.exports = updateLight;
