import { part1, part2 } from './5'
import input from './input'

describe('Day 5: Sunny with a Chance of Asteroids', () => {
  it('Part 1', () => {
    const training = '3,0,4,0,99'
    expect(part1(training, 2)).toEqual(2)
    expect(part1(input, 1)).toEqual(12440243)
  })

  it('Part 2', () => {
    const training = '3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99'
    expect(part2(training, 9)).toEqual(1001)
    expect(part2(input, 5)).toEqual(15486302)
  })
})
