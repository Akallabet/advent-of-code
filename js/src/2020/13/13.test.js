import { part1, part2 } from './13'
import input from './input'

const example = `939
7,13,x,x,59,x,31,19`

// const example = `939
// 7,13`

describe('Day 13: ???', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(295)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(2545)
  })
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'))).toEqual(1068781)
  })
  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(266204454441577)
  })
})
