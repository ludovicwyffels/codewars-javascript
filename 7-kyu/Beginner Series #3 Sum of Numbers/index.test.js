
const getSum = require('.');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(getSum(0, -1)).toBe(-1);
    expect(getSum(0, 1)).toBe(1);
  });

  it('extra', () => {
    expect(getSum(0, 0)).toBe(0);
    expect(getSum(1, 1)).toBe(1);
  });
});
