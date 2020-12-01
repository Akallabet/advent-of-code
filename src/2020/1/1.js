
export const part1 = (values) => {
  let result

  for (let i = 0; i < values.length; i++) {
    const match = values[values.indexOf(2020 - values[i])]
    if (match) {
      result = values[i] * match
      break
    }
  }
  return result
}
