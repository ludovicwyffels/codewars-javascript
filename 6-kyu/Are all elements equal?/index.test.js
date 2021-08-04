
require('.');

describe('Are all elements equal?', () => {
  it('String argument', () => {
    expect('aaaaa'.eqAll()).toBe(true);
    expect('abcde'.eqAll()).toBe(false);
    expect(''.eqAll()).toBe(true);
  });
  it('Array argument', () => {
    expect([0, 0, 0].eqAll()).toBe(true);
    expect([0, 1, 2].eqAll()).toBe(false);
    expect([].eqAll()).toBe(true);
  });
});
