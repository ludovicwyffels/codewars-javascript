const abbrevName = require('.');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(abbrevName('Sam Harris')).toBe('S.H');
    expect(abbrevName('Patrick Feenan')).toBe('P.F');
    expect(abbrevName('Evan Cole')).toBe('E.C');
    expect(abbrevName('P Favuzzi')).toBe('P.F');
    expect(abbrevName('David Mendieta')).toBe('D.M');
  });
});
