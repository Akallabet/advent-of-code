import test from 'node:test'
import { strict as assert } from 'node:assert'
import { changeDirection, pipeMaze } from './10.js'
// import { readFile } from 'node:fs/promises'
// import path from 'node:path'

// const inputValues = () => readFile(path.resolve('./src/2023/10/input.txt'), 'utf8')

const testValues = {
  simple: `.....
.S-7.
.|.|.
.L-J.
.....`
}

//
// test('Pipe Maze - new direction', () => {
//   const { maze } = getMaze(testValues.simple)
//   assert.deepEqual(newDir({ maze, pos: [1, 2], from: 3 }), 1)// - pipe
//   assert.deepEqual(newDir({ maze, pos: [2, 1], from: 0 }), 2)// | pipe
// })

test('Pipe Maze - Part 1 - test values - change direction', () => {
  assert(changeDirection({ pipe: 'F', from: 's' }), 'e')
  assert(changeDirection({ pipe: 'F', from: 'e' }), 's')
})

test('Pipe Maze - Part 1 - test values - simple', () => {
  const result = pipeMaze(testValues.simple)
  assert.strictEqual(result, 8)
})
