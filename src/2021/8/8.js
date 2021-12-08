import { indexOf, join, map, pipe, reduce, sort, split, sum, tap } from 'ramda';

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
const digitsOrder = ['d', 'e', 'a', 'f', 'g', 'b', 'c'];
const digitsMapping = [
  'ab',
  'dafgc',
  'dafbc',
  'eafb',
  'defbc',
  'defgbc',
  'dab',
  'deafgbc',
  'deafbc',
];
const sortDigits = sort((a, b) => digitsOrder.indexOf(a) - digitsOrder.indexOf(b));
const decode = pipe(
  map(sortDigits),
  map((d) => digitsMapping.indexOf(d) + 1),
  join(''),
  Number
);

export const part2 = pipe(
  extractInput,
  map(([segments, output]) => decode(output)),
  sum
);
