
const DNAStrand = require('.');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(DNAStrand('AAAA')).toBe('TTTT');
    expect(DNAStrand('ATTGC')).toBe('TAACG');
    expect(DNAStrand('GTAT')).toBe('CATA');
  });
});
