import { length, map, pipe, reduce, split } from 'ramda';

export const day = map((fish) => (fish === 0 ? 6 : fish - 1));
export const spawn = (school) =>
  reduce((newFish, fish) => (fish === 0 ? [...newFish, 8] : newFish), [], school);

export const spawnCycle = (days) => (school) =>
  reduce(
    (school) => {
      return [...day(school), ...spawn(school)];
    },
    school,
    [...new Array(days)]
  );

export const part1 = (fish, days) => pipe(split(','), map(Number), spawnCycle(days), length)(fish);

export const part2 = () => {};
