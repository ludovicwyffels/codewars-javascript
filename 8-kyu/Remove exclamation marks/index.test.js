
const removeExclamationMarks = require('.');

describe('Tests', () => {
  it('test', () => {
    expect(removeExclamationMarks('Hello World!')).toBe('Hello World');
  });
});
