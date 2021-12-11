import { map, pipe, split } from 'ramda';

const increment = (n) => n + 1;

export const extractInput = pipe(split('\n'), map(split('')), map(map(Number)));
export const increaseEnergyLevels = map(map(increment));
export const findflashIndex = (octopi, y = 0, x = 0) => {
  if (y === octopi.length) return -1;
  if (x === octopi[0].length) return findflashIndex(octopi, y + 1, 0);
  if (octopi[y][x] > 9) return [y, x];
  return findflashIndex(octopi, y, x + 1);
};
const getAdjecentOctopiIndexes = ([y, x]) => [
  [y - 1, x - 1],
  [y - 1, x],
  [y - 1, x + 1],
  [y, x + 1],
  [y + 1, x + 1],
  [y + 1, x],
  [y + 1, x - 1],
  [y, x - 1],
];

const octopusExists =
  (octopi) =>
  ([y, x]) =>
    octopi[y] !== undefined && octopi[y][x] !== undefined;
const increaseLevel =
  (octopi) =>
  ([y, x]) => {
    octopi[y][x] = octopi[y][x] !== -1 ? octopi[y][x] + 1 : octopi[y][x];
  };

export const flash = (octopi, flashes) => {
  const flashIndex = findflashIndex(octopi);
  if (flashIndex !== -1) {
    const adjecentOctopiIndexes = getAdjecentOctopiIndexes(flashIndex).filter(
      octopusExists(octopi)
    );
    adjecentOctopiIndexes.forEach(increaseLevel(octopi));
    octopi[flashIndex[0]][flashIndex[1]] = -1;
    return flash(octopi, flashes + 1);
  }
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

export const part1 = (input, steps) => pipe(extractInput, startSteps(steps))(input);
