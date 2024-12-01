import knotHash from './part-1.js'
import input from './input.js'

describe('Day 10: Knot Hash', () => {
  describe('Part 1', () => {
    it('a list of 5 elements with \'3, 4, 1, 5\' as input should return', () => {
      const res = knotHash(5, '3, 4, 1, 5')
      expect(res).toBe(12)
    })
    it('a list of 255 elements with the input data should return 64262', () => {
      const res = knotHash(255, input)
      expect(res).toBe(64262)
    })
  })
})
