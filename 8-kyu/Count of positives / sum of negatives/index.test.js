const countPositivesSumNegatives = require('.');

describe('Example tests', () => {
  it('Testing for fixed test 1', () => {
    const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    expect(countPositivesSumNegatives(testData)).toEqual([10, -65]);
  });
  it('Testing for fixed test 2', () => {
    const testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    expect(countPositivesSumNegatives(testData)).toEqual([8, -50]);
  });
  it('Testing with empty array', () => {
    const testData = [];
    expect(countPositivesSumNegatives(testData)).toEqual([]);
  });
  it('Testing with undefined', () => {
    const testData = undefined;
    expect(countPositivesSumNegatives(testData)).toEqual([]);
  });
});
