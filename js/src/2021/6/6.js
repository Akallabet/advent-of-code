import { map, pipe, reduce, split, sum } from 'ramda';

const breakIntoClasses = (school) => {
  const classes = [[], [], [], [], [], [], [], [], []];
  school.forEach((fish) => classes[fish].push(fish));
  return classes.map((fish) => fish.length);
};

export const spawn = (days) => (school) =>
  reduce(
    ([zero, one, two, three, four, five, six, seven, eight]) => [
      one,
      two,
      three,
      four,
      five,
      six,
      seven + zero,
      eight,
      zero,
    ],
    school,
    [...new Array(days)]
  );

export const lanternfish = (fish, days) =>
  pipe(split(','), map(Number), breakIntoClasses, spawn(days), sum)(fish);
