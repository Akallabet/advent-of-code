function isAdjacentNum (values, {y,x}) {
  return (values[y] && values[y][x] && !isNaN(values[y][x])) 
}

function getValues (input) {
  return input
    .split('\n')
    .map((line) => line.split(''))
}

function getNumbers (values) {
  const numbers = []

  for (let y = 0; y < values.length; y++) {
    for (let x = 0; x < values[y].length; x++) {
      const cell = values[y][x]
      if (!isNaN(cell)){
	let num = ''
	const cols = []
	for (let i = x; i < values[y].length; i++) {
	  const cellNum = values[y][i]
	  if (!isNaN(cellNum)) {
	    num += cellNum
	    cols.push(i)
	  } 
	  if(!values[y][i+1] || isNaN(values[y][i+1])) {
	    numbers.push({amount: Number(num),  y, x:cols})
	    x = i+1
	    break
	  }
	}
      } 
    }
  }
  return numbers
}

export function gearRatios (input) {
  const values = getValues(input)

  const adjacents = values.map(line => line.map(() => 0))

  values.forEach((line, y) => {
    line.forEach((cell, x) => {
      if (isNaN(cell) && cell !== '.') {
	if (isAdjacentNum(values, {y:y + 1, x:x + 1})) adjacents[y + 1][x + 1] = 1
	if (isAdjacentNum(values, {y:y + 1, x:x - 1})) adjacents[y + 1][x - 1] = 1
	if (isAdjacentNum(values, {y:y - 1, x:x + 1})) adjacents[y - 1][x + 1] = 1
	if (isAdjacentNum(values, {y:y - 1, x:x - 1})) adjacents[y - 1][x - 1] = 1
	if (isAdjacentNum(values, {y:y + 1, x})) adjacents[y + 1][x] = 1
	if (isAdjacentNum(values, {y:y - 1, x})) adjacents[y - 1][x] = 1
	if (isAdjacentNum(values, {y,x:x + 1})) adjacents[y][x + 1] = 1
	if (isAdjacentNum(values, {y,x:x - 1})) adjacents[y][x - 1] = 1
      }
    })
  })

  const numbers = getNumbers(values)
  return numbers
    .filter(({y,x:cols}) => {
      return cols.some(x => adjacents[y][x] === 1)
    })
    .map(({amount})=> amount)
    .reduce((acc, val) => acc + val, 0)
}

export function gearRatiosPart2 (input) {
  const values = getValues(input)
  const numbers = getNumbers(values)

  const gears = []

  values.forEach((line, y) => {
    line.forEach((cell, x) => {
      if (cell === '*') {
	const adjacentCells = [
	  isAdjacentNum(values, {y:y + 1, x:x + 1})&&{y:y + 1, x:x + 1},
	  isAdjacentNum(values, {y:y + 1, x:x - 1})&&{y:y + 1, x:x - 1},
	  isAdjacentNum(values, {y:y - 1, x:x + 1})&&{y:y - 1, x:x + 1},
	  isAdjacentNum(values, {y:y - 1, x:x - 1})&&{y:y - 1, x:x - 1},
	  isAdjacentNum(values, {y:y + 1, x})&&{y:y + 1, x},
	  isAdjacentNum(values, {y:y - 1, x})&&{y:y - 1, x},
	  isAdjacentNum(values, {y,x:x + 1})&&{y,x:x + 1},
	  isAdjacentNum(values, {y,x:x - 1})&&{y,x:x - 1}
	].filter(Boolean)
	const adjacentNumers = numbers
	  .filter(({y:row,x:cols}) => {
	    return adjacentCells.find((pos)=> pos.y === row && cols.includes(pos.x))
	  })
	if (adjacentNumers.length === 2) {
	  gears.push(adjacentNumers.map(({amount}) => amount).reduce((acc, num) => {
	    return acc*num
	  },1)
	  )
	}
      }
    })
  })
  return gears.reduce((acc, val) => acc + val, 0)
}
