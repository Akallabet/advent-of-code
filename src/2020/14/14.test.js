import { part1 } from './14'
import input from './input'

const example = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`

describe('Day 14: Docking Data', () => {
  test('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toBe(165)
  })
  test('Part 1', () => {
    expect(part1(input.split('\n'))).toBe(6386593869035)
  })
})
