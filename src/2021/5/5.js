import { filter, map, max, pipe, reduce, split } from 'ramda';

const makeOceanFloor = pipe(
  reduce(
    ([maxX, maxY], [[x1, y1], [x2, y2]]) => [max(maxX, max(x1, x2)), max(maxY, max(y1, y2))],
    [0, 0]
  ),
  ([x, y]) => [...new Array(y + 1)].map(() => [...new Array(x + 1)].map(() => 0))
);

const drawLine = (x1, y1, x2, y2, floor, increment) => {
  floor[y1][x1] += 1;
  if (x1 === x2 && y1 === y2) return floor;
  return drawLine(...increment(x1, y1, x2, y2), x2, y2, floor, increment);
};

const verticalLine = (x1, y1, x2, y2) => [x1, y1 > y2 ? y1 - 1 : y1 + 1];
const horizontalLine = (x1, y1, x2) => [x1 > x2 ? x1 - 1 : x1 + 1, y1];
const diagonalLine = (x1, y1, x2, y2) => [x1 > x2 ? x1 - 1 : x1 + 1, y1 > y2 ? y1 - 1 : y1 + 1];

const drawLines = (isDiagonal) =>
  reduce((floor, [[x1, y1], [x2, y2]]) => {
    const increment =
      (x1 === x2 && verticalLine) ||
      (y1 === y2 && horizontalLine) ||
      (isDiagonal && Math.abs(x2 - x1) === Math.abs(y2 - y1) && diagonalLine);
    return increment ? drawLine(x1, y1, x2, y2, floor, increment) : floor;
  });

const hydrothermalVenture = (isDiagonal) =>
  pipe(
    split('\n'),
    map(pipe(split(' -> '), map(split(',')), map(map(Number)))),
    (points) => drawLines(isDiagonal)(makeOceanFloor(points), points),
    reduce((dangerousAreas, row) => dangerousAreas + filter((cell) => cell > 1, row).length, 0)
  );

export const part1 = hydrothermalVenture(false);
export const part2 = hydrothermalVenture(true);
