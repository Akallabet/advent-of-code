import hexEd from './part-1.js'
import input from './input.js'

describe('Day 11: Hex Ed', () => {
  describe('Part 1', () => {
    // it('\'ne,ne,ne\' should return 3', () => {
    //   const res = hexEd('ne,ne,ne')
    //   expect(res).toBe(3)
    // })
    // it('\'ne,ne,ne,s\' should return 4', () => {
    //   const res = hexEd('ne,ne,ne,s')
    //   expect(res).toBe(4)
    // })
    // it('\'ne,ne,sw,sw\' should return 0', () => {
    //   const res = hexEd('ne,ne,sw,sw')
    //   expect(res).toBe(0)
    // })
    // it('\'ne,ne,s,s\' should return 2', () => {
    //   const res = hexEd('ne,ne,s,s')
    //   expect(res).toBe(2)
    // })
    it('\'se,sw,se,sw,sw\' should return 3', () => {
      const res = hexEd('se,sw,se,sw,sw')
      expect(res).toBe(9)
    })
    // it('input values should return 3', () => {
    //   const res = hexEd(input)
    //   expect(res).toBe(3)
    // })
  })
})
