const operations = {
  inc: (a, b) => a + b,
  dec: (a, b) => a - b
}

const comparisons = {
  '>': (a, b) => a > b,
  '<': (a, b) => a < b,
  '>=': (a, b) => a >= b,
  '<=': (a, b) => a <= b,
  '!=': (a, b) => a !== b,
  '==': (a, b) => a === b
}

function jumpInstructions (input) {
  const variables = {}
  const instructions = input.split('\n').map(instructionString => {
    const [firstVar, operation, opVal, condition, secondVar, comparison, compareVal] = instructionString.split(' ')
    variables[firstVar] = 0
    variables[secondVar] = 0
    return {firstVar, operation, opVal: parseInt(opVal), condition, secondVar, comparison, compareVal: parseInt(compareVal)}
  })
  instructions.forEach(({firstVar, operation, opVal, condition, secondVar, comparison, compareVal}) => {
    if (comparisons[comparison](variables[secondVar], compareVal)) variables[firstVar] = operations[operation](variables[firstVar], opVal)
  })
  return Object.values(variables).reduce((a, b) => Math.max(a, b))
}

export default jumpInstructions
