
/*
  Title:
    List Filtering
  Description:
    In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
    Example
    filter_list([1,2,'a','b']) == [1,2]
    filter_list([1,'a','b',0,15]) == [1,0,15]
    filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

    ListFilterer.GetIntegersFromList(new List<object>(){1, 2, "a", "b"}) => {1, 2}
    ListFilterer.GetIntegersFromList(new List<object>(){1, 2, "a", "b", 0, 15}) => {1, 2, 0, 15}
    ListFilterer.GetIntegersFromList(new List<object>(){1, 2, "a", "b", "aasf", "1", "123", 231}) => {1, 2, 231}

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
  Discuss Link:
    https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/discuss
  Solutions Link:
    https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions
*/
// Long Solution
function filterList (l) {
  return l.filter(el => Number.isInteger(el));
}

// Function Export
module.exports = filterList;
