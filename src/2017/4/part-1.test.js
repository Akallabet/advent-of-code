import HighEntropyPassphrases from './part-1.js'
import passphrases from './input.js'

describe('Day 4: High-Entropy Passphrases', () => {
  describe('Part 1', () => {
    it('"aa bb cc dd ee/n" should return 1', () => {
      const res = HighEntropyPassphrases('aa bb cc dd ee')
      expect(res).toBe(1)
    })
    it('should return 451', () => {
      const res = HighEntropyPassphrases(passphrases)
      expect(res).toBe(451)
    })
  })
})
