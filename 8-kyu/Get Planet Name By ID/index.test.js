
const getPlanetName = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(getPlanetName(1)).toBe('Mercury');
    expect(getPlanetName(2)).toBe('Venus');
    expect(getPlanetName(3)).toBe('Earth');
    expect(getPlanetName(4)).toBe('Mars');
    expect(getPlanetName(5)).toBe('Jupiter');
    expect(getPlanetName(6)).toBe('Saturn');
    expect(getPlanetName(7)).toBe('Uranus');
    expect(getPlanetName(8)).toBe('Neptune');
  });
});
