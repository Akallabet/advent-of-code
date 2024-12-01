import { part1, part2 } from './9'
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
    expect(part1(example.split('\n'), 5).value).toEqual(127)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'), 25).value).toEqual(21806024)
  })
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'), 5)).toEqual(62)
  })
  it('Part 2', () => {
    expect(part2(input.split('\n'), 25)).toEqual(2986195)
  })
})
