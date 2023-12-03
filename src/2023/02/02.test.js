import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import {cubeConundrum} from './02.js'

const inputValues = await readFile(path.resolve('./src/2023/02/input.txt'), 'utf8')

const testValues = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

test('Cube conundrum - Part 1 - test values', (t) => {
  const result = cubeConundrum(testValues)
  assert.strictEqual(result, 8)
})

test('Cube conundrum - Part 1', (t) => {
  const result = cubeConundrum(inputValues)
  assert.strictEqual(result, 2563)
})
