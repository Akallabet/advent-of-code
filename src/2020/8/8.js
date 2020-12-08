
export const part1 = values => {
  const instructions = values.map((instr, index) => {
    const [command, value] = instr.split(' ')
    return {
      command,
      value,
      index
    }
  })
  let accumulator = 0
  const visited = {}

  const execute = ({ command, value, index }) => {
    if (visited[index]) return
    switch (command) {
      case 'nop':
        visited[index] = 1
        execute(instructions[index + 1])
        break
      case 'acc':
        visited[index] = 1
        accumulator += Number(value)
        execute(instructions[index + 1])
        break
      case 'jmp':
        visited[index] = 1
        execute(instructions[index + Number(value)])
        break
    }
  }

  execute(instructions[0])
  return accumulator
}
