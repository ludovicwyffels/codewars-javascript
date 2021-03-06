const closeCompare = require('.');

describe('Tests', () => {
  it('Sample tests', () => {
    expect(closeCompare(4, 5)).toBe(-1);
    expect(closeCompare(5, 5)).toBe(0);
    expect(closeCompare(6, 5)).toBe(1);
    expect(closeCompare(-6, -5)).toBe(-1);

    expect(closeCompare(2, 5, 3)).toBe(0);
    expect(closeCompare(8.1, 5, 3)).toBe(1);
    expect(closeCompare(1.99, 5, 3)).toBe(-1);
  });
});
