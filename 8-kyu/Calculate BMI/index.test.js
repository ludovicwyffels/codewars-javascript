
const bmi = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(bmi(80, 1.80)).toBe('Normal');
    expect(bmi(90, 1.80)).toBe('Overweight');
    expect(bmi(50, 1.80)).toBe('Underweight');
    expect(bmi(120, 1.80)).toBe('Obese');
  });
});
