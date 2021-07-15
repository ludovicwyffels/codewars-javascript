
const mystery = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(mystery()).toStrictEqual({ sanity: 'Hello' });
  });
});
