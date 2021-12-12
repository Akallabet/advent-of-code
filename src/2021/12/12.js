import { includes, map, pipe, reduce, split } from 'ramda';

export const isBigCave = (cave) => /[ABCDEFGHIKLMNPQRSTUVWYXZ]/.test(cave);
export const parseInput = pipe(split('\n'), map(split('-')));
export const buildGraph = pipe(
  reduce(
    (graph, [a, b]) => ({ ...graph, [a]: [...(graph[a] || []), b], [b]: [...(graph[b] || []), a] }),
    {}
  )
);

export const findPaths = (graph, start, end, current, visited = []) =>
  current === end
    ? 1
    : includes(current, visited) && !isBigCave(current)
    ? 0
    : graph[current].reduce(
        (nOfPaths, adjacent) =>
          nOfPaths + findPaths(graph, start, end, adjacent, [...visited, current]),
        0
      );

const findDistinctPathsForTwoNodes = (start, end) => (graph) => findPaths(graph, start, end, start);

export const part1 = pipe(parseInput, buildGraph, findDistinctPathsForTwoNodes('start', 'end'));
