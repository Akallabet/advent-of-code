function fuelCounterUpper (value) {
  return Math.floor(value / 3) - 2
}

export const part1 = (values) => {
  return values.reduce((total, value) => total + fuelCounterUpper(value), 0)
}

export const part2 = (values) => {
  function fuelCounterUpperRecursive (value) {
    const fuel = fuelCounterUpper(value)
    if (fuel <= 0) return 0
    return fuel + fuelCounterUpperRecursive(fuel)
  }
  return values.reduce((total, value) => total + fuelCounterUpperRecursive(value), 0)
}
