
const rot13 = require('.');

test('1', () => {
  expect(rot13('test')).toBe('grfg');
});

test('2', () => {
  expect(rot13('Test')).toBe('Grfg');
});
