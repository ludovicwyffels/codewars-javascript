/* eslint-disable camelcase */
const even_or_odd = require('.');
describe('Even or Odd', () => {
  test('Simple Test', () => {
    expect(even_or_odd(2)).toBe('Even');
    expect(even_or_odd(0)).toBe('Even');
    expect(even_or_odd(7)).toBe('Odd');
    expect(even_or_odd(1)).toBe('Odd');
  });
});
