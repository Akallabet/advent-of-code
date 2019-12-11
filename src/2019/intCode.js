export default ({ program, input, noun, verb }) => {
  if (noun && verb) {
    program[1] = noun
    program[2] = verb
  }
  if (input && !input.length) input = [input]
  const outputs = []
  let pos = 0
  let halt = false

  const useMode = (mode = 0, par) => parseInt(mode) ? parseInt(par) : parseInt(program[par])
  const getNumOfInstructions = opcode => (opcode === 3 || opcode === 4) ? 2 : 4

  while (!halt) {
    const instruction = program[pos]
    const [opcodeStr,, mode1, mode2] = `${instruction}`.split('').reverse()
    const opcode = parseInt(opcodeStr)
    const numOfInstructions = getNumOfInstructions(opcode)
    const [par1, par2, par3] = program.slice(pos + 1, pos + numOfInstructions)
    if (opcode === 9 || pos >= program.length) halt = true
    else if (opcode === 1) {
      program[par3] = useMode(mode1, par1) + useMode(mode2, par2)
      pos += 4
    } else if (opcode === 2) {
      program[par3] = useMode(mode1, par1) * useMode(mode2, par2)
      pos += 4
    } else if (opcode === 3) {
      program[par1] = input.pop()
      pos += 2
    } else if (opcode === 4) {
      outputs.push(useMode(mode1, par1))
      pos += 2
    } else if (opcode === 5) {
      if (useMode(mode1, par1)) pos = useMode(mode2, par2)
      else pos += 3
    } else if (opcode === 6) {
      if (!useMode(mode1, par1)) pos = useMode(mode2, par2)
      else pos += 3
    } else if (opcode === 7) {
      program[par3] = useMode(mode1, par1) < useMode(mode2, par2) ? 1 : 0
      pos += 4
    } else if (opcode === 8) {
      program[par3] = useMode(mode1, par1) === useMode(mode2, par2) ? 1 : 0
      pos += 4
    }
  }
  return (noun && verb) ? program[0] : outputs[outputs.length - 1]
}
