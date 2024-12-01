import { part1, part2 } from './4'

describe('Day 4: Secure Container', () => {
  const input = '235741-706948'
  it('Part 1', () => {
    expect(part1(input)).toEqual(1178)
  })
  it('Part 2', () => {
    expect(part2(input)).toEqual(763)
  })
})
