const getNewConfiguration = (seats, initialOccupied, firstAvailable) => {
  const newIndex = (i, j, direction) => {
    if (direction === 'top-left') return [i - 1, j - 1]
    if (direction === 'top') return [i - 1, j]
    if (direction === 'top-right') return [i - 1, j + 1]
    if (direction === 'right') return [i, j + 1]
    if (direction === 'bottom-right') return [i + 1, j + 1]
    if (direction === 'bottom') return [i + 1, j]
    if (direction === 'bottom-left') return [i + 1, j - 1]
    if (direction === 'left') return [i, j - 1]
  }

  const loopThrough = (i, j, direction) => {
    if (!seats[i]) return ''
    if (!seats[i][j]) return ''
    if (seats[i][j] !== '.') return seats[i][j]
    return loopThrough(...newIndex(i, j, direction), direction)
  }
  const findFirstAvailable = (i, j) => {
    let count = 0
    if (loopThrough(i - 1, j - 1, 'top-left') === '#') count += 1
    if (loopThrough(i - 1, j, 'top') === '#') count += 1
    if (loopThrough(i - 1, j + 1, 'top-right') === '#') count += 1
    if (loopThrough(i, j + 1, 'right') === '#') count += 1
    if (loopThrough(i + 1, j + 1, 'bottom-right') === '#') count += 1
    if (loopThrough(i + 1, j, 'bottom') === '#') count += 1
    if (loopThrough(i + 1, j - 1, 'bottom-left') === '#') count += 1
    if (loopThrough(i, j - 1, 'left') === '#') count += 1
    return count
  }

  const firstAdjacent = (i, j) => {
    const symbol = '#'
    let count = 0
    if (seats[i - 1]) {
      if (seats[i - 1][j - 1] === symbol) count += 1
      if (seats[i - 1][j] === symbol) count += 1
      if (seats[i - 1][j + 1] === symbol) count += 1
    }
    if (seats[i + 1]) {
      if (seats[i + 1][j + 1] === symbol) count += 1
      if (seats[i + 1][j] === symbol) count += 1
      if (seats[i + 1][j - 1] === symbol) count += 1
    }
    if (seats[i][j - 1] === symbol) count += 1
    if (seats[i][j + 1] === symbol) count += 1
    return count
  }

  const totalAdjacents = (i, j) => {
    return firstAvailable ? findFirstAvailable(i, j) : firstAdjacent(i, j)
  }

  let occupied = 0
  const newConfiguration = seats.map((row, i) => row.map((space, j) => {
    if (space === 'L') {
      if (totalAdjacents(i, j) === 0) {
        occupied += 1
        return '#'
      }
      return 'L'
    }
    if (space === '#') {
      if (totalAdjacents(i, j) >= (firstAvailable ? 5 : 4)) {
        return 'L'
      }
      occupied += 1
      return space
    }
    if (space === '.') return space
  }))

  return {
    occupied,
    seats: newConfiguration,
    isFinished: occupied === initialOccupied
  }
}

const gameOfLife = (seats, firstAvailable) => {
  let occupied = 0
  let finish = false
  while (!finish) {
    const configuration = getNewConfiguration(seats, occupied, firstAvailable)
    finish = configuration.isFinished
    occupied = configuration.occupied
    seats = configuration.seats
  }
  return occupied
}

export const part1 = (values) => {
  return gameOfLife(values.map((row) => row.split('')))
}
export const part2 = (values) => {
  return gameOfLife(values.map((row) => row.split('')), true)
}
