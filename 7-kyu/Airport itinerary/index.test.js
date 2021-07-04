const itinerary = require('.');
test('2', () => {
  expect(itinerary([{ in: 'TRN', out: 'FCO' }])).toBe('TRN-FCO');
});

test('6', () => {
  expect(
    itinerary([
      { in: 'TRN', out: 'FCO' },
      { in: 'CIA', out: 'JFK' }
    ])
  ).toBe('TRN-FCO-CIA-JFK');
});

test('10', () => {
  expect(
    itinerary([
      { in: 'TRN', out: 'FCO' },
      { in: 'FCO', out: 'JFK' }
    ])
  ).toBe('TRN-FCO-JFK');
});
