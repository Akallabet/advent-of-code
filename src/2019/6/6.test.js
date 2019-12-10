import { part1 } from './6'
import input from './input'

const training = `COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L`

describe('Day 6: Universal Orbit Map', () => {
  it('Part 1', () => {
    expect(part1(training)).toEqual(42)
    expect(part1(input)).toEqual(315757)
  })
})
