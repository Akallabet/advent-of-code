import { pipe, reduce, sort, split } from 'ramda';

const calcOptimFuel = (cluster, moveIndex = 0, leastAmoOfFuel) => {
  if (moveIndex === cluster.length - 1) return leastAmoOfFuel;
  const move = cluster[moveIndex][0];
  const fuel = reduce(
    (fuel, numbers) => fuel + Math.abs(numbers[0] - move) * numbers.length,
    0,
    cluster
  );
  return calcOptimFuel(
    cluster,
    moveIndex + 1,
    !leastAmoOfFuel ? fuel : fuel < leastAmoOfFuel ? fuel : leastAmoOfFuel
  );
};

export const leastAmountOfFuel = (numbers) =>
  pipe(
    sort((a, b) => a - b),
    reduce((cluster, num) => {
      if (!cluster[cluster.length - 1]) return [[num]];
      if (num === cluster[cluster.length - 1][0])
        return [...cluster.slice(0, cluster.length - 1), [...cluster[cluster.length - 1], num]];
      return [...cluster, [num]];
    }, []),
    calcOptimFuel
  )(numbers);

export const part1 = pipe(split(','), leastAmountOfFuel);
