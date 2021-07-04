const cockroachSpeed = require('.');

describe('Basic Tests', function () {
  it('Testing for fixed tests', () => {
    expect(cockroachSpeed(1.08)).toBe(30);
    expect(cockroachSpeed(1.09)).toBe(30);
    expect(cockroachSpeed(0)).toBe(0);
  });
});
