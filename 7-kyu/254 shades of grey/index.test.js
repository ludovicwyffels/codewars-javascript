const shadesOfGrey = require('.');

test('254 shades of grey', () => {
  expect(shadesOfGrey(1)).toEqual(['#010101']);
  expect(shadesOfGrey(10)).toEqual([
    '#010101',
    '#020202',
    '#030303',
    '#040404',
    '#050505',
    '#060606',
    '#070707',
    '#080808',
    '#090909',
    '#0a0a0a'
  ]);
  expect(shadesOfGrey(0)).toEqual([]);
  expect(shadesOfGrey(-1)).toEqual([]);
});
