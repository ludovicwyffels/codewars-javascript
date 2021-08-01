
const maskify = require('.');
describe('maskify', function () {
  it('should work for some examples', function () {
    expect(maskify('4556364607935616')).toBe('############5616');
    expect(maskify('1')).toBe('1');
    expect(maskify('11111')).toBe('#1111');
  });
});
