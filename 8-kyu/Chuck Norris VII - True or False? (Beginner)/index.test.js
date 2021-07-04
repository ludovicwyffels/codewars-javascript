const ifChuckSaysSo = require('.');
describe('Example tests', () => {
  test('Simple test', () => {
    expect(ifChuckSaysSo()).toBe(false);
  });
});
