import { foldOnColumns, foldOnRows, parseInput, part1, part2 } from './13';
import input from './input.js';

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
  it('Fold on columns', () => {
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
  it('Fold on columns, even columns', () => {
    const foldingInput = [
      [0, 0, 0, 1, 0, 1],
      [1, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 0, 1],
      [1, 1, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 1],
    ];
    const expected = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
      [1, 1, 0],
    ];
    // console.log('even columns');
    const res = foldOnColumns(foldingInput, 3);
    // console.table(res);
    expect(res).toEqual(expected);
  });
  it('Fold on rows, even rows', () => {
    const foldingInput = [
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
    ];
    const expected = [
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 1, 0],
    ];
    // console.log('even rows');
    const res = foldOnRows(foldingInput, 3);
    // console.table(res);
    expect(res).toEqual(expected);
  });
  it('Fold on rows, odd rows', () => {
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
    // console.log('odd rows');
    const res = foldOnRows(foldingInput, 2);
    // console.table(res);
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
  it('Part 2 - Example', () => {
    part2(example);
    // console.table(res);
    // expect(res).toEqual(661);
  });
  it('Part 2 ', () => {
    part2(input);
    // console.log(res);
    // expect(res).toEqual(661);
  });
  it.only('Part 2 ', () => {
    part2(input);
    // console.log(res);
    // expect(res).toEqual(661);
  });
});
