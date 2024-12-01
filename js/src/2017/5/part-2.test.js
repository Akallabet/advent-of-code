import MazeJumps from './part-2.js'
import jumps from './input.js'

describe('Day 5: A Maze of Twisty Trampolines, All Alike', () => {
  describe('Part 2', () => {
    it('"0 3  0  1  -3" should return 5', () => {
      const res = MazeJumps('0\n3\n0\n1\n-3')
      expect(res).toBe(10)
    })
    it('should return 451', () => {
      const res = MazeJumps(jumps)
      expect(res).toBe(28040648)
    })
  })
})
