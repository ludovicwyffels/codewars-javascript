global.Bomb = {
  key: 1,
  diffuse: jest.fn(),
  theBombsAreAllDiffused: true
};
global.BombKey = 2;

const { Bomb, diffuseTheBomb, random, arrayValueOf, obj } = require('.');

describe('Solution', function () {
  test('Overwrite compare', () => {
    expect(obj.valueOf()).toBe(9);
    expect(obj.valueOf()).toBe(11);
    expect(obj.valueOf()).toBe(11);
  });

  test('Overwrite Array valueOf', () => {
    // eslint-disable-next-line no-extend-native
    Array.prototype.valueOf = arrayValueOf;
    expect([1, 2].valueOf()).toBe(3);
  });

  test('Overwrite Math.random()', () => {
    Math.random = random;
    expect(Math.random().valueOf()).toBe(0.5);
    expect(Math.random().valueOf()).toBe(1);
  });

  test('Bomb', () => {
    expect(diffuseTheBomb()).toBeTrue();
    expect(Bomb.theBombsAreAllDiffused).toBeTrue();
  });
});
