
require('.');

describe('Tests', () => {
  it('test', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers.square()).toEqual([1, 4, 9, 16, 25]);
    expect(numbers.cube()).toEqual([1, 8, 27, 64, 125]);
    expect(numbers.sum()).toBe(15); // Wrong sum
    expect(numbers.average()).toBe(3); // Wrong average
    expect(numbers.even()).toEqual([2, 4]); // Wrong result for even()
    expect(numbers.odd()).toEqual([1, 3, 5]); // Wrong result for odd()
  });
});
