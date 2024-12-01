import { map, pipe, reduce, split } from 'ramda';

const updateDepth = (initialValue, dir, value) =>
  initialValue + ((dir === 'up' && -value) || (dir === 'down' && value) || 0);

const multiplyValues = ({ depth, horiz }) => depth * horiz;
const convertValueToNumber = ([dir, value]) => [dir, Number(value)];

export const part1 = pipe(
  map(split(' ')),
  map(convertValueToNumber),
  reduce(
    ({ depth, horiz }, [dir, value]) => ({
      depth: updateDepth(depth, dir, value),
      horiz: dir === 'forward' ? horiz + value : horiz,
    }),
    { depth: 0, horiz: 0 }
  ),
  multiplyValues
);

export const part2 = pipe(
  map(split(' ')),
  map(convertValueToNumber),
  reduce(
    ({ aim, depth, horiz }, [dir, value]) => {
      const newAim = updateDepth(aim, dir, value);
      return {
        aim: newAim,
        depth: dir === 'forward' ? depth + newAim * value : depth,
        horiz: dir === 'forward' ? horiz + value : horiz,
      };
    },
    { aim: 0, depth: 0, horiz: 0 }
  ),
  multiplyValues
);
