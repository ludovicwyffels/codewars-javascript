
const { likes, likesShort } = require('.');
describe('example tests', function () {
  it('should return correct text', function () {
    expect(likes([])).toBe('no one likes this');
    expect(likes(['Peter'])).toBe('Peter likes this');
    expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
    expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
  });

  it('short response should return correct text', function () {
    expect(likesShort([])).toBe('no one likes this');
    expect(likesShort(['Peter'])).toBe('Peter likes this');
    expect(likesShort(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
    expect(likesShort(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
    expect(likesShort(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
  });
});
