
const duplicateCount = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(duplicateCount('')).toBe(0);
    expect(duplicateCount('abcde')).toBe(0);
    expect(duplicateCount('aabbcde')).toBe(2);
    expect(duplicateCount('aabBcde')).toBe(2); // should ignore case
    expect(duplicateCount('Indivisibility')).toBe(1);
    expect(duplicateCount('Indivisibilities')).toBe(2); // characters may not be adjacent
  });
});
