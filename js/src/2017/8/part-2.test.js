import jumpInstructions from './part-2.js'
import testInput from './test-input.js'
import input from './input.js'

describe('Day 8: I Heard You Like Registers', () => {
  describe('Part 2', () => {
    it('test input should return 10', () => {
      const res = jumpInstructions(testInput)
      expect(res).toBe(10)
    })
    it('input should return 6026', () => {
      const res = jumpInstructions(input)
      expect(res).toBe(6026)
    })
  })
})
