// expecting time to be a string in the format like '8:15' or '12:30'
const digitMap = {
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
  if (digitMap[number]) {
    return digitMap[number]
  }
  const onesDigit = digitMap[number % 10];
  if (number < 20) {
    return `${onesDigit}teen`
  } else {
    return `twenty ${onesDigit}`
  }
}

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  }

  const [hour, minute] = time.split(':');
  const minuteNum = parseInt(minute);
  const hourNum = parseInt(hour);

  const hourWord = convertNumberToWords(hourNum);
  const hourPlusOneWord = convertNumberToWords(hourNum + 1)
  const minuteWord = convertNumberToWords(minuteNum);

  if (digitMap[minuteNum]) {
    return `${digitMap[minuteNum]} ${minuteNum > 30 ? hourPlusOneWord: hourWord}`
  }

  if (minuteNum < 30) {
    return `${minuteWord} past ${hourWord}`
  } else {
    return `${convertNumberToWords(60 - minuteNum)} to ${hourPlusOneWord}`
  }
}

module.exports = { convertTimeToWords };