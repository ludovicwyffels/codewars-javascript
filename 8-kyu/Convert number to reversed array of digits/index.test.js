const digitize = require('.');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
  });
});
