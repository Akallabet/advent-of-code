import { part1, leastAmountOfFuel } from './7';
import input from './input.js';

const example = '16,1,2,0,4,2,7,1,2,14';

describe('Day 7: The Treachery of Whales', () => {
  it('2 different close odd numbers', () => {
    expect(leastAmountOfFuel([5, 1])).toEqual(4);
  });
  it('2 different close numbers', () => {
    expect(leastAmountOfFuel([7, 2])).toEqual(5);
  });
  it('3 different close numbers', () => {
    expect(leastAmountOfFuel([1, 5, 11])).toEqual(10);
  });
  it('3 numbers, 2 equals', () => {
    expect(leastAmountOfFuel([2, 20, 2])).toEqual(18);
  });
  it('Part 1 - Example', () => {
    expect(part1(example)).toEqual(37);
  });
  it('Part 1', () => {
    expect(part1(input)).toEqual(344297);
  });
});
