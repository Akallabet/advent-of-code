import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { waitForIt, waitForItPart2 } from './06.js'

const inputValues = () => readFile(path.resolve('./src/2023/06/input.txt'), 'utf8')

const testValues = `Time: 7 15 30
Distance: 9 40 200`

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
