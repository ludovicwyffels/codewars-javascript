
const mouthSize = require('.');

test('Basic tests', () => {
  expect(mouthSize('toucan')).toBe('wide');
  expect(mouthSize('ant bear')).toBe('wide');
  expect(mouthSize('alligator')).toBe('small');
});
