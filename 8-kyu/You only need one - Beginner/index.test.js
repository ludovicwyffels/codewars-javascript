const check = require('.');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(check([66, 101], 66)).toBe(true);
    expect(check([101, 45, 75, 105, 99, 107], 107)).toBe(true);
    expect(check(['t', 'e', 's', 't'], 'e')).toBe(true);
    expect(check(['what', 'a', 'great', 'kata'], 'kat')).toBe(false);
  });
});
