const friend = require('.');
test('3', () => {
  expect(friend(['Ryan', 'Kieran', 'Mark'])).toEqual(['Ryan', 'Mark']);
});

test('4', () => {
  expect(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])).toEqual(['Ryan']);
});

test('5', () => {
  expect(
    friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
  ).toEqual(['Jimm', 'Cari', 'aret']);
});

test('6', () => {
  expect(friend(['Love', 'Your', 'Face', '1'])).toEqual([
    'Love',
    'Your',
    'Face',
  ]);
});
