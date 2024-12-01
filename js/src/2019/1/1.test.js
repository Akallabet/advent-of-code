import { part1, part2 } from './1'
import input from './input.js'

describe('Day 1: Fuel Counter Upper', () => {
  it('Part 1', () => {
    const values = input.split('\n').map(i => parseInt(i));
    expect(part1(values)).toEqual(3416712)
  })
  it('Part 2', () => {
    const values = input.split('\n').map(i => parseInt(i));
    expect(part2(values)).toEqual(5122170)
  })
})
