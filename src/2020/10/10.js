export const part1 = (values) => {
  const differences = {
    1: 1, 2: 0, 3: 1
  }
  const numbers = values.map(n => Number(n)).sort((a, b) => a - b)

  for (let i = 1; i < numbers.length; i++) {
    differences[numbers[i] - numbers[i - 1]] += 1
  }
  return differences[1] * differences[3]
}
export const part2 = (values) => {}
