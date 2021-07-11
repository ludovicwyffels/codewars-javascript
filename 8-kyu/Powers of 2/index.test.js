
const powersOfTwo = require('.');

describe('Basic Tests', function () {
  it('Testing for fixed tests', () => {
    expect(powersOfTwo(0)).toEqual([1]);
    expect(powersOfTwo(1)).toEqual([1, 2]);
    expect(powersOfTwo(4)).toEqual([1, 2, 4, 8, 16]);
  });
});
