const getInputs = input => input.split(',').map(i => parseInt(i))
const add = (a, b) => a + b
const multiply = (a, b) => a * b

const intCode = ({ values, noun, verb }) => {
  values[1] = noun
  values[2] = verb
  let index = 0
  let op = () => {}

  while (op) {
    op = (values[index] === 1 && add) || (values[index] === 2 && multiply) || undefined
    if (op) values[values[index + 3]] = op(values[values[index + 1]], values[values[index + 2]])
    index += 4
  }
  return values[0]
}

export const part1 = (input) => intCode({ values: getInputs(input), noun: 12, verb: 2 })

export const part2 = (input) => {
  const values = getInputs(input)
  let res = 0
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const calc = intCode({ values: [...values], noun, verb })
      if (calc === 19690720) {
        res = `${noun}${verb}`
        break
      }
    }
  }
  return parseInt(res)
}
