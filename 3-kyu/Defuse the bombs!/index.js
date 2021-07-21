/* eslint-disable no-undef */

/*
  Title:
    Defuse the bombs!
  Description:
    There are a series of 10 bombs about to go off!  Defuse them all!  Simple, right?
    Note: This is not an ordinary Kata, but more of a series of puzzles.  The point is to figure out what you are supposed to do, then how to do it.  Instructions are intentionally left vague.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/54d558c72a5e542c0600060f
  Discuss Link:
    https://www.codewars.com/kata/54d558c72a5e542c0600060f/discuss
  Solutions Link:
    https://www.codewars.com/kata/54d558c72a5e542c0600060f/solutions
*/

// Long Solution
// Defuse all of the Bombs!

// Bomb #1: Bomb.key => 42
Bomb.diffuse(Bomb.key);

// Bomb #2: Call it five times
for (let i = 0; i < 5; ++i) {
  Bomb.diffuse();
}

// Bomb #3: Check the globals
Bomb.diffuse(BombKey);

// Bomb #4; Manually define the global function
const diffuseTheBomb = () => true;
Bomb.diffuse();

// Bomb #5: decode the string
// VGhlIGtleSBpcyAiMy4xNDE1OSI= (base64)
// console.log(window.atob("VGhlIGtleSBpcyAiMy4xNDE1OSI")) => The key is "3.14159"
Bomb.diffuse(3.14159);

// Bomb #6: Exactly 4 years ago...
const date = new Date();
date.setYear(date.getFullYear() - 4);
Bomb.diffuse(date);

// Bomb #7: Is it freezing in here?
Bomb.diffuse(Object.freeze({ key: 43 }));

// Bomb #8: Compare ops call valueOf(), we need state machine
const obj = {
  valueOf: () => {
    // Return 9 on first call, then 11 forever
    if (!this.used) {
      this.used = true;
      return 9;
    }
    return 11;
  }
};
Bomb.diffuse(obj);

// Bomb #9: Math.random, we need state machine
// 42, Math.ramdom()^3
Math.random = function () {
  return {
    valueOf: () => {
      // Return 0.5 on first call, then 1 forever
      if (!this.used) {
        this.used = true;
        return 0.5;
      }
      return 1;
    }
  };
};
Bomb.diffuse(42);

// Bomb #10: Did you enjoy the little challenge?
// 'yes' in base64
// eslint-disable-next-line no-extend-native
Array.prototype.valueOf = function () {
  // Compute sum
  return this.reduce((sum, cur) => sum + cur);
};
Bomb.diffuse(Buffer.from('yes').toString('base64'));

// console.log('bomb', Bomb);

// Function Export
module.exports = {
  Bomb,
  diffuseTheBomb,
  random: Math.random,
  arrayValueOf: Array.prototype.valueOf,
  obj
};
