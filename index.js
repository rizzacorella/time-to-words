const timeMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  15: 'quarter past',
  20: 'twenty',
  30: 'half past',
  45: 'quarter to'
}

const convertNumberToWords = (number) => {
  if (timeMap[number]) {
    return timeMap[number];
  }
  const onesDigit = timeMap[number % 10];
  if (number < 20) {
    return `${onesDigit}teen`;
  } else {
    return `twenty ${onesDigit}`;
  }
}

class TimeComponent {
  digit
  word

  constructor(digit) {
    this.digit = typeof digit === 'string' ? parseInt(digit) : digit
    this.word = convertNumberToWords(this.digit)
  }
}

function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  }

  const [hour, minute] = time.split(':');
  const minuteComponent = new TimeComponent(minute);
  const hourComponent = new TimeComponent(hour);
  const nextHourComponent = new TimeComponent(parseInt(hour) + 1)

  if (timeMap[minuteComponent.digit]) {
    return `${timeMap[minuteComponent.digit]} ${minuteComponent.digit > 30 ? nextHourComponent.word: hourComponent.word}`;
  } else if (minuteComponent.digit < 30) {
    return `${minuteComponent.word} past ${hourComponent.word}`
  } else {
    return `${convertNumberToWords(60 - minuteComponent.digit)} to ${nextHourComponent.word}`;
  }
}

module.exports = { convertTimeToWords };