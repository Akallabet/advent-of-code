import { part1, part2 } from './2'
import input from './input.js'

describe('Day 2: 1202 Program Alarm', () => {
  it('Part 1', () => {
    const values = input.split(',').map(i => parseInt(i))
    expect(part1(values)).toEqual(4138658)
  })
  it('Part 2', () => {
    const values = input.split(',').map(i => parseInt(i))
    expect(part2(values)).toEqual(7264)
  })
})
