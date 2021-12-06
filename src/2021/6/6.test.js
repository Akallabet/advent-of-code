import { part1, day, spawn, spawnCycle } from './6';
import input from './input.js';

describe('Day 6: Lanternfish', () => {
  it('fish timers decrement each day', () => {
    const example = [3, 4, 3, 1, 2];
    expect(day(example, 1)).toEqual([2, 3, 2, 0, 1]);
  });
  it('fish timers with zero resets to 6', () => {
    const example = [2, 3, 2, 0, 1];
    expect(day(example, 1)).toEqual([1, 2, 1, 6, 0]);
  });
  it('spawn new fish if timer is zero', () => {
    const example = [2, 3, 2, 0, 1];
    expect(spawn(example)).toEqual([8]);
  });
  it('spawn one new fish after 2 days', () => {
    const example = [3, 4, 3, 1, 2];
    expect(spawnCycle(2)(example)).toEqual([1, 2, 1, 6, 0, 8]);
  });
  it('there are 26 fish after 18 days', () => {
    const example = `3,4,3,1,2`;
    expect(part1(example, 18)).toEqual(26);
  });
  it('Part 1 - Example', () => {
    const example = `3,4,3,1,2`;
    expect(part1(example, 80)).toEqual(5934);
  });
  it('Part 1', () => {
    expect(part1(input, 80)).toEqual(379114);
  });
});
