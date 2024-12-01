import { part1, part2 } from './6'
import input from './input'

const example = `abc

a
b
c

ab
ac

a
a
a
a

b`

describe('Day 6: Custom Customs', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(11)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(6259)
  })
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'))).toEqual(6)
  })
  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(3178)
  })
})
