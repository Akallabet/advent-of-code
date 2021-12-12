import { map, pipe, reduce, split } from 'ramda';

export const parseInput = pipe(split('\n'), map(split('-')));
export const buildGraph = pipe(
  reduce(
    (graph, [a, b]) => ({ ...graph, [a]: [...(graph[a] || []), b], [b]: [...(graph[b] || []), a] }),
    {}
  )
);

export const part1 = () => {};
