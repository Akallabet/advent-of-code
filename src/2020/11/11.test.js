import { part1, part2 } from './11'
import input from './input'

const example = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

describe('Day 11: Seating System', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(37)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(2472)
  })
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'))).toEqual(26)
  })
  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(26)
  })
})
