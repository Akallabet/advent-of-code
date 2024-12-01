import { calcLowestRiskyPath, parseInput, part1 } from './15';
import input from './input';

const example = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;

describe('Utilities', () => {
  it('Parse input', () => {
    const example = `123\n456\n789`;
    expect(parseInput(example)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it('Less risky path simple input', () => {
    const example = [
      [1, 1, 3],
      [1, 2, 3],
      [8, 6, 5],
    ];
    expect(calcLowestRiskyPath(example)).toEqual(11);
  });
});

describe('Day 15 - Chiton', () => {
  it('Part 1 - Example', () => {
    expect(part1(example)).toEqual(40);
  });
  it('Part 1', () => {
    expect(part1(input)).toEqual(40);
  });
});
