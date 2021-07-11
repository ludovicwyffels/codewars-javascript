
const countBy = require('.');

describe('Basic Tests', function () {
  it('Testing for fixed tests', () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
});
