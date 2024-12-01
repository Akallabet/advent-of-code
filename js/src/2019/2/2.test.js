import { part1, part2 } from './2'
import input from './input.js'

describe('Day 2: 1202 Program Alarm', () => {
  it('Part 1', () => {
    expect(part1(input)).toEqual(4138658)
  })
  it('Part 2', () => {
    expect(part2(input)).toEqual(7264)
  })
})
