const fs = require('fs')
const path = require('path')

const {
  chronalCalibration
} = require('../src/2018')

describe('--- Day 1: Chronal Calibration ---', () => {
  describe('Part 1', () => {
    it('with the frequency changes of +1, -2, +3, +1 the resulting frequency should be 3', () => {
      const input = ['+1','-2','+3','+1']
      expect(chronalCalibration.part1(input)).toBe(3)
    })

    it('with the input frequencies the resulting frequency should be 425', () => {
      const input = fs.readFileSync(path.join(__dirname, '../src/2018/1/input.txt'), {encoding: 'utf8'})
      expect(chronalCalibration.part1(input.split('\r\n'))).toBe(425)
    })
  })
  describe('Part 2', () => {
    it('with the frequency changes of +1, -2, +3, +1 the first frequency it reaches twice should be 2', () => {
      const input = ['+1','-2','+3','+1']
      expect(chronalCalibration.part2(input)).toBe(2)
    })

    it.only('with the input frequencies the the first frequency it reaches twice should be 57538', () => {
      const input = fs.readFileSync(path.join(__dirname, '../src/2018/1/input.txt'), {encoding: 'utf8'})
      expect(chronalCalibration.part2(input.split('\r\n'))).toBe(57538)
    })
  })
})