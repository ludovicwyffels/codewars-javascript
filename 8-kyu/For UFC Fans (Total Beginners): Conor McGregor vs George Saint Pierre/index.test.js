const quote = require('.');
describe('Tests', () => {
  it('test', () => {
    expect(quote('george saint pierre')).toBe(
      'I am not impressed by your performance.'
    );
    expect(quote('conor mcgregor')).toBe(
      "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    );

    expect(quote('George Saint Pierre')).toBe(
      'I am not impressed by your performance.'
    );
    expect(quote('Conor McGregor')).toBe(
      "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    );
    expect(quote('Conor')).toBe(
      'Who are you?'
    );
  });
});
