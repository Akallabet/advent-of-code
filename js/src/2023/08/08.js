function getValues (input) {
  const [instructionsLine, ...nodeLines] = input.split('\n').filter(Boolean)
  const instructions = instructionsLine.split('').map(i => i === 'L' ? 0 : 1)

  const nodes = []
  const path = nodeLines.reduce((acc, line) => {
    const [el, value] = line.split(' = ')
    nodes.push(el)
    const connections = value.replace(/[()]/g, '').split(', ')
    acc[el] = connections
    return acc
  }, {})

  return { instructions, path, nodes }
}

function findLeaf ({ instructions, nextNodeKey, currentNode, isLeaf = () => {}, path }) {
  let steps = 0

  while (true) {
    for (const direction of instructions) {
      nextNodeKey = currentNode[direction]
      currentNode = path[nextNodeKey]
      steps++
      if (isLeaf(nextNodeKey)) break
    }
      if (isLeaf(nextNodeKey)) break
  }

  return steps
}

export function hauntedWastelands (input) {
  const { instructions, path } = getValues(input)

  const root = 'AAA'

  const currentNode = path[root]
  const nextNodeKey = ''

  const steps = findLeaf({ instructions, nextNodeKey, currentNode, isLeaf: (nodeKey)=> nodeKey === 'ZZZ', path })
  return steps
}

const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};

export function hauntedWastelandsPart2 (input) {
  const { instructions, path, nodes } = getValues(input)
  const roots = nodes.filter(node => node.endsWith('A'))

  const currentNodes = roots.map(root => path[root])

  const steps = roots.map(root => findLeaf({ instructions, nextNodeKey: '', currentNode: path[root], isLeaf: (nodeKey) => nodeKey.endsWith('Z'), path }))

  return lcm(...steps)
}
