const makeInstructions = values => values.map((instr, index) => {
  const [command, value] = instr.split(' ')
  return {
    command,
    value: Number(value),
    index
  }
})

const execute = (instructions, index = 0, accumulator = 0, visited = {}) =>
  (!instructions[index] || visited[index])
    ? { accumulator, index }
    : execute(
      instructions,
      (instructions[index].command === 'jmp') ? index + instructions[index].value : index + 1,
      accumulator + ((instructions[index].command === 'acc') ? instructions[index].value : 0),
      { ...visited, [index]: 1 }
    )

export const part1 = values => execute(makeInstructions(values)).accumulator

export const part2 = values => {
  const instructions = makeInstructions(values)

  const instructionsToChange = instructions.filter(({ command }) => command !== 'acc').map(({ command, value, index }) => {
    return {
      command: command === 'jmp' ? 'nop' : 'jmp',
      value,
      index
    }
  })

  for (let i = 0; i < instructionsToChange.length; i++) {
    const instrToChange = instructionsToChange[i]
    const { index, accumulator } = execute(instructions.map((instr, index) => {
      return index === instrToChange.index ? instrToChange : instr
    }))
    if (index >= instructions.length) return accumulator
  }
  return ''
}
