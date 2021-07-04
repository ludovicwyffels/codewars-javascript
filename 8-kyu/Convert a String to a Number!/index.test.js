const stringToNumber = require('.');
describe('stringToNumber', function () {
  it('should work for the examples', function () {
    expect(stringToNumber('1234')).toBe(1234);
    expect(stringToNumber('605')).toBe(605);
    expect(stringToNumber('1405')).toBe(1405);
    expect(stringToNumber('-7')).toBe(-7);
  });
});
