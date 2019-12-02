import { part1 } from './2'
import input from './input.js'

describe('Day 2: 1202 Program Alarm', () => {
  it('Part 1, test values', () => {
    const values = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]
    expect(part1(values)).toEqual(3500)
  })
  it('Part 1', () => {
    const values = input.split(',').map(i => parseInt(i))
    expect(part1(values)).toEqual(4138658)
  })
})
