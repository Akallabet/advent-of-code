const calculateValue = (spiral, x, y) => {
  let val = (spiral[x][y - 1] || 0) + (spiral[x][y + 1] || 0)
  if (spiral[x - 1]) val += (spiral[x - 1][y] || 0) + (spiral[x - 1][y - 1] || 0) + (spiral[x - 1][y + 1] || 0)
  if (spiral[x + 1]) val += (spiral[x + 1][y] || 0) + (spiral[x + 1][y - 1] || 0) + (spiral[x + 1][y + 1] || 0)
  return val
}

const buildSpiral = (n, spiral = { 0: { 0: 1 } }, dimension = 2, x = 1, y = 0) => {
  spiral[x] = spiral[x] || {}
  for (y; Math.abs(y) < dimension; y++) {
    spiral[x][y] = calculateValue(spiral, x, y)
    if (spiral[x][y] > n) return spiral[x][y]
  }
  y--
  // go left
  for (x; Math.abs(x) < dimension; x--) {
    spiral[x] = spiral[x] || {}
    spiral[x][y] = calculateValue(spiral, x, y)
    if (spiral[x][y] > n) return spiral[x][y]
  }
  x++
  // go down
  for (y; Math.abs(y) < dimension; y--) {
    spiral[x][y] = calculateValue(spiral, x, y)
    if (spiral[x][y] > n) return spiral[x][y]
  }
  y++
  // go right
  for (x; Math.abs(x) < dimension; x++) {
    spiral[x] = spiral[x] || {}
    spiral[x][y] = calculateValue(spiral, x, y)
    if (spiral[x][y] > n) return spiral[x][y]
  }
  return buildSpiral(n, spiral, dimension + 1, x, y)
}

function spiralMemory (n) {
  return buildSpiral(n)
}

export default spiralMemory
