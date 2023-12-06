import test from 'node:test'
import { strict as assert } from 'node:assert'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { giveASeedAFertilizer, giveASeedAFertilizerPart2 } from './05.js'

const inputValues = () => readFile(path.resolve('./src/2023/05/input.txt'), 'utf8')

const testValues = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`

test('Give a seed a fertilizer - Part 1 - test values', () => {
  const result = giveASeedAFertilizer(testValues)
  assert.strictEqual(result, 35)
})

test('Give a seed a fertilizer - Part 1', async () => {
  const result = giveASeedAFertilizer(await inputValues())
  assert.strictEqual(result, 251346198)
})

// test('Give a seed a fertilizer - Part 2 - test values', () => {
//   const result = giveASeedAFertilizerPart2(testValues)
//   assert.strictEqual(result, 46)
// })

// test('Give a seed a fertilizer - Part 2', async () => {
//   const result = giveASeedAFertilizerPart2(await inputValues())
//   assert.strictEqual(result, 251346198)
// })
