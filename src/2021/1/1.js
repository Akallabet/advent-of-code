import { map, pipe, pluck, reduce, sum } from 'ramda';

export const part1 = pipe(
  map((value) => ({ value, increment: 0 })),
  reduce(
    (measurements, { value, increment }) => [
      ...measurements,
      {
        value,
        increment: measurements.length
          ? measurements[measurements.length - 1].value < value
            ? 1
            : 0
          : 0,
      },
    ],
    []
  ),
  pluck('increment'),
  sum
);
