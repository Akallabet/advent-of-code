export const part1 = (values) => {
  let index = 0
  let halt = false

  while (!halt) {
    const opCode = values[index]
    const inputA = values[index + 1]
    const inputB = values[index + 2]
    const storeIndex = values[index + 3]
    if (opCode === 1) {
      values[storeIndex] = values[inputA] + values[inputB]
    } else if (opCode === 2) {
      values[storeIndex] = values[inputA] * values[inputB]
    } else if (opCode === 99) {
      halt = true
    }

    index += 4
    if (index >= values.length - 1) halt = true
  }
  return values[0]
}
