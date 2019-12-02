const intCode = ({ inputs, noun, verb}) => {
  const values = inputs.map((val, i) => (i === 1 && noun) || (i === 2 && verb) || val)
  let index = 0
  let halt = false

  while (!halt) {
    const opCode = values[index]
    if (opCode === 99) halt = true
    else {
      const parameters = [values[index + 1], values[index + 2], values[index + 3]]
      if (opCode === 1) {
        values[parameters[2]] = values[parameters[0]] + values[parameters[1]]
      } else if (opCode === 2) {
        values[parameters[2]] = values[parameters[0]] * values[parameters[1]]
      }
    }
    index += 4
    if (index >= values.length - 1) halt = true
  }
  return values[0]
}

export const part1 = (inputs) => {
  return intCode({ inputs, noun: 12, verb: 2 })
}

export const part2 = (inputs) => {
  let res = 0
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const calc = intCode({ inputs, noun, verb })
      if (calc === 19690720) {
        res = `${noun}${verb}`
        break
      }
    }
  }
  return parseInt(res)
}
