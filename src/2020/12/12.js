const directions = {
  E: {
    value: +1,
    ax: 'long',
    move: isRight => ({
      90: isRight ? 'S' : 'N',
      180: 'W',
      270: isRight ? 'N' : 'S'
    })
  },
  S: {
    value: -1,
    ax: 'lat',
    move: isRight => ({
      90: isRight ? 'W' : 'E',
      180: 'N',
      270: isRight ? 'E' : 'W'
    })
  },
  W: {
    value: -1,
    ax: 'long',
    move: isRight => ({
      90: isRight ? 'N' : 'S',
      180: 'E',
      270: isRight ? 'S' : 'N'
    })
  },
  N: {
    value: +1,
    ax: 'lat',
    move: isRight => ({
      90: isRight ? 'E' : 'W',
      180: 'S',
      270: isRight ? 'W' : 'E'
    })
  }
}

export const part1 = (values) => {
  const axis = { long: 0, lat: 0 }
  let direction = 'E'

  values.map(instr => ({ move: instr[0], value: Number(instr.slice(1)) })).forEach(({ move, value }) => {
    if (directions[move]) {
      axis[directions[move].ax] += value * directions[move].value
    } else if (move === 'F') {
      axis[directions[direction].ax] += value * directions[direction].value
    } else {
      direction = directions[direction].move(move === 'R')[value]
    }
  })
  return Math.abs(axis.lat) + Math.abs(axis.long)
}

const rotate = isRight => ({ long, lat }) => ({
  90: isRight ? { long: lat, lat: 0 - long } : { lat: long, long: 0 - lat },
  180: { long: 0 - long, lat: 0 - lat },
  270: isRight ? { lat: long, long: 0 - lat } : { long: lat, lat: 0 - long }
})

export const part2 = (values) => {
  const axis = { long: 0, lat: 0 }
  let waypoint = { long: 10, lat: 1 }

  values.map(instr => ({ move: instr[0], value: Number(instr.slice(1)) })).forEach(({ move, value }) => {
    if (directions[move]) {
      waypoint[directions[move].ax] += value * directions[move].value
    } else if (move === 'F') {
      axis.long += value * waypoint.long
      axis.lat += value * waypoint.lat
    } else {
      waypoint = rotate(move === 'R')(waypoint)[value]
    }
  })
  return Math.abs(axis.lat) + Math.abs(axis.long)
}
