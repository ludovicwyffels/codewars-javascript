/*
  Title:
    Roman Numerals Encoder
  Description:
    Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
    Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
    Example:
    solution(1000); // should return 'M'
    
    solution(1000) # should return 'M'
    
    solution(1000) # should return 'M'
    
    solution(1000) # should return 'M'
    
    solution 1000 -- should return "M"
    
    conversion.solution(1000); //should return "M"
    
    solution(1000); // should return 'M'
    
    solution(1000); // should return "M"
    
    solution(1000); // should return "M"
    
    RomanConvert.Solution(1000) -- should return "M"
    
    solution(1000) // should return "M"
    
    solution(1000) # should return "M"
    
    solution(1000) # should return "M"
    
    solution(1000); // => "M"
    
    solution(1000) # should return "M"
    
    romanEncoder(1000) -- should return 'M'
    
    Roman.encode(1000) // should return "M"
    
    encode(1000) // should return "M"
    
    (solution 1000) ;; should return "M"
    
    encoderomannumeral(1000) # should return "M"
    
    Help:
    Symbol    Value
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1,000
    
    Remember that there can't be more than 3 identical symbols in a row.
    More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
    
  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/51b62bf6a9c58071c600001b
  Discuss Link:
    https://www.codewars.com/kata/51b62bf6a9c58071c600001b/discuss
  Solutions Link:
    https://www.codewars.com/kata/51b62bf6a9c58071c600001b/solutions
*/
// Long Solution
function solutionLong(number, str = '') {
  if (number >= 1000) {
    str += 'M';
    number -= 1000;
  } else if (number >= 900) {
    str += 'CM';
    number -= 900;
  } else if (number >= 800) {
    str += 'DCCC';
    number -= 800;
  } else if (number >= 700) {
    str += 'DCC';
    number -= 700;
  } else if (number >= 600) {
    str += 'DC';
    number -= 600;
  } else if (number >= 500) {
    str += 'D';
    number -= 500;
  } else if (number >= 400) {
    str += 'CD';
    number -= 400;
  } else if (number >= 300) {
    str += 'CCC';
    number -= 300;
  } else if (number >= 200) {
    str += 'CC';
    number -= 200;
  } else if (number >= 100) {
    str += 'C';
    number -= 100;
  } else if (number >= 90) {
    str += 'XC';
    number -= 90;
  } else if (number >= 80) {
    str += 'LXXX';
    number -= 80;
  } else if (number >= 70) {
    str += 'LXX';
    number -= 70;
  } else if (number >= 60) {
    str += 'LX';
    number -= 60;
  } else if (number >= 50) {
    str += 'L';
    number -= 50;
  } else if (number >= 40) {
    str += 'XL';
    number -= 40;
  } else if (number >= 30) {
    str += 'XXX';
    number -= 30;
  } else if (number >= 20) {
    str += 'XX';
    number -= 20;
  } else if (number >= 10) {
    str += 'X';
    number -= 10;
  } else if (number >= 9) {
    str += 'IX';
    number -= 9;
  } else if (number >= 8) {
    str += 'VIII';
    number -= 8;
  } else if (number >= 7) {
    str += 'VII';
    number -= 7;
  } else if (number >= 6) {
    str += 'VI';
    number -= 6;
  } else if (number >= 5) {
    str += 'V';
    number -= 5;
  } else if (number >= 4) {
    str += 'IV';
    number -= 4;
  } else if (number >= 3) {
    str += 'III';
    number -= 3;
  } else if (number >= 2) {
    str += 'II';
    number -= 2;
  } else if (number >= 1) {
    str += 'I';
    number -= 1;
  }
  return number ? solutionLong(number, str) : str;
}

// Long Solution - reduce cognitive complexity
function solutionLong2(number, str = '') {
  if (number >= 1000) {
    str += 'M';
    number -= 1000;
  } else if (number >= 900) {
    str += 'CM';
    number -= 900;
  } else if (number >= 500) {
    str += 'D';
    number -= 500;
  } else if (number >= 400) {
    str += 'CD';
    number -= 400;
  } else if (number >= 100) {
    str += 'C';
    number -= 100;
  } else if (number >= 90) {
    str += 'XC';
    number -= 90;
  } else if (number >= 50) {
    str += 'L';
    number -= 50;
  } else if (number >= 40) {
    str += 'XL';
    number -= 40;
  } else if (number >= 10) {
    str += 'X';
    number -= 10;
  } else if (number >= 9) {
    str += 'IX';
    number -= 9;
  } else if (number >= 5) {
    str += 'V';
    number -= 5;
  } else if (number >= 4) {
    str += 'IV';
    number -= 4;
  } else if (number >= 1) {
    str += 'I';
    number -= 1;
  }
  return number ? solutionLong(number, str) : str;
}

// Short Solution
function solutionShort(number) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let rest = number;

  let str = '';
  for (const iterator of Object.keys(roman)) {
    const quantity = Math.floor(rest / roman[iterator]);
    rest -= quantity * roman[iterator];
    // Console.log(`${number} = (${quantity} * ${roman[iterator]}) + ${rest}`);
    str += iterator.repeat(quantity);
    if (rest === 0) break;
  }
  return str;
}

// Function Export
module.exports = {
  solutionLong,
  solutionLong2,
  solutionShort,
};
