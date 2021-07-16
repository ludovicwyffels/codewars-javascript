
const wrap = require('.');
test('Fixed tests', function () {
  const res = wrap('MyTest');
  expect(typeof res).toBe('object');
  expect(res.value).toBe('MyTest');
  expect(wrap(343).value).toBe(343);
  const obj = { test: 'testy' };
  expect(wrap(obj).value).toBe(obj);
});
