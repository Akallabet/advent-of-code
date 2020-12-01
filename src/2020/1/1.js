const searchForTotal = ({ values, total }) => {
  let result

  for (let i = 0; i < values.length; i++) {
    const match = values[values.indexOf(total - values[i])]
    if (match) {
      result = values[i] * match
      break
    }
  }
  return result
}

export const part1 = values => {
  return searchForTotal({ values, total: 2020 })
}

export const part2 = values => {
  let result

  for (let i = 0; i < values.length; i++) {
    const match = searchForTotal({ values, total: 2020 - values[i] })
    if (match) {
      result = values[i] * match
      break
    }
  }

  return result
}
