import { part1, extractInput, increaseEnergyLevels, flash, findflashIndex, part2 } from './11';
import input from './input';

const example = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

describe('Day 11: Dumbo Octopus', () => {
  it('Parse input', () => {
    const input = `5483143223\n2745854711`;
    expect(extractInput(input)).toEqual([
      [5, 4, 8, 3, 1, 4, 3, 2, 2, 3],
      [2, 7, 4, 5, 8, 5, 4, 7, 1, 1],
    ]);
  });
  it('increase energy levels', () => {
    const input = [
      [5, 4, 8],
      [2, 7, 4],
      [5, 4, 8],
    ];
    expect(increaseEnergyLevels(input)).toEqual([
      [6, 5, 9],
      [3, 8, 5],
      [6, 5, 9],
    ]);
  });
  it('find flashing octopus', () => {
    const input = [
      [2, 3, 4],
      [5, 10, 6],
      [7, 7, 8],
    ];
    expect(findflashIndex(input)).toEqual([1, 1]);
  });
  it('flash one octopus', () => {
    const input = [
      [2, 3, 4],
      [5, 10, 6],
      [7, 7, 1],
    ];
    expect(flash(input)[0]).toEqual([
      [3, 4, 5],
      [6, 0, 7],
      [8, 8, 2],
    ]);
  });
  it('flash multiple octopi', () => {
    const input = [
      [2, 3, 4],
      [5, 10, 7],
      [8, 8, 9],
    ];
    expect(flash(input)[0]).toEqual([
      [3, 5, 6],
      [8, 0, 0],
      [0, 0, 0],
    ]);
  });
  it('Part 1 - Example', () => {
    const res = part1(example, 100);
    expect(res[1]).toEqual(1656);
  });
  it('Part 1', () => {
    expect(part1(input, 100)[1]).toEqual(1601);
  });
  it('flash all octopi', () => {
    const example = `6988888888
9988888888
8888888888
8888888888
8888888888
8888888888
8888888888
8888888888
8888888888
8888888888`;
    expect(part2(example)).toEqual(1);
  });
  it('Part 2 - Example', () => {
    expect(part2(example)).toEqual(195);
  });
  it('Part 2', () => {
    expect(part2(input)).toEqual(368);
  });
});
