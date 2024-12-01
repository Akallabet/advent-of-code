import { pipe, sum } from 'ramda';

const totalIncrements = (measurements) =>
  measurements.reduce(
    (incr, measurement, i) => incr + (i > 0 && (measurements[i - 1] < measurement ? 1 : 0)) || 0,
    0
  );

export const part1 = totalIncrements;

export const part2 = pipe(
  (measurements) => measurements.map((_, i) => sum(measurements.slice(i - 3, i))),
  totalIncrements
);
