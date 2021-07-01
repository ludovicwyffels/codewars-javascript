const SmallestIntegerFinder = require('.');

describe('Smallest Integer Tests', () => {
  let sif = new SmallestIntegerFinder();
  it('Fixed Tests', () => {
    expect(sif.findSmallestInt([78, 56, 232, 12, 8])).toBe(8);
    expect(sif.findSmallestInt([78, 56, 232, 12, 18])).toBe(12);
    expect(sif.findSmallestInt([78, 56, 232, 412, 228])).toBe(56);
    expect(sif.findSmallestInt([78, 56, 232, 12, 0])).toBe(0);
    expect(sif.findSmallestInt([1, 56, 232, 12, 8])).toBe(1);
  });
});
