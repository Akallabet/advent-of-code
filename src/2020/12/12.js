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
    // console.log('before', axis)
    // console.log(move, value)
    if (directions[move]) {
      // console.log(`(${move}${value}) - move ${move} for ${value}`)
      // console.log(directions[move])
      axis[directions[move].ax] += value * directions[move].value
    } else if (move === 'F') {
      // console.log(`(${move}${value}) - move forward towards ${points[point]} for ${value}`)
      axis[directions[direction].ax] += value * directions[direction].value
    } else {
      // turn(move, value / 90)
      direction = directions[direction].move(move === 'R')[value]
      // console.log(`(${move}${value}) - new direction is ${direction}`)
    }
    // console.log(axis)
  })
  // console.log(axis)
  return Math.abs(axis.lat) + Math.abs(axis.long)
}

export const part2 = (values) => {}
