import { part1, part2 } from './2';
import input from './input.js';

const example = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

describe('Day 2: Dive!', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(150);
  });
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(2102357);
  });
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'))).toEqual(900);
  });
  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(2101031224);
  });
});
