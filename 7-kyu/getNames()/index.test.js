
const getNames = require('.');

describe('Solution', function () {
  it('should test for something', function () {
    expect(
      getNames([
        { name: 'Joe', age: 20 },
        { name: 'Bill', age: 30 },
        { name: 'Kate', age: 23 }
      ])
    ).toEqual(['Joe', 'Bill', 'Kate']);
  });
});
