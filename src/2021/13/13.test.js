import { foldOnColumns, foldOnRows, parseInput, part1 } from './13';
import input from './input';

const example = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`;

describe('Utils', () => {
  it('Parse input', () => {
    const simpleInput = `1,2
1,1

fold along y=7
fold along x=8`;

    expect(parseInput(simpleInput)).toEqual([
      [
        [1, 2],
        [1, 1],
      ],
      [
        ['y', 7],
        ['x', 8],
      ],
    ]);
  });
  it('Fold on rows', () => {
    const foldingInput = [
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
    ];
    const expected = [
      [0, 1],
      [1, 1],
      [0, 1],
      [1, 1],
      [1, 1],
    ];
    const res = foldOnColumns(foldingInput, 2);
    expect(res).toEqual(expected);
  });
  it('Fold on columns', () => {
    const foldingInput = [
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
    ];
    const expected = [
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0],
    ];
    const res = foldOnRows(foldingInput, 2);
    expect(res).toEqual(expected);
  });
});

describe('Day 13 - Transparent Origami', () => {
  it('Part 1 - Example', () => {
    expect(part1(example)).toEqual(17);
  });
  it('Part 1', () => {
    expect(part1(input)).toEqual(661);
  });
});
