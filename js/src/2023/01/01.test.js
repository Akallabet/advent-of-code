import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import trebuchetPart2, { trebuchetPart1} from './01.js'

const inputValues = await readFile(path.resolve('./src/2023/01/input.txt'), 'utf8')

test('Trebuchet - Part 1 - test values', (t) => {
  const result = trebuchetPart1('1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet')
  assert.strictEqual(result, 142)
})

test('Trebuchet - Part 1', async (t) => {
  const result = trebuchetPart1(inputValues)
  assert.strictEqual(result, 54877)
})

test('Trebuchet - Part 2 - test values', (t) => {
  const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`
  const result = trebuchetPart2(input)
  assert.strictEqual(result, 281)
})

test('Trebuchet - Part 2', (t) => {
  const result = trebuchetPart2(inputValues)
  assert.strictEqual(result, 54100)
})
