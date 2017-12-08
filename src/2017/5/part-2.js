const MazeJumps = (input) => {
  let idx = 0
  let step = 0
  const maze = input.split('\n').map(n => parseInt(n))

  while (idx < maze.length && idx >= 0) {
    const jump = idx + maze[idx]
    maze[idx] += maze[idx] >= 3 ? -1 : 1
    idx = jump
    step++
  }
  return step
}

export default MazeJumps
