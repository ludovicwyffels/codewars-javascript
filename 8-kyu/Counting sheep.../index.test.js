const countSheeps = require('.');
describe('Tests', () => {
  it('Simple test', () => {
    const array1 = [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ];
    expect(countSheeps(array1)).toBe(17);
  });
});
