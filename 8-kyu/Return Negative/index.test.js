const makeNegative = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(makeNegative(42)).toBe(-42);
  });
});
