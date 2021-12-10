import { map, pipe, reduce, sort, split } from 'ramda';

const openingChars = ['{', '(', '[', '<'];
const closingChars = ['}', ')', ']', '>'];
const errorValues = {
  '}': 1197,
  ')': 3,
  ']': 57,
  '>': 25137,
};
const pointValues = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

export const getSintaxOpenings = (chars, i, currOpeningChars = []) => {
  if (i === chars.length) return currOpeningChars;
  if (openingChars.indexOf(chars[i]) !== -1)
    return getSintaxOpenings(chars, i + 1, [...currOpeningChars, chars[i]]);
  if (
    closingChars.indexOf(chars[i]) !== -1 &&
    currOpeningChars[currOpeningChars.length - 1] === openingChars[closingChars.indexOf(chars[i])]
  ) {
    return getSintaxOpenings(chars, i + 1, currOpeningChars.slice(0, currOpeningChars.length - 1));
  }
  if (
    closingChars.indexOf(chars[i]) !== -1 &&
    currOpeningChars[currOpeningChars.length - 1] !== openingChars[closingChars.indexOf(chars[i])]
  )
    return { error: chars[i] };
};

const sintaxErrors = reduce((errors, sintax) => {
  const sintaxOpening = getSintaxOpenings(sintax, 0, []);
  return sintaxOpening.error ? [...errors, sintaxOpening.error] : errors;
}, []);

const sumErrorValues = reduce((total, err) => total + errorValues[err], 0);

const getClosingSintaxFromOpening = reduce(
  (closing, char) => [closingChars[openingChars.indexOf(char)], ...closing],
  []
);
const getClosingSintaxes = reduce((closingSintaxes, sintax) => {
  const sintaxOpening = getSintaxOpenings(sintax, 0, []);
  return !sintaxOpening.error
    ? [...closingSintaxes, getClosingSintaxFromOpening(sintaxOpening)]
    : closingSintaxes;
}, []);

const calcOpeningSintaxScore = reduce((total, char) => 5 * total + pointValues[char], 0);
const getMiddleScore = (scores) => scores[Math.floor(scores.length / 2)];
export const part1 = pipe(split('\n'), map(split('')), sintaxErrors, sumErrorValues);

export const part2 = pipe(
  split('\n'),
  map(split('')),
  getClosingSintaxes,
  map(calcOpeningSintaxScore),
  sort((a, b) => a - b),
  getMiddleScore
);
