
const replaceDots = require('.');
describe('Example Tests', function () {
  it('test dots', function () {
    expect(replaceDots('one.two.three')).toBe('one-two-three');
  });
});
