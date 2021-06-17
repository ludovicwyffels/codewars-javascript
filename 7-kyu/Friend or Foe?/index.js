/*
  Title:
    Friend or Foe?
  Description:
    Make a program that filters a list of strings and returns a list with only your friends name in it.
    If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
    Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
    i.e.
    friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
    
    Note: keep the original order of the names in the output.
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/55b42574ff091733d900002f
  Discuss Link:
    https://www.codewars.com/kata/55b42574ff091733d900002f/discuss
  Solutions Link:
    https://www.codewars.com/kata/55b42574ff091733d900002f/solutions
*/
// Long Solution
function friend(friends) {
  const m = [];
  for (const friend_ of friends) {
    if (friend_.length === 4) {
      m.push(friend_);
    }
  }
  return m;
}

// Function Export
module.exports = friend;