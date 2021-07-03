const findNeedle = require('.');
describe('Tests', () => {
  it('test', () => {
    const haystack1 = [
      '3',
      '123124234',
      undefined,
      'needle',
      'world',
      'hay',
      2,
      '3',
      true,
      false,
    ];
    const haystack2 = [
      '283497238987234',
      'a dog',
      'a cat',
      'some random junk',
      'a piece of hay',
      'needle',
      'something somebody lost a while ago',
    ];
    const haystack3 = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      8,
      7,
      5,
      4,
      3,
      4,
      5,
      6,
      67,
      5,
      5,
      3,
      3,
      4,
      2,
      34,
      234,
      23,
      4,
      234,
      324,
      324,
      'needle',
      1,
      2,
      3,
      4,
      5,
      5,
      6,
      5,
      4,
      32,
      3,
      45,
      54,
    ];

    expect(findNeedle(haystack1)).toBe('found the needle at position 3');
    expect(findNeedle(haystack2)).toBe('found the needle at position 5');
    expect(findNeedle(haystack3)).toBe('found the needle at position 30');
  });
});
