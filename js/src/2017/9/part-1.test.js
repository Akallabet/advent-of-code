import streamProcessing from './part-1.js'
import input from './input.js'

describe('Day 9: Stream Processing', () => {
  describe('Part 1', () => {
    it('\'{<!>}\' should return 1', () => {
      const res = streamProcessing('{<lddddd!kddd>}')
      expect(res).toBe(1)
    })
    it('\'{{{}}}\' should return 6', () => {
      const res = streamProcessing('{{{}}}')
      expect(res).toBe(6)
    })
    it('\'{{{},{},{{}}}}\' should return 16', () => {
      const res = streamProcessing('{{{},{},{{}}}}')
      expect(res).toBe(16)
    })
    it('\'{{<ab>},{<ab>},{<ab>},{<ab>}}\' should return 9', () => {
      const res = streamProcessing('{{<ab>},{<ab>},{<ab>},{<ab>}}')
      expect(res).toBe(9)
    })
    it('input should return 14212', () => {
      const res = streamProcessing(input)
      expect(res).toBe(14212)
    })
  })
})
