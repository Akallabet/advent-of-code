import { part1 } from './9'
import input from './input'

const example = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`

describe('Day 9: Encoding Error', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'), 5)).toEqual(127)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'), 25)).toEqual(21806024)
  })
})
