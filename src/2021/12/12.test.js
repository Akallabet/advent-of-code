import { part1, parseInput, buildGraph } from './12';
// import input from './input';

const example = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

describe('Day 12 - Passage Pathing', () => {
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
  it('Part 1 - Simple example', () => {
    expect(part1(example)).toEqual(10);
  });
});
