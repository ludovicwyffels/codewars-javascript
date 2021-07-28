
const squareDigits = require('.');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(squareDigits(3212)).toBe(9414);
    expect(squareDigits(2112)).toBe(4114);
    expect(squareDigits(0)).toBe(0);
  });
});
