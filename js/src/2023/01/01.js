function getOnlyNumbers (line) {
  return line.split('').filter(c => !isNaN(c))
}

const validWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const lettersToNums = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9'
}

export function getNumbersAndLetters (line) {
  const digits = []
  for (let i = 0; i < line.length; i++) {
    if (!isNaN(line[i])) digits.push((line[i])) 
    else {
    for (const word of validWords) {
      if (line.substring(i, i + word.length) === word) {
	  digits.push(lettersToNums[word])
      }
    }
    }
  }
  return digits.length  === 1 ? [digits[0],digits[0]] : digits
}

export function trebuchetPart1 (values) {
  return values
    .split('\n')
    .map(line => line.split('').filter(c => !isNaN(c)))
    .filter(numbers => numbers.length > 0)
    .map(numbers =>
      numbers[0] + (numbers[numbers.length - 1] || '')
    ).map(Number)
    .reduce((total, n) => total + n, 0)
}

export default function trebuchetPart2 (values) {
  return values
    .split('\n')
    .map(getNumbersAndLetters)
    .filter(numbers => numbers.length > 0)
    .map(numbers =>
      numbers[0] + (numbers[numbers.length - 1] || '')).map(Number)
    .reduce((total, n) => total + n, 0)
}
