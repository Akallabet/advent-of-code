import { part1, part2 } from './3';
import input from './input.js';

const example = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

describe('Day 3: Binary Diagnostic', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(198);
  });
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(3912944);
  });
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'))).toEqual(230);
  });
  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(4996233);
  });
});
