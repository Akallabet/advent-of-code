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
    if (!isSum) {
      return {
        value: numbers[i],
        index: i
      }
    }
  }
}

const contiguousSum = ({ list, total }) => {
  for (let i = 0; i < list.length; i++) {
    const sums = [list[i]]
    let sum = list[i]
    for (let j = i + 1; j < list.length; j++) {
      sum = sum + list[j]
      sums.push(list[j])
      if (sum === total) return sums
      else if (sum > total) break
    }
  }
}

export const part2 = (values, preamble) => {
  const numbers = values.map(n => Number(n))
  const { value: total, index } = part1(values, preamble)
  const res = contiguousSum({ list: numbers.slice(0, index), total }).sort((a, b) => a - b)
  return res[0] + res[res.length - 1]
}
