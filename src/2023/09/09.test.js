import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { calcNextValue, diffListToZero, diffs, mirageMaintenance } from './09.js'

const inputValues = () => readFile(path.resolve('./src/2023/09/input.txt'), 'utf8')

const testValues = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

test('Mirage Maintenance - Diffs', () => {
  assert.deepStrictEqual(diffs([0, 3, 6, 9, 12, 15]), [3, 3, 3, 3, 3])
  assert.deepStrictEqual(diffs([-6, -3, 0, 3, 6, 9, 12, 15]), [3, 3, 3, 3, 3, 3, 3])
  assert.deepStrictEqual(diffs([-6, -3, 0, 3, 6, 9, 12, 15]), [3, 3, 3, 3, 3, 3, 3])
})

test('Mirage Maintenance - List of diffs', () => {
  assert.deepStrictEqual(diffListToZero([0, 3, 6, 9, 12, 15]), [[3, 3, 3, 3, 3]])
})

test('Mirage Maintenance - Calc next value', () => {
  assert.deepStrictEqual(calcNextValue([0, 3, 6, 9, 12, 15]), 18)
})

test('Mirage Maintenance - Part 1 - test values', () => {
  const result = mirageMaintenance(testValues)
  assert.strictEqual(result, 114)
})

test('Mirage Maintenance - Part 1', async () => {
  const result = mirageMaintenance(await inputValues())
  assert.strictEqual(result, 2043677056)
})
