import HighEntropyPassphrases from './part-2.js'
import passphrases from './input.js'

describe("Part 2", () => {
  it('should return 223', () => {
    const res = HighEntropyPassphrases(passphrases)
    expect(res).toBe(223)
  })
})
