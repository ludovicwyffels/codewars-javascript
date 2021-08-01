
/*
  Title:
    Credit Card Mask
  Description:
    Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
    Your task is to write a function maskify, which changes all but the last four characters into '#'.
    Examples
    maskify("4556364607935616") == "############5616"
    maskify(     "64607935616") ==      "#######5616"
    maskify(               "1") ==                "1"
    maskify(                "") ==                 ""

    // "What was the name of your first pet?"
    maskify("Skippy")                                   == "##ippy"
    maskify("Nananananananananananananananana Batman!") == "####################################man!"

    maskify("4556364607935616") == "############5616"
    maskify(     "64607935616") ==      "#######5616"
    maskify(               "1") ==                "1"
    maskify(                "") ==                 ""

    # "What was the name of your first pet?"
    maskify("Skippy")                                   == "##ippy"
    maskify("Nananananananananananananananana Batman!") == "####################################man!"

    maskify("4556364607935616") == "############5616"
    maskify(     "64607935616") ==      "#######5616"
    maskify(               "1") ==                "1"
    maskify(                "") ==                 ""

    # "What was the name of your first pet?"
    maskify("Skippy")                                   == "##ippy"
    maskify("Nananananananananananananananana Batman!") == "####################################man!"

    maskify "4556364607935616" == "############5616"
    maskify      "64607935616" ==      "#######5616"
    maskify                "1" ==                "1"
    maskify                 "" ==                 ""

    -- "What was the name of your first pet?"
    maskify "Skippy" == "##ippy"
    maskify "Nananananananananananananananana Batman!"
         -- "####################################man!"

    maskify('4556364607935616') # should return '############5616'
    maskify('64607935616')      # should return '#######5616'
    maskify('1')                # should return '1'
    maskify('')                 # should return ''

    # "What was the name of your first pet?"
    maskify('Skippy')                                   # should return '##ippy'
    maskify('Nananananananananananananananana Batman!') # should return '####################################man!'

    Kata.Maskify("4556364607935616"); // should return "############5616"
    Kata.Maskify("64607935616");      // should return "#######5616"
    Kata.Maskify("1");                // should return "1"
    Kata.Maskify("");                 // should return ""

    // "What was the name of your first pet?"
    Kata.Maskify("Skippy");                                   // should return "##ippy"
    Kata.Maskify("Nananananananananananananananana Batman!"); // should return "####################################man!"

    Maskify.Maskify("4556364607935616"); // should return "############5616"
    Maskify.Maskify("64607935616");      // should return "#######5616"
    Maskify.Maskify("1");                // should return "1"
    Maskify.Maskify("");                 // should return ""

    // "What was the name of your first pet?"
    Maskify.Maskify("Skippy");                                   // should return "##ippy"
    Maskify.Maskify("Nananananananananananananananana Batman!"); // should return "####################################man!"

    maskify("4556364607935616") == String::from("############5616");
    maskify("64607935616") == String::from("#######5616");
    maskify("1") == String::from("1");
    maskify("") == String::from("");

    // "What was the name of your first pet?"
    maskify("Skippy") == String::from("##ippy");
    maskify("Nananananananananananananananana Batman!") ==String::from("####################################man!");

    maskify("4556364607935616") // should return "############5616"
    maskify("64607935616")      // should return "#######5616"
    maskify("1")                // should return "1"
    maskify("")                 // should return ""

    // "What was the name of your first pet?"
    maskify("Skippy")                                   // should return "##ippy"
    maskify("Nananananananananananananananana Batman!") // should return "####################################man!"

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/5412509bd436bd33920011bc
  Discuss Link:
    https://www.codewars.com/kata/5412509bd436bd33920011bc/discuss
  Solutions Link:
    https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions
*/
// Long Solution
function maskify (cc) {
  return cc.replace(/.(?=.{4})/g, '#');
}

// Short Solution
/*
const  = () => {}
*/
// Function Export
module.exports = maskify;
