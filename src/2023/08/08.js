export function hauntedWastelands (input) {
  const [instructionsLine, ...nodeLines] = input.split('\n').filter(Boolean)
  const instructions = instructionsLine.split('').map(i => i === 'L' ? 0 : 1)

  const root = 'AAA'
  const leef = 'ZZZ'

  const nodes = nodeLines.reduce((acc, line) => {
    const [el, value] = line.split(' = ')
    const connections = value.replace(/[()]/g, '').split(', ')
    acc[el] = connections
    return acc
  }, {})

  let steps = 0
  let currentNode = nodes[root]
  let nextNodeKey = ''

  while (true) {
    for (const direction of instructions) {
      nextNodeKey = currentNode[direction]
      currentNode = nodes[nextNodeKey]
      steps++
      if (nextNodeKey === leef) break
    }
    if (nextNodeKey === leef) break
    if (steps > 1000000) break
  }

  return steps
}
