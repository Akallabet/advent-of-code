import jumpInstructions from './part-2.js'
import testInput from './test-input.js'
import input from './input.js'

describe('Day 8: I Heard You Like Registers', () => {
  describe('Part 1', () => {
    it('test input should return 10', () => {
      const res = jumpInstructions(testInput)
      expect(res).toBe(1)
    })
    it('input should return 5946', () => {
      const res = jumpInstructions(input)
      expect(res).toBe(5946)
    })
  })
})
