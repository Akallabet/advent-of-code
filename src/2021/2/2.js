import { map, pipe, reduce, split } from 'ramda';

const updateDepth = (initialValue, dir, value) =>
  initialValue + ((dir === 'up' && -value) || (dir === 'down' && value) || 0);
const updateHoriz = (initialValue, dir, value) =>
  initialValue + ((dir === 'forward' && value) || 0);

export const part1 = pipe(
  map(split(' ')),
  map(([dir, value]) => [dir, Number(value)]),
  reduce(
    ({ depth, horiz }, [dir, value]) => ({
      depth: updateDepth(depth, dir, value),
      horiz: updateHoriz(horiz, dir, value),
    }),
    { depth: 0, horiz: 0 }
  ),
  ({ depth, horiz }) => depth * horiz
);
