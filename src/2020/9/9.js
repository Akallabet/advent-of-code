const searchForTotal = ({ list, total }) => {
  for (let i = 0; i < list.length; i++) {
    const found = list[list.indexOf(total - list[i])]
    if (found) return true
  }
}

export const part1 = (values, preamble) => {
  const numbers = values.map(n => Number(n))
  for (let i = preamble; i < numbers.length; i++) {
    const isSum = searchForTotal({ list: numbers.slice(i - preamble, i), total: numbers[i] })
    if (!isSum) return numbers[i]
  }
}
export const part2 = values => {}
