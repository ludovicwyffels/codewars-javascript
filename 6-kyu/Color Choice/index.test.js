
const checkchoose = require('.');
describe('Basic tests', function () {
  it('Small numbers', function () {
    expect(checkchoose(6, 4)).toBe(2);
    expect(checkchoose(4, 4)).toBe(1);
    expect(checkchoose(4, 2)).toBe(-1);
    expect(checkchoose(35, 7)).toBe(3);
    expect(checkchoose(36, 7)).toBe(-1);
  });
});
