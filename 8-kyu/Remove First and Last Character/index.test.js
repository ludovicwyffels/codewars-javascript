const removeChar = require('.');

describe('Tests', () => {
  it('Fixed Tests', () => {
    expect(removeChar('eloquent')).toBe('loquen');
    expect(removeChar('country')).toBe('ountr');
    expect(removeChar('person')).toBe('erso');
    expect(removeChar('place')).toBe('lac');
    expect(removeChar('ooopsss')).toBe('oopss');
  });
});
