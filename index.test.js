const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times before 30 mins - 2:24', () => {
    const timeInWords = convertTimeToWords('2:24');
    expect(timeInWords).toBe('twenty four past two');
  });

  it('Handles times after 30 mins - 2:44', () => {
    const timeInWords = convertTimeToWords('2:44');
    expect(timeInWords).toBe('sixteen to three');
  });
});
