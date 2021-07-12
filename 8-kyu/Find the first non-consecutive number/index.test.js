
const firstNonConsecutive = require('.');

describe('Fixed tests', () => {
  it('a simple example', function () {
    expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6);
  });
  it('a zero example', () => {
    expect(firstNonConsecutive([-3, -2, 0, 1, 2])).toBe(0);
  });
  it('a negative example', () => {
    expect(firstNonConsecutive([-3, -1, 0, 1, 2])).toBe(-1);
  });
  it('all sequential', () => {
    expect(firstNonConsecutive([1, 2, 3, 4])).toBe(null);
  });
  it('empty array', () => {
    expect(firstNonConsecutive([])).toBe(null);
  });
});
