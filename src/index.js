module.exports = function toReadable(number) {
  const dictionary = {
    0: 'zero',
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
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
  }

  if (number <= 20) {
    return dictionary[number];
  }

  if (number < 100) {
    return `${dictionary[number % 100 - number % 100 % 10]}${number % 100 % 10 != 0 ? ' ' + dictionary[number % 100 % 10] : ''}`;
  }

  if (number >= 100 && number < 1000) {
    return `${dictionary[Math.floor(number / 100)]} ${dictionary[100]}${number % 100 != 0 ? ' ' + toReadable(number % 100) : ''}`;
  }
}