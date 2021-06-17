const findShort = require('.');
test('1', () => {
  expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(
    3
  );
});

test('2', () => {
  expect(
    findShort(
      'turns out random test cases are easier than writing out basic ones'
    )
  ).toBe(3);
});

test('3', () => {
  expect(findShort("Let's travel abroad shall we")).toBe(2);
});
