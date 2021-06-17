const rgb = require('.');
test('2', () => {
  expect(rgb(0, 0, 0)).toBe('000000');
});

test('3', () => {
  expect(rgb(0, 0, -20)).toBe('000000');
});

test('4', () => {
  expect(rgb(300, 255, 255)).toBe('FFFFFF');
});

test('5', () => {
  expect(rgb(173, 255, 47)).toBe('ADFF2F');
});
