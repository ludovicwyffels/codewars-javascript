const greet = require('.');

describe('Testing function', function () {
  it('Is it a function?', function () {
    expect(typeof greet).toBe('function');
  });
  it('Correct return-value?', function () {
    expect(greet()).toBe('hello world!');
  });
});
