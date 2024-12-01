export const part1 = (input) => {
  let minDistance;
  const currentPos = { x: 0, y: 0 };
  const board = {}
  const [wireA, wireB] = input.split('\n').map(wire => (wire.split(',')))

  function move (instruction, wire) {
    const dir = instruction[0]
    const steps = parseInt(instruction.slice(1))
    const axis = ((dir === 'R' || dir === 'L') && 'x') || 'y'
    for (let i = 0; i < steps; i++) {
      currentPos[axis] = (dir === 'R' || dir === 'U') ? currentPos[axis] + 1 : currentPos[axis] - 1
      const pos = `${currentPos.x},${currentPos.y}`
      if (!board[pos]) board[pos] = { a: false, b: false }
      board[pos][wire] = true
      if (board[pos].a && board[pos].b) {
        const distance = Math.abs(currentPos.x - 0) + Math.abs(currentPos.y - 0)
        minDistance = (!minDistance || minDistance > distance) ? distance : minDistance
      }
    }
  }
  wireA.forEach(instruction => move(instruction, 'a'))
  currentPos.x = 0
  currentPos.y = 0
  wireB.forEach(instruction => move(instruction, 'b'))
  return minDistance
}

export const part2 = (input) => {
  let minDistance
  const currentPos = { x: 0, y: 0 }
  const board = {}
  const [wireA, wireB] = input.split('\n').map(wire => (wire.split(',')))
  let totalSteps = 0

  function move (instruction, wire) {
    const dir = instruction[0]
    const steps = parseInt(instruction.slice(1))
    const axis = ((dir === 'R' || dir === 'L') && 'x') || 'y'
    for (let i = 0; i < steps; i++) {
      totalSteps++
      currentPos[axis] = (dir === 'R' || dir === 'U') ? currentPos[axis] + 1 : currentPos[axis] - 1
      const pos = `${currentPos.x},${currentPos.y}`
      if (!board[pos]) board[pos] = { a: 0, b: 0 }
      board[pos][wire] = board[pos][wire] || totalSteps
      if (board[pos].a && board[pos].b) {
        const distance = board[pos].a + board[pos].b
        minDistance = (!minDistance || minDistance > distance) ? distance : minDistance
      }
    }
  }
  wireA.forEach(instruction => move(instruction, 'a'))
  currentPos.x = 0
  currentPos.y = 0
  totalSteps = 0
  wireB.forEach(instruction => move(instruction, 'b'))
  return minDistance
}
