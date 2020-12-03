import { part1 } from './3'
import input from './input.js'

const example = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`

describe('Day 3: Toboggan Trajectory', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(7)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(276)
  })
})
