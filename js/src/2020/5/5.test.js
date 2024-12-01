import { part1, part2 } from './5'
import input from './input'

const example = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`

describe('Day 5: Binary Boarding', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(820)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(874)
  })
  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(594)
  })
})
