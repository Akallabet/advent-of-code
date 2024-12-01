import { lanternfish, spawn } from './6';
import input from './input.js';

describe('Day 6: Lanternfish', () => {
  it('spawns 1 fish after 2 days', () => {
    const example = [0, 1, 1, 2, 1, 0, 0, 0, 0];
    expect(spawn(1)(example)).toEqual([1, 1, 2, 1, 0, 0, 0, 0, 0]);
  });
  it('there are 26 fish after 18 days', () => {
    const example = `3,4,3,1,2`;
    expect(lanternfish(example, 18)).toEqual(26);
  });
  it('Part 1 - Example', () => {
    const example = `3,4,3,1,2`;
    expect(lanternfish(example, 80)).toEqual(5934);
  });
  it('Part 1', () => {
    expect(lanternfish(input, 80)).toEqual(379114);
  });
  it('Part 2 - Example', () => {
    const example = `3,4,3,1,2`;
    expect(lanternfish(example, 256)).toEqual(26984457539);
  });
  it('Part 2', () => {
    expect(lanternfish(input, 256)).toEqual(1702631502303);
  });
});
