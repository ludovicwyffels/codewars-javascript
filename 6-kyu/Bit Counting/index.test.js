
const countBits = require('.');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(countBits(0)).toBe(0);
    expect(countBits(4)).toBe(1);
    expect(countBits(7)).toBe(3);
    expect(countBits(9)).toBe(2);
    expect(countBits(10)).toBe(2);
  });
});
