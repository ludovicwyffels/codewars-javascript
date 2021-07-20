
const howManyLightsabersDoYouOwn = require('.');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(howManyLightsabersDoYouOwn()).toBe(0);
    expect(howManyLightsabersDoYouOwn('Adam')).toBe(0);
    expect(howManyLightsabersDoYouOwn('Zach')).toBe(18);
  });
});
