import { map, pipe, reduce, sort, split } from 'ramda';

export const summation = (distance) => distance * ((distance + 1) / 2);

const calcOptimFuel = (cluster, { move, leastAmOfFuel, hasIncr } = { move: 0 }) => {
  if (move === cluster[cluster.length - 1][0]) return leastAmOfFuel;
  const fuel = reduce(
    (fuel, numbers) => {
      const distance = Math.abs(numbers[0] - move);
      return fuel + (hasIncr ? summation(distance) : distance) * numbers.length;
    },
    0,
    cluster
  );
  return calcOptimFuel(cluster, {
    move: move + 1,
    leastAmOfFuel: !leastAmOfFuel ? fuel : fuel < leastAmOfFuel ? fuel : leastAmOfFuel,
    hasIncr,
  });
};

const calcOptimFuelWithIncr = (cluster) => calcOptimFuel(cluster, { move: 0, hasIncr: true });

const makeClusters = pipe(
  sort((a, b) => a - b),
  reduce((cluster, num) => {
    if (!cluster[cluster.length - 1]) return [[num]];
    if (num === cluster[cluster.length - 1][0])
      return [...cluster.slice(0, cluster.length - 1), [...cluster[cluster.length - 1], num]];
    return [...cluster, [num]];
  }, [])
);

export const part1 = pipe(split(','), map(Number), makeClusters, calcOptimFuel);
export const part2 = pipe(split(','), map(Number), makeClusters, calcOptimFuelWithIncr);
