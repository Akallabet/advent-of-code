import { filter, map, max, pipe, reduce, split } from 'ramda';

const makeOceanFloor = pipe(
  reduce(
    ([maxX, maxY], [[xa, ya], [xb, yb]]) => [max(maxX, max(xa, xb)), max(maxY, max(ya, yb))],
    [0, 0]
  ),
  ([x, y]) => [...new Array(y + 1)].map(() => [...new Array(x + 1)].map(() => 0))
);

const drawLine = (fn) => {
  const drawLineRec = ([[xa, ya], [xb, yb]], floor) => {
    floor[ya][xa] += 1;
    if (xa === xb && ya === yb) return floor;
    return drawLineRec([fn([xa, ya], [xb, yb]), [xb, yb]], floor);
  };
  return drawLineRec;
};

const verticalLine = ([xa, ya], [_, yb]) => [xa, ya > yb ? ya - 1 : ya + 1];
const horizontalLine = ([xa, ya], [xb]) => [xa > xb ? xa - 1 : xa + 1, ya];
const diagonalLine = ([xa, ya], [xb, yb]) => [xa > xb ? xa - 1 : xa + 1, ya > yb ? ya - 1 : ya + 1];

const drawLines = (isDiagonal = false) =>
  reduce((floor, [[xa, ya], [xb, yb]]) => {
    const fn =
      (xa === xb && drawLine(verticalLine)) ||
      (ya === yb && drawLine(horizontalLine)) ||
      (isDiagonal && Math.abs(xb - xa) === Math.abs(yb - ya) && drawLine(diagonalLine));
    return fn
      ? fn(
          [
            [xa, ya],
            [xb, yb],
          ],
          floor
        )
      : floor;
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
