import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { gearRatios, gearRatiosPart2 } from './03.js'

const inputValues = () => readFile(path.resolve('./src/2023/03/input.txt'), 'utf8')

const testValues = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

test('Gear ratios - Part 1 - test values', () => {
  const result = gearRatios(testValues)
  assert.strictEqual(result, 4361)
})

test('Gear ratios - Part 1', async () => {
  const result = gearRatios(await inputValues())
  assert.strictEqual(result, 540131)
})

test('Gear ratios - Part 2 - test values', () => {
  const result = gearRatiosPart2(testValues)
  assert.strictEqual(result, 467835)
})

test('Gear ratios - Part 2 ', async () => {
  const result = gearRatiosPart2(await inputValues())
  assert.strictEqual(result, 86879020)
})
