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

const isTraversable = (visited, special) => (node) =>
  isBigCave(node) || !includes(node, visited) || special;

export const findPaths = (graph, current, end, special = false, visited = []) =>
  (current === end && 1) ||
  graph[current]
    .filter(isTraversable(visited, special))
    .reduce(
      (nOfPaths, adjacent) =>
        nOfPaths +
        findPaths(
          graph,
          adjacent,
          end,
          isSmallCave(adjacent) && includes(adjacent, visited) && special ? false : special,
          [...visited, current]
        ),
      0
    );

export const part1 = pipe(parseInput, buildGraph, (graph) => findPaths(graph, 'start', 'end'));
export const part2 = pipe(parseInput, buildGraph, removeLinksToStart, removeEndNode, (graph) =>
  findPaths(graph, 'start', 'end', true)
);
