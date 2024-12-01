import { part1, part2 } from './3'
import input from './input.js'

const training = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`

describe('Day 3: Crossed Wires', () => {
  it('Part 1', () => {
    expect(part1(training)).toEqual(159)
    expect(part1(input)).toEqual(1337)
  })
  it('Part 2', () => {
    expect(part2(training)).toEqual(610)
    expect(part2(input)).toEqual(65356)
  })
})
