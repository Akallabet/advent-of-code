import fuelCounterUpper from './part1.js'
import input from './input.js'

describe('Day 1: Fuel Counter Upper', () => {
  describe('Part 1', () => {
    it('Fuel value', () => {
      const values = input.split('\n').map(i => parseInt(i));
      expect(fuelCounterUpper(values)).toEqual(3416712)
    })
  })
})
