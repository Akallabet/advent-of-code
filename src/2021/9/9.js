import { addIndex, filter, flatten, sum, join, map, pipe, reduce, sortBy, split, tap } from 'ramda';

const reduceI = addIndex(reduce);
const filterI = addIndex(filter);

const extractInput = pipe(split('\n'), map(split('')), map(map(Number)));
const findLowestPoints = (points) =>
  pipe(
    reduceI(
      (lowestPoints, row, y) => [
        ...lowestPoints,
        row.filter((point, x) => {
          const adjacentPoints = [];
          if (points[y][x - 1] !== undefined) adjacentPoints.push(points[y][x - 1]);
          if (points[y][x + 1] !== undefined) adjacentPoints.push(points[y][x + 1]);
          if (points[y - 1] && points[y - 1][x] !== undefined)
            adjacentPoints.push(points[y - 1][x]);
          if (points[y + 1] && points[y + 1][x] !== undefined)
            adjacentPoints.push(points[y + 1][x]);
          // console.log(point, adjacentPoints);
          // return ((points[y][x - 1] && point < points[y][x - 1]))
          return adjacentPoints.every((adjacentPoint) => point < adjacentPoint);
        }),
      ],
      []
    ),
    filter((points) => points.length > 0),
    flatten,
    map((point) => point + 1),
    sum
  )(points);
export const part1 = pipe(extractInput, findLowestPoints);
