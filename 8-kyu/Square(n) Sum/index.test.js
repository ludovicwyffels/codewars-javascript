const squareSum = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(squareSum([1, 2])).toBe(5);
    expect(squareSum([0, 3, 4, 5])).toBe(50);
  });
});
