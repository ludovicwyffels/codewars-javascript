/*
  Title:
    A Needle in the Haystack
  Description:
    Can you find the needle in the haystack?
    Write a function findNeedle() that takes an array full of junk but containing one "needle"
    After your function finds the needle it should return a message (as a string) that says:
    "found the needle at position " plus the index it found the needle, so: 
    find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
    
    find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
    
    find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
    
    findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
    
    findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
    
    findNeedle(new Object[] {"hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"})
    
    findNeedle ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
    
    (find-needle '("hay" "junk" "hay" "hay" "moreJunk" "needle","randomJunk"))
    
    should return "found the needle at position 5"
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
  Discuss Link:
    https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/discuss
  Solutions Link:
    https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/solutions
*/
// Long Solution
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}
// Short Solution
/*
const findNeedle = () => {}
*/
// Function Export
module.exports = findNeedle;
