import { filter, includes, map, pipe, reduce, split } from 'ramda';

export const isBigCave = (cave) => /[ABCDEFGHIKLMNPQRSTUVWYXZ]/.test(cave);
export const isSmallCave = (cave) => !isBigCave(cave);
export const parseInput = pipe(split('\n'), map(split('-')));
export const buildGraph = pipe(
  reduce(
    (graph, [a, b]) => ({ ...graph, [a]: [...(graph[a] || []), b], [b]: [...(graph[b] || []), a] }),
    {}
  )
);
const removeLinksToStart = map(filter((node) => node !== 'start'));
const removeEndNode = ({ end, ...graph }) => graph;

export const findPaths = (graph, start, end, current, special = false, visited = []) => {
  if (current === end) return 1;
  if (isSmallCave(current) && includes(current, visited)) {
    if (special) special = false;
    else return 0;
  }

  return graph[current].reduce(
    (nOfPaths, adjacent) =>
      nOfPaths + findPaths(graph, start, end, adjacent, special, [...visited, current]),
    0
  );
};

const findDistinctPathsForTwoNodes = (start, end) => (graph) => findPaths(graph, start, end, start);
const findDistinctPathsForTwoNodesEnhanced = (start, end) => (graph) =>
  findPaths(graph, start, end, start, true);

export const part1 = pipe(parseInput, buildGraph, findDistinctPathsForTwoNodes('start', 'end'));
export const part2 = pipe(
  parseInput,
  buildGraph,
  removeLinksToStart,
  removeEndNode,
  findDistinctPathsForTwoNodesEnhanced('start', 'end')
);
