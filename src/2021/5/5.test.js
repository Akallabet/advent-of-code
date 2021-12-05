import { part1, part2 } from './5';
import input from './input.js';

const example = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

describe('Day 5: Binary Diagnostic', () => {
  it('Part 1 - Example', () => {
    expect(part1(example)).toEqual(5);
  });
  it('Part 1', () => {
    expect(part1(input)).toEqual(6311);
  });
  it('Part 2 - Example', () => {
    expect(part2(example)).toEqual(12);
  });
  it('Part 2', () => {
    expect(part2(input)).toEqual(19929);
  });
});
