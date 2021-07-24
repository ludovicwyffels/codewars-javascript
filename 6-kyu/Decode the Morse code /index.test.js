const decodeMorse = require('.');
describe('Example from description', function () {
  test('Morse example', function () {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
  });

  test('Basic Morse decoding', function () {
    expect(decodeMorse('.-')).toBe('A');
    expect(decodeMorse('.')).toBe('E');
    expect(decodeMorse('..')).toBe('I');
    expect(decodeMorse('. .')).toBe('EE');
    expect(decodeMorse('.   .')).toBe('E E');
    expect(decodeMorse('... --- ...')).toBe('SOS');
    expect(decodeMorse('...   ---   ...')).toBe('S O S');
  });

  test('More complex tests', function () {
    expect(decodeMorse(' . ')).toBe('E');
    expect(decodeMorse('   .   . ')).toBe('E E');
    expect(decodeMorse('      ... --- ... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ')).toBe('SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});
