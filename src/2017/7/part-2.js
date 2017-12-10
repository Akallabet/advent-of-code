function recursiveCircus (input) {
  function createWeightedChildren (node) {
    node.children = node.children.map(child => createWeightedChildren(programs.find(p => p.label === child)))
    return node
  }
  function calculateWeight (node) {
    const {children} = node
    node.weight += children.reduce((sum, child) => {
      return sum + calculateWeight(child)
    }, 0)
    return node.weight
  }
  function getUnbalancedValue (node) {
    const unbalancedNode = node.children.find(child => {
      return node.children.filter(c => c.weight === child.weight).length === 1
    })
    return unbalancedNode ? getUnbalancedValue(unbalancedNode) : node.nodeWeight
  }
  const childNodes = []
  const formattedInput = input.split('\n').map(p => p.replace(/\(|\)/gi, '').replace(/ ->/, ',').split(', '))
  let programs = formattedInput.map(n => {
    const children = n.length > 1 ? n.slice(1, n.length) : []
    children.forEach(c => childNodes.push(c))
    const weight = parseInt(n[0].split(' ')[1])
    return {
      label: n[0].split(' ')[0],
      weight,
      nodeWeight: weight,
      children
    }
  })
  const root = programs.find(p => !childNodes.find(n => n === p.label))
  createWeightedChildren(root)
  calculateWeight(root)
  return getUnbalancedValue(root)
}

export default recursiveCircus
