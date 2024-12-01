import spiralMemory from './part-1.js'

describe('Day 3 - Spiral Memory', () => {
  it('exercise input', () => {
    const res = spiralMemory(1)
    expect(res).toBe(0)
  })
  it('exercise input', () => {
    const res = spiralMemory(12)
    expect(res).toBe(3)
  })
  it('exercise input', () => {
    const res = spiralMemory(23)
    expect(res).toBe(2)
  })
  it('exercise input', () => {
    const res = spiralMemory(1024)
    expect(res).toBe(31)
  })
  it('exercise input', () => {
    const res = spiralMemory(312051)
    expect(res).toBe(430)
  })
})
