import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { camelCards, compareCards, fromCardStringToArray,  hands } from './07.js'

const inputValues = () => readFile(path.resolve('./src/2023/07/input.txt'), 'utf8')

const testValues = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

test('Camel cards- Part 1 - test values', () => {
  const result = camelCards(testValues)
  assert.strictEqual(result, 6440)
})

test('Camel cards- Part 1', async () => {
  const result = camelCards(await inputValues())
  assert.strictEqual(result, 6440)
})
