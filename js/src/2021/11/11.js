import { filter, forEach, map, pipe, split } from 'ramda';

const increment = (n) => n + 1;

export const extractInput = pipe(split('\n'), map(split('')), map(map(Number)));
export const increaseEnergyLevels = map(map(increment));
export const findflashIndex = (octopi, y = 0, x = 0) =>
  (y === octopi.length && -1) ||
  (octopi[y][x] > 9 && [y, x]) ||
  (x === octopi[0].length && findflashIndex(octopi, y + 1, 0)) ||
  findflashIndex(octopi, y, x + 1);

const getAdjecentOctopiIndexes = (octopi) =>
  pipe(
    ([y, x]) => [
      [y - 1, x - 1],
      [y - 1, x],
      [y - 1, x + 1],
      [y, x + 1],
      [y + 1, x + 1],
      [y + 1, x],
      [y + 1, x - 1],
      [y, x - 1],
    ],
    filter(([y, x]) => octopi[y] !== undefined && octopi[y][x] !== undefined)
  );

const calcNextLevel = ([y, x], octopi) =>
  pipe(
    getAdjecentOctopiIndexes(octopi),
    forEach(([y, x]) => {
      octopi[y][x] = octopi[y][x] !== -1 ? octopi[y][x] + 1 : octopi[y][x];
    }),
    () => (octopi[y][x] = -1),
    () => octopi
  )([y, x]);

export const flash = (octopi, flashes) => {
  const flashIndex = findflashIndex(octopi);
  if (flashIndex !== -1) return flash(calcNextLevel(flashIndex, octopi), flashes + 1);
  return [
    map(
      map((octopus) => (octopus === -1 ? 0 : octopus)),
      octopi
    ),
    flashes,
  ];
};

const doSteps = (octopi, steps = 1, step = 0, flashes = 0) => {
  if (step === steps) return [octopi, flashes];
  const [increasedOctopi, stepFlashes] = flash(increaseEnergyLevels(octopi), 0);
  return doSteps(increasedOctopi, steps, step + 1, flashes + stepFlashes);
};

const startSteps = (steps) => (octopi) => doSteps(octopi, steps, 0, 0);

const firstSimFlashing = (octopi, steps = 4000, step = 0) => {
  if (step === steps) return -1;
  const [increasedOctopi, flashes] = flash(increaseEnergyLevels(octopi), 0);
  if (flashes === octopi.length * octopi[0].length) return step + 1;
  return firstSimFlashing(increasedOctopi, steps, step + 1);
};

export const part1 = (input, steps) => pipe(extractInput, startSteps(steps))(input);
export const part2 = (input) => pipe(extractInput, firstSimFlashing)(input);
