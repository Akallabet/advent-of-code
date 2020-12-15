import { part1 } from './15'
// import input from './input'

// const input = '14,3,1,0,9,5'
const example = '0,3,6'

describe('Day 15: Rambunctious Recitation', () => {
  test('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toBe(436)
  })
})
