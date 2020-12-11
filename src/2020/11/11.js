const gameOfLife = (seats, occupied = 0, firstAvailable, iteration = 0) => {
  const loopThrough = (i, j, direction, limit, current = 1) => {
    if (!seats[i] || !seats[i][j]) return ''
    if (limit && limit === current) return seats[i][j]
    if (seats[i][j] !== '.') return seats[i][j]

    return loopThrough(
      direction[0] === 'top' ? i - 1 : direction[0] === 'bottom' ? i + 1 : i,
      direction[1] === 'left' ? j - 1 : direction[1] === 'right' ? j + 1 : j,
      direction, limit, current + 1
    )
  }
  const findFirstAvailable = (i, j, limit) => {
    let count = 0
    if (loopThrough(i - 1, j - 1, ['top', 'left'], limit) === '#') count += 1
    if (loopThrough(i - 1, j, ['top'], limit) === '#') count += 1
    if (loopThrough(i - 1, j + 1, ['top', 'right'], limit) === '#') count += 1
    if (loopThrough(i, j + 1, ['', 'right'], limit) === '#') count += 1
    if (loopThrough(i + 1, j + 1, ['bottom', 'right'], limit) === '#') count += 1
    if (loopThrough(i + 1, j, ['bottom'], limit) === '#') count += 1
    if (loopThrough(i + 1, j - 1, ['bottom', 'left'], limit) === '#') count += 1
    if (loopThrough(i, j - 1, ['', 'left'], limit) === '#') count += 1
    return count
  }

  let newOccupied = 0
  const newConfiguration = seats.map((row, i) => row.map((space, j) => {
    if (space === 'L') {
      if (findFirstAvailable(i, j, firstAvailable ? 0 : 1) === 0) {
        newOccupied += 1
        return '#'
      }
      return 'L'
    }
    if (space === '#') {
      if (findFirstAvailable(i, j, firstAvailable ? 0 : 1) >= (firstAvailable ? 5 : 4)) {
        return 'L'
      }
      newOccupied += 1
      return space
    }
    if (space === '.') return space
  }))

  if (occupied === newOccupied) return occupied
  return gameOfLife(newConfiguration, newOccupied, firstAvailable, iteration + 1)
}

export const part1 = (values) => gameOfLife(values.map((row) => row.split('')))
export const part2 = (values) => gameOfLife(values.map((row) => row.split('')), 0, true)
