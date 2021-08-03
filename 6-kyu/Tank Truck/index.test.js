
const tankvol = require('.');
describe('Tank Volume', function () {
  it('Basic Tests', function () {
    expect(tankvol(5, 7, 3848)).toBe(2940);
    expect(tankvol(2, 7, 3848)).toBe(907);
  });
});
