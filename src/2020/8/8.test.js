import { part1 } from './8'
import input from './input'

const example = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

describe('Day 8: Handheld Halting', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(5)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(5)
  })
  // it('Part 2 - Example', () => {
  //   expect(part2(example.split('\n'))).toEqual(32)
  // })
  // it('Part 2', () => {
  //   expect(part2(input.split('\n'))).toEqual(6260)
  // })
})
