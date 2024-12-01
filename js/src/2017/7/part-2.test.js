import recursiveCircus from './part-2.js'
import testInput from './test-input.js'
import input from './input.js'

describe('Day 7: Recursive Circus', () => {
  describe('Part 2', () => {
    it('test input should return ""', () => {
      const res = recursiveCircus(testInput)
      expect(res).toBe(68)
    })
    it('input data should return "mkxke"', () => {
      const res = recursiveCircus(input)
      expect(res).toBe(277)
    })
  })
})
