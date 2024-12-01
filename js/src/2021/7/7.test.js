import { part1, part2, summation } from './7';
import input from './input.js';

const example = '16,1,2,0,4,2,7,1,2,14';

describe('Day 7: The Treachery of Whales', () => {
  it('Part 1 - 2 different close odd numbers', () => {
    expect(part1('5,1')).toEqual(4);
  });
  it('Part 1 - 2 different close numbers', () => {
    expect(part1('7,2')).toEqual(5);
  });
  it('Part 1 - 3 different close numbers', () => {
    expect(part1('1,5,11')).toEqual(10);
  });
  it('Part 1 - 3 numbers, 2 equals', () => {
    expect(part1('2,20,2')).toEqual(18);
  });
  it('Part 1 - Example', () => {
    expect(part1(example)).toEqual(37);
  });
  it('Part 1', () => {
    expect(part1(input)).toEqual(344297);
  });
  it('summation', () => {
    expect(summation(7)).toEqual(28);
  });
  it('Part 2 - 2 different close odd numbers', () => {
    expect(part2('5,1')).toEqual(6);
  });
  it('Part 2 - Example', () => {
    expect(part2(example)).toEqual(168);
  });
  it('Part 2', () => {
    expect(part2(input)).toEqual(97164301);
  });
});
