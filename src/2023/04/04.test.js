import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { scratchCards, scratchCardsPart2 } from './04.js'

const inputValues = () => readFile(path.resolve('./src/2023/04/input.txt'), 'utf8')

const testValues = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`

test('Scratch cards - Part 1 - test values', () => {
  const result = scratchCards(testValues)
  assert.strictEqual(result, 13)
})

test('Scratch cards - Part 1', async () => {
  const result = scratchCards(await inputValues())
  assert.strictEqual(result, 33950)
})

test('Scratch cards - Part 2 - test values', () => {
  const result = scratchCardsPart2(testValues)
  assert.strictEqual(result, 30)
})

test('Scratch cards - Part 2', async () => {
  const result = scratchCardsPart2(await inputValues())
  assert.strictEqual(result, 14814534)
})
