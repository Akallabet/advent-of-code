import { findIndex, identity, join, map, pipe, reduce, sortBy, split, sum } from 'ramda';
const extractInput = pipe(split('\n'), map(split(' | ')));

export const part1 = pipe(
  extractInput,
  map(map(split(' '))),
  reduce(
    (instances, [, output]) =>
      instances +
      output.filter(
        (digit) =>
          digit.length === 2 || digit.length === 4 || digit.length === 3 || digit.length === 7
      ).length,
    0
  )
);

const findKnownPatterns = (digits) => ({
  1: digits.find((digit) => digit.length === 2),
  4: digits.find((digit) => digit.length === 4),
  7: digits.find((digit) => digit.length === 3),
  8: digits.find((digit) => digit.length === 7),
});

const findPatterns = (digits) => {
  const patterns = findKnownPatterns(digits);
  const sixSegmentsDigits = digits.filter((digit) => digit.length === 6);
  const fiveSegmentsDigits = digits.filter((digit) => digit.length === 5);

  patterns[9] = sixSegmentsDigits.find((digit) =>
    patterns[4].every((seg) => digit.indexOf(seg) !== -1)
  );
  patterns[0] = sixSegmentsDigits.find(
    (digit) => digit !== patterns[9] && patterns[1].every((seg) => digit.indexOf(seg) !== -1)
  );
  patterns[6] = sixSegmentsDigits.find((digit) => digit !== patterns[9] && digit !== patterns[0]);
  patterns[3] = fiveSegmentsDigits.find((digit) =>
    patterns[7].every((seg) => digit.indexOf(seg) !== -1)
  );
  patterns[5] = fiveSegmentsDigits.find(
    (digit) =>
      digit !== patterns[3] &&
      patterns[4].reduce((segCount, seg) => segCount + (digit.indexOf(seg) !== -1 ? 1 : 0), 0) === 3
  );
  patterns[2] = fiveSegmentsDigits.find((digit) => digit !== patterns[5] && digit !== patterns[3]);
  return Object.values({ ...patterns })
    .map(sortBy(identity))
    .map(join(''));
};

export const part2 = pipe(
  extractInput,
  map(([digits, output]) => [
    digits.split(' ').map((digit) => digit.split('').sort()),
    output.split(' ').map((digit) => digit.split('').sort()),
  ]),
  map(([digits, output]) => {
    const patterns = findPatterns(digits);
    return pipe(
      map(
        pipe(
          sortBy(identity),
          join(''),
          (digit) => findIndex((pattern) => digit === pattern, patterns),
          (index) => index
        )
      ),
      join(''),
      Number
    )(output);
  }),
  sum
);
