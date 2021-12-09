import { part1 } from './9';
import input from './input.js';

const example = `2199943210
3987894921
9856789892
8767896789
9899965678`;

describe('Day 9: Smoke Basin', () => {
  it('Part 1 - example', () => {
    expect(part1(example)).toEqual(15);
  });
  it('Part 1', () => {
    expect(part1(input)).toEqual(545);
  });
});
