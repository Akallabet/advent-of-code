const distance = ({x, y}, center) => {
  let distance = Math.abs(y)
  // if (Math.abs(x) !== Math.abs(y)) {
  const linearDistance = Math.abs(Math.abs(x) - Math.abs(y))
  distance += linearDistance + linearDistance % 2
  // }
  return distance
}

const step = ({x, y}, direction) => {
  y = direction[0] === 'n' ? y + 1 : y - 1
  if (direction[1]) x = direction[1] === 'e' ? x + 1 : x - 1
  return {x, y}
}

const hexEd = input => {
  let position = {x: 0, y: 0}
  input.split(',').forEach(direction => {
    position = step(position, direction)
  })
  return distance(position, 0)
}

export default hexEd
