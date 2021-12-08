import { map, pipe, reduce, split } from 'ramda';

export const part1 = pipe(
  split('\n'),
  map(split(' | ')),
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
