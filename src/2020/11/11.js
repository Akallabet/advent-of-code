const getNewConfiguration = (seats, initialOccupied) => {
  const totalAdjacents = (i, j) => {
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
    // if (i === 0 && j === 8) {
    //   console.log(seats[i + 1][j - 1], seats[i + 1][j], seats[i + 1][j + 1])
    //   console.log(seats[i][j - 1], seats[i][j + 1], seats[i][j + 1])
    // }
    return count
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
      if (totalAdjacents(i, j) >= 4) {
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

export const part1 = (values) => {
  let occupied = 0
  let seats = values.map((row) => row.split(''))
  let finish = false
  // let count = 0
  while (!finish) {
    // console.log('iteration', count)
    const configuration = getNewConfiguration(seats, occupied)
    finish = configuration.isFinished
    occupied = configuration.occupied
    seats = configuration.seats
    // count += 1
    // console.log(configuration.seats.map(row => row.join('')).join('\n'))
  }
  // console.log(seats.map(row => row.join('')).join('\n'))
  return occupied
}
// export const part2 = (values) => {}
