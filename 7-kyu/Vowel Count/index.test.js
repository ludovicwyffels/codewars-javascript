const getCount = require('.');

describe('Case 1', function () {
  it('should be defined', function () {
    expect(getCount('abracadabra')).toBe(5);
    expect(getCount('pear tree')).toBe(4);
    expect(getCount('o a kak ushakov lil vo kashu kakao')).toBe(13);
    expect(getCount('my pyx')).toBe(0);
  });
});
