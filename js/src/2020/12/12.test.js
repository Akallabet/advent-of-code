import { part1, part2 } from './12'
import input from './input'

const example = `F10
N3
F7
R90
F11`

describe('Day 12: Rain Risk', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(25)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(439)
  })
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'))).toEqual(286)
  })
  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(12385)
  })
})
