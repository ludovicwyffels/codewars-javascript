
const lenCurve = require('.');
// const assertFuzzyEquals = function (actual, expected, msg) {
//   const inrange = Math.abs((actual - expected) / expected) <= 1e-6;
//   Test.expect(inrange, msg || 'At 1e-06: Expected value must be near ' + expected.toExponential(6) + ', but got ' + actual.toExponential(6));
// };

describe('lenCurve', function () {
  it('Basic tests', function () {
    expect(lenCurve(1)).toBe(1.414213562);
    expect(lenCurve(10)).toBe(1.478197397);
  });
});
