import { capitalizeFirstLetter, numberWithSpaces } from './helper';

describe('Helper test', () => {
  test('Должен вернуть отформатированную строку 1 000 000', () => {
    const formatNumber = numberWithSpaces('1000000');

    expect(formatNumber).toBe('1 000 000');
  });

  test('Должен вернуть строку с заглавной буквы', () => {
    const formatString = capitalizeFirstLetter('some string');

    expect(formatString).toBe('Some string');
  });
});