
/*
  Title:
    Who likes it?
  Description:
    You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
    Implement the function likes which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
    likes [] -- must be "no one likes this"
    likes ["Peter"] -- must be "Peter likes this"
    likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
    likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
    likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

    Kata.Likes(new string[0]) => "no one likes this"
    Kata.Likes(new string[] {"Peter"}) => "Peter likes this"
    Kata.Likes(new string[] {"Jacob", "Alex"}) => "Jacob and Alex like this"
    Kata.Likes(new string[] {"Max", "John", "Mark"}) => "Max, John and Mark like this"
    Kata.Likes(new string[] {"Alex", "Jacob", "Mark", "Max"}) => "Alex, Jacob and 2 others like this"

    * return must be an allocated string
    * do not mutate input

    likes({})
        // should return "no one likes this"

    likes({"Peter"})
        // should return "Peter likes this"

    likes({"Jacob", "Alex"})
        // should return "Jacob and Alex like this"

    likes({"Max","John","Mark"})
        // should return "Max, John and Mark like this"

    likes({"Alex", "Jacob", "Mark", "Max"})
        // should return "Alex, Jacob and 2 others like this"

    likes {} // must be "no one likes this"
    likes {"Peter"} // must be "Peter likes this"
    likes {"Jacob", "Alex"} // must be "Jacob and Alex like this"
    likes {"Max", "John", "Mark"} // must be "Max, John and Mark like this"
    likes {"Alex", "Jacob", "Mark", "Max"} // must be "Alex, Jacob and 2 others like this"

    likes {} // must be "no one likes this"
    likes {"Peter"} // must be "Peter likes this"
    likes {"Jacob", "Alex"} // must be "Jacob and Alex like this"
    likes {"Max", "John", "Mark"} // must be "Max, John and Mark like this"
    likes {"Alex", "Jacob", "Mark", "Max"} // must be "Alex, Jacob and 2 others like this"

    likes([]) # must be "no one likes this"
    likes(["Peter"]) # must be "Peter likes this"
    likes(["Jacob", "Alex"]) # must be "Jacob and Alex like this"
    likes(["Max", "John", "Mark"]) # must be "Max, John and Mark like this"
    likes(["Alex", "Jacob", "Mark", "Max"]) # must be "Alex, Jacob and 2 others like this"

    likes([]) # must be "no one likes this"
    likes(["Peter"]) # must be "Peter likes this"
    likes(["Jacob", "Alex"]) # must be "Jacob and Alex like this"
    likes(["Max", "John", "Mark"]) # must be "Max, John and Mark like this"
    likes(["Alex", "Jacob", "Mark", "Max"]) # must be "Alex, Jacob and 2 others like this"

    likes([], "no one likes this").
    likes(["Peter"], "Peter likes this").
    likes(["Jacob", "Alex"], "Jacob and Alex like this").
    likes(["Max", "John", "Mark"], "Max, John and Mark like this").
    likes(["Alex", "Jacob", "Mark", "Max"], "Alex, Jacob and 2 others like this").

    likes(&[]) // must be "no one likes this"
    likes(&["Peter"]) // must be "Peter likes this"
    likes(&["Jacob", "Alex"]) // must be "Jacob and Alex like this"
    likes(&["Max", "John", "Mark"]) // must be "Max, John and Mark like this"
    likes(&["Alex", "Jacob", "Mark", "Max"]) // must be "Alex, Jacob and 2 others like this"

    For 4 or more names, the number in and 2 others simply increases.

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5266876b8f4bf2da9b000362
  Discuss Link:
    https://www.codewars.com/kata/5266876b8f4bf2da9b000362/discuss
  Solutions Link:
    https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions
*/
// Long Solution
function likes (names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
// Short Solution
const likesShort = (names) => {
  if (names.length === 0) return 'no one likes this';
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3) { return `${names[0]}, ${names[1]} and ${names[2]} like this`; };

  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
};

// Function Export
module.exports = {
  likes,
  likesShort
};
