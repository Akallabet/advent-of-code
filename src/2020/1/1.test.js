import { part1 } from './1'
import input from './input.js'

describe('Day 1: Report Repair', () => {
  it('Part 1 - Example', () => {
    const example = `1721
    979
    366
    299
    675
    1456`
    // const values = input.split('\n').map(i => parseInt(i))
    expect(part1(example.split('\n').map(i => parseInt(i)))).toEqual(514579)
  })

  it('Part 1', () => {
    expect(part1(input.split('\n').map(i => parseInt(i)))).toEqual(440979)
  })
})
