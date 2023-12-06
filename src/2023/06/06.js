function quadraticEquation (a, b, c) {
  const d = Math.sqrt(b * b - 4 * a * c)
  const x1 = (-b + d) / (2 * a)
  const x2 = (-b - d) / (2 * a)
  return [Math.floor(x1), Math.ceil(x2)]
}

function calcNumberOfWins ({ time, distance }) {
  const [upper, lower] = quadraticEquation(-1, -time, -distance)
  const combinations = Math.abs(upper - lower + 1)
  return combinations
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
    const combinations = calcNumberOfWins({ time, distance })
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

  return calcNumberOfWins({ time, distance })
}
