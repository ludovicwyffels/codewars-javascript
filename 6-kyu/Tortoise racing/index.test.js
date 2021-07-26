
const race = require('.');
describe('Tortoise Racing', function () {
  it('Basic tests', function () {
    expect(race(720, 850, 70)).toEqual([0, 32, 18]);
    expect(race(80, 91, 37)).toEqual([3, 21, 49]);
    expect(race(80, 100, 40)).toEqual([2, 0, 0]);
  });

  it('v1 >= v2', function () {
    expect(race(50, 30, 4)).toBe(null);
    expect(race(50, 50, 4)).toBe(null);
  });
});
