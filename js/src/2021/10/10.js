import { includes, map, pipe, reduce, sort, split } from 'ramda';

const openingChunks = ['{', '(', '[', '<'];
const closingChunks = ['}', ')', ']', '>'];
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

export const getSintaxOpenings = (chunks, i, currOpeningChunks = []) => {
  if (i === chunks.length) return currOpeningChunks;
  if (includes(chunks[i], openingChunks))
    return getSintaxOpenings(chunks, i + 1, [...currOpeningChunks, chunks[i]]);
  if (
    includes(chunks[i], closingChunks) &&
    currOpeningChunks[currOpeningChunks.length - 1] ===
      openingChunks[closingChunks.indexOf(chunks[i])]
  ) {
    return getSintaxOpenings(
      chunks,
      i + 1,
      currOpeningChunks.slice(0, currOpeningChunks.length - 1)
    );
  }
  if (
    includes(chunks[i], closingChunks) &&
    currOpeningChunks[currOpeningChunks.length - 1] !==
      openingChunks[closingChunks.indexOf(chunks[i])]
  )
    return { error: chunks[i] };
};

const sintaxErrors = reduce((errors, sintax) => {
  const sintaxOpening = getSintaxOpenings(sintax, 0, []);
  return sintaxOpening.error ? [...errors, sintaxOpening.error] : errors;
}, []);

const sumErrorValues = reduce((total, err) => total + errorValues[err], 0);

const getClosingSintaxFromOpening = reduce(
  (closing, char) => [closingChunks[openingChunks.indexOf(char)], ...closing],
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
const extractInput = pipe(split('\n'), map(split('')));

export const part1 = pipe(extractInput, sintaxErrors, sumErrorValues);
export const part2 = pipe(
  extractInput,
  getClosingSintaxes,
  map(calcOpeningSintaxScore),
  sort((a, b) => a - b),
  getMiddleScore
);
