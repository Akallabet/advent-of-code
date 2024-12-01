import recursiveCircus from './part-1.js'
import testInput from './test-input.js'
import input from './input.js'

describe('Day 7: Recursive Circus', () => {
  describe('Part 1', () => {
    it('test input should return "tknk"', () => {
      const res = recursiveCircus(testInput)
      expect(res).toBe('tknk')
    })
    it('input data should return "mkxke"', () => {
      const res = recursiveCircus(input)
      expect(res).toBe('mkxke')
    })
  })
})
