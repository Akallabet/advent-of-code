import MazeJumps from './part-1.js'
import jumps from './input.js'

describe('Day 5: A Maze of Twisty Trampolines, All Alike', () => {
  describe('Part 1', () => {
    it('"0 3  0  1  -3" should return 5', () => {
      const res = MazeJumps('0\n3\n0\n1\n-3')
      expect(res).toBe(5)
    })
    it('should return 451', () => {
      const res = MazeJumps(jumps)
      expect(res).toBe(387096)
    })
  })
})
