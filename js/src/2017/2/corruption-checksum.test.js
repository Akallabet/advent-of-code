import {part1, part2} from './corruption-checksum.js'
import {day1, day2} from './test-input.js'
import input from './input.js'

describe('Day 2: Corruption Checksum', () => {
  it('test', () => {
    const res = part1(day1)
    expect(res).toBe(18)
  })
  it('part1', () => {
    const res = part1(input)
    expect(res).toBe(51139)
  })
  describe(' part 2', () => {
    it('test', () => {
      const res = part2(day2)
      expect(res).toBe(9)
    })
    it('input', () => {
      const res = part2(input)
      expect(res).toBe(272)
    })
  })
})
