import { part1, part2 } from './6'
import input from './input'

const training1 = `COM)B
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

const training2 = `COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L
K)YOU
I)SAN`

describe('Day 6: Universal Orbit Map', () => {
  it('Part 1', () => {
    expect(part1(training1)).toEqual(42)
    expect(part1(input)).toEqual(315757)
  })

  it('Part 2', () => {
    expect(part2(training2)).toEqual(4)
    expect(part2(input)).toEqual(481)
  })
})
