
const { greetAbe, greetBen } = require('.');

describe('Solution', function () {
  it('should test for something', function () {
    expect(greetAbe()).toBe('Hello, Abe!');
    expect(greetBen()).toBe('Hello, Ben!');
  });
});
