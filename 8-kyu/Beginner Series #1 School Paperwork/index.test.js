const paperwork = require('.');

describe('Simple Tests', function () {
  it('Testing for fixed tests', () => {
    expect(paperwork(5, 5)).toBe(25);
    expect(paperwork(5, -5)).toBe(0);
  });
});
