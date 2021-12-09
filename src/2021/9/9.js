import { addIndex, flatten, sum, map, pipe, reduce, split, tap, product, sort, slice } from 'ramda';

const reduceI = addIndex(reduce);

const extractInput = pipe(split('\n'), map(split('')), map(map(Number)));
const addLowestPoints = (points) =>
  pipe(
    reduceI(
      (lowestPoints, row, y) => [
        ...lowestPoints,
        ...reduceI(
          (rowLowestPoints, point, x) => {
            const adjacentPoints = [];
            if (points[y][x - 1] !== undefined) adjacentPoints.push(points[y][x - 1]);
            if (points[y][x + 1] !== undefined) adjacentPoints.push(points[y][x + 1]);
            if (points[y - 1] && points[y - 1][x] !== undefined)
              adjacentPoints.push(points[y - 1][x]);
            if (points[y + 1] && points[y + 1][x] !== undefined)
              adjacentPoints.push(points[y + 1][x]);
            const isLowestPoint = adjacentPoints.every((adjacentPoint) => point < adjacentPoint);
            return isLowestPoint ? [...rowLowestPoints, [point, [y, x]]] : rowLowestPoints;
          },
          [],
          row
        ),
      ],
      []
    ),
    (lowestPoints) => [lowestPoints, points]
  )(points);

export const part1 = pipe(
  extractInput,
  addLowestPoints,
  ([points]) => points,
  map(([point]) => point),
  flatten,
  map((point) => point + 1),
  sum
);

const decrese = (x) => x - 1;
const increse = (x) => x + 1;

const horizontal = (points, y, x, basinLength, update) => {
  if (points[y][x] === undefined || points[y][x] === 9 || points[y][x] === 'x') return basinLength;
  points[y][x] = 'x';
  const length =
    vertical(points, y - 1, x, 0, decrese) + vertical(points, y + 1, x, 0, increse) + 1;
  return horizontal(points, y, update(x), basinLength + length, update);
};

const vertical = (points, y, x, basinLength, update) => {
  if (!points[y] || points[y][x] === undefined || points[y][x] === 9 || points[y][x] === 'x')
    return basinLength;
  points[y][x] = 'x';
  const basinRowLeftLength = horizontal(points, y, x - 1, 0, decrese);
  const basinRowRightLength = horizontal(points, y, x + 1, 0, increse);

  return vertical(
    points,
    update(y),
    x,
    basinLength + basinRowLeftLength + basinRowRightLength + 1,
    update
  );
};

const getBasin =
  (points) =>
  ([point, [y, x]]) =>
    vertical(points, y, x, 0, decrese) + vertical(points, y + 1, x, 0, increse);

const getBasins = ([lowestPoints, points]) => map(getBasin(points), lowestPoints);

export const part2 = pipe(
  extractInput,
  addLowestPoints,
  getBasins,
  sort((a, b) => b - a),
  slice(0, 3),
  product
);
