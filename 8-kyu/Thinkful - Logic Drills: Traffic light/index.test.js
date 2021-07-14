
const updateLight = require('.');
test('Sample tests', function () {
  expect(updateLight('green')).toBe('yellow');
  expect(updateLight('yellow')).toBe('red');
  expect(updateLight('red')).toBe('green');
});
