
const zeroFill = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(zeroFill(11, 5)).toBe('00011');// zeroFill succeeds. All hail the Queen!
    expect(zeroFill(11, 11)).toBe('00000000011');// zeroFill succeeds. All hail the Queen!

    expect(zeroFill(-32, 5)).toBe('00032'); // zeroFill succeeds, even with negative number.
    expect(zeroFill(0, 3)).toBe('000'); // zeroFill succeeds, even with zero.
  });
});
