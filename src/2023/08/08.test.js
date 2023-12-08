import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { hauntedWastelands } from './08.js'

const inputValues = () => readFile(path.resolve('./src/2023/08/input.txt'), 'utf8')

const testValues = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`

// test('Camel cards- Part 1 - test values', () => {
//   const result = hauntedWastelands(testValues)
//   assert.strictEqual(result, 6)
// })

test('Camel cards- Part 1', async () => {
  const result = hauntedWastelands(await inputValues())
  assert.strictEqual(result, 6)
})
