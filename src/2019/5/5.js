import intCode from '../intCode'

export const part1 = (inputValues, input) => {
  const program = inputValues.split(',').map(i => parseInt(i))
  return intCode({ program, input })
}

export const part2 = (inputValues, input) => {
  const program = inputValues.split(',').map(i => parseInt(i))
  return intCode({ program, input })
}
