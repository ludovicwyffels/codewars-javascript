
const sumStr = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(sumStr('4', '5')).toBe('9');
    expect(sumStr('34', '5')).toBe('39');
  });
});
