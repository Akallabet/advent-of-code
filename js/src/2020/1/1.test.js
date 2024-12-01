import { part1, part2 } from './1'
import input from './input.js'

const example = `1721
    979
    366
    299
    675
    1456`

describe('Day 1: Report Repair', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n').map(i => parseInt(i)))).toEqual(514579)
  })

  it('Part 1', () => {
    expect(part1(input.split('\n').map(i => parseInt(i)))).toEqual(440979)
  })

  it('Part 2 - Example', () => {
    expect(part2(example.split('\n').map(i => parseInt(i)))).toEqual(241861950)
  })

  it('Part 2', () => {
    expect(part2(input.split('\n').map(i => parseInt(i)))).toEqual(82498112)
  })
})
