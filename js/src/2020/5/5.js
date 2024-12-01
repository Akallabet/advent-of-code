const directionValues = {
  F: 1,
  B: 0,
  L: 1,
  R: 0
}

const find = (seats, directions) => {
  const direction = directions[0]
  const newSeats = seats.slice(directionValues[direction] ? 0 : Math.ceil(seats.length / 2),
    directionValues[direction] ? Math.ceil(seats.length / 2) : seats.length)
  if (newSeats.length === 1) return newSeats[0]
  return find(newSeats, directions.slice(1, directions.length))
}

const getSeatsIDs = values => values.map(direction => direction.split('')).map((directions, i) => {
  const row = find([...new Array(127)].map((_, i) => i), directions.slice(0, 7))
  const column = find([...new Array(8)].map((_, i) => i), directions.slice(7, directions.length))
  const ID = (row * 8) + column
  return ID
})

export const part1 = values => getSeatsIDs(values).reduce((maxID, ID) => ID > maxID ? ID : maxID, 0)

export const part2 = values => {
  const IDs = getSeatsIDs(values).sort((a, b) => a - b)

  let ID
  for (let i = IDs[0]; i < IDs[IDs.length - 1]; i++) {
    if (IDs.indexOf(i) === -1) ID = i
  }
  return ID
}
