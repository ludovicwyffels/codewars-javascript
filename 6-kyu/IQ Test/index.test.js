const iqTest = require('.');
test('iqTest', () => {
  expect(iqTest('2 4 7 8 10')).toBe(3);
  expect(iqTest('1 2 2')).toBe(1);
  expect(iqTest('-1 -1')).toBe(0);
  expect(iqTest('0.75 0.75')).toBe(0);
});
