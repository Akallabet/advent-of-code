export function calcDistance ({ hold = 1, time = 1 }) {
  const timeLeft = time - hold
  return timeLeft * hold
}

export function calcWin ({ hold = 1, time = 1, distance = 1 }) {
  return calcDistance({ hold, time }) > distance
}

export function waitForIt (input) {
  const [times, distances] = input
    .split('\n')
    .map(line => line.split(' ')
      .slice(1)
      .filter(Boolean).map(Number))

  const values = times.map((time, i) => {
    return {
      time,
      distance: distances[i]
    }
  })

  const combinations = values.reduce((total, { time, distance }) => {
    let combinations = 0
    for (let hold = 1; hold <= time; hold++) {
      const isWin = calcWin({ hold, time, distance })
      if (isWin) {
        combinations++
      }
    }
    return total * combinations
  }, 1)

  return combinations
}

export function waitForItPart2 (input) {
  const [time, distance] = input
    .split('\n')
    .map(line => line.split(' ')
      .slice(1)
      .filter(Boolean).join('')).map(Number)

  let combinations = 0
  for (let hold = 1; hold <= time; hold++) {
    const isWin = calcWin({ hold, time, distance })
    if (isWin) {
      combinations++
    }
  }

  return combinations
}
