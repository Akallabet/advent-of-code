import { part1 } from './7'

describe('Day 7: Amplification Circuit', () => {
  it('Part 1', () => {
    const training = '3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0'
    expect(part1(training)).toBe(43210)
  })
})