const solution = require('.');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(solution('world')).toBe('dlrow');
    expect(solution('hello')).toBe('olleh');
    expect(solution('')).toBe('');
    expect(solution('h')).toBe('h');
  });
});
