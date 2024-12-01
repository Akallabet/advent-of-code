import { map, addIndex, pipe, reduce, split } from 'ramda';
const mapI = addIndex(map);

export const parseInput = pipe(
  split('\n'),
  map(split('')),
  map(map(Number)),
  reduce((arr, line) => [...arr, line], [])
);

export const calcLowestRiskyPath = (arr) => {
  let lowestRiskPath = 10000;
  const calcPath = (y = 0, x = 0, path = 0) => {
    // console.log({ y, x }, path);

    const right = arr[y][x + 1] && [y, x + 1];
    const bottom = arr[y + 1] && arr[y + 1][x] && [y + 1, x];

    if (!right && !bottom) {
      if (path < lowestRiskPath) lowestRiskPath = path;
      return;
    }

    if (right) calcPath(right[0], right[1], path + arr[right[0]][right[1]]);
    if (bottom) calcPath(bottom[0], bottom[1], path + arr[bottom[0]][bottom[1]]);
  };
  calcPath(0, 0, 0);
  return lowestRiskPath;
};

export const part1 = pipe(parseInput, calcLowestRiskyPath);
