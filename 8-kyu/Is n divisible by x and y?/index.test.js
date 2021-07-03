const isDivisible = require('.');

describe('Basic tests', () => {
  it('Fixed Tests', () => {
    expect(isDivisible(3, 3, 4)).toBe(false);
    expect(isDivisible(12, 3, 4)).toBe(true);
    expect(isDivisible(8, 3, 4)).toBe(false);
    expect(isDivisible(48, 3, 4)).toBe(true);
  });
});
