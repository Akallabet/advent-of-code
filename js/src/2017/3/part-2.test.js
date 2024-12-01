import spiralMemory from './part-2.js'

describe('Day 3 - Spiral Memory - Part 2', () => {
  it('exercise input', () => {
    const res = spiralMemory(5)
    expect(res).toBe(10)
  })
  it('exercise input', () => {
    const res = spiralMemory(25)
    expect(res).toBe(26)
  })
  it('exercise input', () => {
    const res = spiralMemory(59)
    expect(res).toBe(122)
  })
  it('exercise input', () => {
    const res = spiralMemory(312051)
    expect(res).toBe(312453)
  })
})
