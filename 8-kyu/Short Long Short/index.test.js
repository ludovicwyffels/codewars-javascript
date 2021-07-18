
const solution = require('.');
describe('Sample tests', function () {
  it('Should pass sample tests', function () {
    expect(solution('45', '1')).toBe('1451');
    expect(solution('13', '200')).toBe('1320013');
    expect(solution('Soon', 'Me')).toBe('MeSoonMe');
    expect(solution('U', 'False')).toBe('UFalseU');
  });
});
