const moveZeros = require('.');
test('Moving Zero To The End', () => {
  expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toEqual([
    1, 2, 1, 1, 3, 1, 0, 0, 0, 0,
  ]);
  expect(JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))).toEqual(
    JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
  );
});
