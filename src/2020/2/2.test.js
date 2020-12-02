import { part1, part2 } from './2'
import input from './input.js'

const example = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`

describe('Day 2: Password Philosophy', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(2)
  })

  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(600)
  })

  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'))).toEqual(1)
  })

  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(245)
  })
})
