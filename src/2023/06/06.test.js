import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { calcDistance, calcWin, waitForIt, waitForItPart2 } from './06.js'

const inputValues = () => readFile(path.resolve('./src/2023/06/input.txt'), 'utf8')

const testValues = `Time: 7 15 30
Distance: 9 40 200`

test('Calculate distance', () => {
  assert.strictEqual(calcDistance({ hold: 5, time: 7 }), 10)
  assert.strictEqual(calcDistance({ hold: 1, time: 7 }), 6)
  assert.strictEqual(calcDistance({ hold: 2, time: 7 }), 10)
  assert.strictEqual(calcDistance({ hold: 6, time: 7 }), 6)
})

test('Winning the race', () => {
  assert.strictEqual(calcWin({ hold: 5, time: 7 }), true)
  assert.strictEqual(calcWin({ hold: 1, time: 7, distance: 9 }), false)
  assert.strictEqual(calcWin({ hold: 6, time: 7, distance: 9 }), false)
  assert.strictEqual(calcWin({ hold: 4, time: 7, distance: 9 }), true)
})

test('Wait for it - Part 1 - test values', () => {
  const result = waitForIt(testValues)
  assert.strictEqual(result, 288)
})

test('Wait for it - Part 1', async () => {
  const result = waitForIt(await inputValues())
  assert.strictEqual(result, 625968)
})

test('Wait for it - Part 2 - test values', () => {
  const result = waitForItPart2(testValues)
  assert.strictEqual(result, 71503)
})

test('Wait for it - Part 2', async () => {
  const result = waitForItPart2(await inputValues())
  assert.strictEqual(result, 43663323)
})
