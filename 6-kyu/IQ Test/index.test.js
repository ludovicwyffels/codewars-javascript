const iqTest = require('.');
test('2', () => {
  expect(iqTest('2 4 7 8 10')).toBe(3);
});

test('3', () => {
  expect(iqTest('1 2 2')).toBe(1);
});
