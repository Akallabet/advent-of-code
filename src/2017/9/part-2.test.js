import streamProcessing from './part-2.js'
import input from './input.js'

describe('Day 9: Stream Processing', () => {
  describe('Part 2', () => {
    it('\'<{o"i!a,<{i<a>\' should return 10', () => {
      const res = streamProcessing('<{o"i!a,<{i<a>')
      expect(res).toBe(10)
    })
    it('input should return 6569', () => {
      const res = streamProcessing(input)
      expect(res).toBe(6569)
    })
  })
})
