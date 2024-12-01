import intCode from '../intCode'

const getInputs = input => input.split(',').map(i => parseInt(i))

export const part1 = (input) => intCode({ program: getInputs(input), noun: 12, verb: 2 })

export const part2 = (input) => {
  const values = getInputs(input)
  let res = 0
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const calc = intCode({ program: [...values], noun, verb })
      if (calc === 19690720) {
        res = `${noun}${verb}`
        break
      }
    }
  }
  return parseInt(res)
}
