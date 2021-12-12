import { part1, parseInput, buildGraph, findPaths, isBigCave } from './12';
import input from './input';

const example = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

describe('Utils', () => {
  it('Parse input', () => {
    expect(parseInput(example)).toEqual([
      ['start', 'A'],
      ['start', 'b'],
      ['A', 'c'],
      ['A', 'b'],
      ['b', 'd'],
      ['A', 'end'],
      ['b', 'end'],
    ]);
  });
  it('big caves', () => {
    expect(isBigCave('A')).toBeTruthy();
    expect(isBigCave('AB')).toBeTruthy();
    expect(isBigCave('b')).toBeFalsy();
    expect(isBigCave('dc')).toBeFalsy();
    expect(isBigCave('start')).toBeFalsy();
  });
});

describe('Graph', () => {
  it('Build graph', () => {
    expect(buildGraph(parseInput(example))).toEqual({
      start: ['A', 'b'],
      A: ['start', 'c', 'b', 'end'],
      c: ['A'],
      d: ['b'],
      b: ['start', 'A', 'd', 'end'],
      end: ['A', 'b'],
    });
  });

  it('Find path - simple', () => {
    const graph = buildGraph(parseInput('start-a\na-b\nb-end'));
    expect(findPaths(graph, 'start', 'end', 'start')).toEqual(1);
  });

  it('Find path - big caves', () => {
    const bigCaves = `start-A
A-b
A-end`;
    const graph = buildGraph(parseInput(bigCaves));
    expect(findPaths(graph, 'start', 'end', 'start')).toEqual(2);
  });
  it('Find paths - Example', () => {
    const graph = buildGraph(parseInput(example));
    expect(findPaths(graph, 'start', 'end', 'start')).toEqual(10);
  });
});

describe('Day 12 - Passage Pathing', () => {
  it('Part 1', () => {
    expect(part1(input)).toEqual(3713);
  });
});
