import { addIndex, map, pipe, sum } from 'ramda';

const mapWithMeasurements = (predicate) => (measurements) =>
  addIndex(map)(predicate(measurements), measurements);

const isMeasureIncremented = (measurements) => (measurement, i) =>
  (measurements[i - 1] || 0) < measurement;

const previousThreeMeasurements = (measurements) => (_, i) =>
  (measurements[i - 1] || 0) + (measurements[i - 2] || 0) + measurements[i - 3] || 0;

const removeFirst = ([_, ...data]) => data;

export const part1 = pipe(mapWithMeasurements(isMeasureIncremented), removeFirst, sum);

export const part2 = pipe(mapWithMeasurements(previousThreeMeasurements), part1);
