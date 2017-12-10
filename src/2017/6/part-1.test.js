import MemoryReallocation from './part-1.js'
import input from './input.js'

describe('Day 6: Memory Reallocation', () => {
  describe('Part 1', () => {
    it('0,2,7,0 should return 5', () => {
      const res = MemoryReallocation('0,2,7,0')
      expect(res).toBe(5)
    })
    it('input data should return 14029', () => {
      const res = MemoryReallocation(input)
      expect(res).toBe(14029)
    })
  })
})
