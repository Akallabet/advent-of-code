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

const drawVerticalLine = drawLine(([xa, ya], [_, yb]) => [xa, ya > yb ? ya - 1 : ya + 1]);
const drawHorizontalLine = drawLine(([xa, ya], [xb]) => [xa > xb ? xa - 1 : xa + 1, ya]);
const drawDiagonalLine = drawLine(([xa, ya], [xb, yb]) => [
  xa > xb ? xa - 1 : xa + 1,
  ya > yb ? ya - 1 : ya + 1,
]);

const drawLines = (selectLine) => (points) =>
  reduce(
    (floor, [[xa, ya], [xb, yb]]) => {
      const fn = selectLine([xa, ya], [xb, yb]);
      return fn
        ? fn(
            [
              [xa, ya],
              [xb, yb],
            ],
            floor
          )
        : floor;
    },
    makeOceanFloor(points),
    points
  );

const drawVerticalAndHorizontalLines = drawLines(
  ([xa, ya], [xb, yb]) => (xa === xb && drawVerticalLine) || (ya === yb && drawHorizontalLine)
);

const drawVerticalHorizontalAndDiagonalLines = drawLines(
  ([xa, ya], [xb, yb]) =>
    (xa === xb && drawVerticalLine) ||
    (ya === yb && drawHorizontalLine) ||
    (Math.abs(xb - xa) === Math.abs(yb - ya) && drawDiagonalLine)
);

const hydrothermalVenture = (drawLinesFn) =>
  pipe(
    split('\n'),
    map(pipe(split(' -> '), map(split(',')), map(map(Number)))),
    drawLinesFn,
    reduce((dangerousAreas, row) => dangerousAreas + filter((cell) => cell > 1, row).length, 0)
  );

export const part1 = hydrothermalVenture(drawVerticalAndHorizontalLines);

export const part2 = hydrothermalVenture(drawVerticalHorizontalAndDiagonalLines);
