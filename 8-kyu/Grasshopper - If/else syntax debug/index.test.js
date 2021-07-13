
const checkAlive = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(checkAlive(5)).toBe(true);
    expect(checkAlive(0)).toBe(false);
  });
});
