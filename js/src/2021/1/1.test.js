import { part1, part2 } from './1';
import input from './input.js';

const example = `199
200
208
210
200
207
240
269
260
263`;

describe('Day 1: Sonar Sweep', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n').map((i) => parseInt(i)))).toEqual(7);
  });
  it('Part 1', () => {
    expect(part1(input.split('\n').map((i) => parseInt(i)))).toEqual(1502);
  });
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n').map((i) => parseInt(i)))).toEqual(5);
  });
  it('Part 2 - Example', () => {
    expect(part2(input.split('\n').map((i) => parseInt(i)))).toEqual(1538);
  });
});
