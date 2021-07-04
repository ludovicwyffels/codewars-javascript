const comp = require('.');
const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19
];
test('Are they the "same"', () => {
  expect(comp(a1, a2)).toBeTrue();
});
