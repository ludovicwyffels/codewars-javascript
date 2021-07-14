
const getRealFloor = require('.');

describe('Tests', () => {
  it('test', () => {
    expect(getRealFloor(0)).toBe(0);
    expect(getRealFloor(1)).toBe(0);
    expect(getRealFloor(5)).toBe(4);
    expect(getRealFloor(13)).toBe(12);
    expect(getRealFloor(15)).toBe(13);
    expect(getRealFloor(20)).toBe(18);
    expect(getRealFloor(-1)).toBe(-1);
  });
});
