
/*
  Title:
    Calculate BMI
  Description:
    Write function bmi that calculates body mass index (bmi = weight / height2).
    if bmi <= 18.5 return "Underweight"
    if bmi <= 25.0 return "Normal"
    if bmi <= 30.0 return "Overweight"
    if bmi > 30 return "Obese"

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/57a429e253ba3381850000fb
  Discuss Link:
    https://www.codewars.com/kata/57a429e253ba3381850000fb/discuss
  Solutions Link:
    https://www.codewars.com/kata/57a429e253ba3381850000fb/solutions
*/
// Long Solution
function bmi (weight, height) {
  let value;
  const bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    value = 'Underweight';
  } else if (bmi <= 25) {
    value = 'Normal';
  } else if (bmi <= 30) {
    value = 'Overweight';
  } else {
    value = 'Obese';
  }
  return value;
}

// Function Export
module.exports = bmi;
