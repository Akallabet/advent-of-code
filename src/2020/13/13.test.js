import { part1, part2 } from './13'
import input from './input'

const example = `939
7,13,x,x,59,x,31,19`

describe('Day 13: ???', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(295)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(2545)
  })
  it.todo('Part 2 - Example')
  it.todo('Part 2 - Example')
})
