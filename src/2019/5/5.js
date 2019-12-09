const getNumOfInstructions = opcode => {
  return (opcode === 1 || opcode === 2) ? 4 : 2
}

export const part1 = (inputValues, input) => {
  const values = inputValues.split(',').map(i => parseInt(i))
  const outputs = []
  let pos = 0
  let halt = false

  const useMode = (mode = 0, par) => parseInt(mode) ? par : values[par]

  while (!halt) {
    const instruction = values[pos]
    const [opcodeStr,, mode1, mode2] = `${instruction}`.split('').reverse()
    const opcode = parseInt(opcodeStr)
    const numOfInstructions = getNumOfInstructions(opcode)
    const [par1, par2, par3] = values.slice(pos + 1, pos + numOfInstructions)

    if (opcode === 9 || pos >= values.length) halt = true
    else if (opcode === 1) values[par3] = useMode(mode1, par1) + useMode(mode2, par2)
    else if (opcode === 2) values[par3] = useMode(mode1, par1) * useMode(mode2, par2)
    else if (opcode === 3) values[par1] = input
    else if (opcode === 4) outputs.push(useMode(mode1, par1))
    pos += numOfInstructions
  }
  return outputs[outputs.length - 1]
}

export const part2 = () => {}
