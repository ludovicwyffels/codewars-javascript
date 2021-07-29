
const getMiddle = require('.');
describe('GetMiddle', function () {
  it('Tests', function () {
    expect(getMiddle('test')).toBe('es');
    expect(getMiddle('testing')).toBe('t');
    expect(getMiddle('middle')).toBe('dd');
    expect(getMiddle('A')).toBe('A');
  });
});
