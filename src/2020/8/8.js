const makeInstructions = values => values.map((instr, index) => {
  const [command, value] = instr.split(' ')
  return {
    command,
    value,
    index
  }
})

const startExecute = instructions => {
  let accumulator = 0
  const visited = {}
  let lastIndex = 0

  const execute = instruction => {
    if (!instruction) return
    const { command, value, index } = instruction
    if (visited[index]) return
    switch (command) {
      case 'nop':
        visited[index] = 1
        lastIndex = index + 1
        execute(instructions[index + 1])
        break
      case 'acc':
        visited[index] = 1
        accumulator += Number(value)
        lastIndex = index + 1
        execute(instructions[index + 1])
        break
      case 'jmp':
        visited[index] = 1
        lastIndex = index + Number(value)
        execute(instructions[index + Number(value)])
        break
    }
  }
  execute(instructions[0])
  return { accumulator, lastIndex }
}

export const part1 = values => {
  const instructions = makeInstructions(values)
  return startExecute(instructions).accumulator
}

export const part2 = values => {
  const instructions = makeInstructions(values)

  const instructionsToChange = instructions.filter(({ command }) => command !== 'acc').map(({ command, ...instr }) => {
    return {
      command: command === 'jmp' ? 'nop' : 'jmp',
      ...instr
    }
  })

  for (let i = 0; i < instructionsToChange.length; i++) {
    const instrToChange = instructionsToChange[i]
    const { lastIndex, accumulator } = startExecute(instructions.map((instr, index) => {
      return index === instrToChange.index ? instrToChange : instr
    }))
    if (lastIndex >= instructions.length) return accumulator
  }
  return ''
}
