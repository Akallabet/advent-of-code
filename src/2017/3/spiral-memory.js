
const manhattanDistance = (point, center) => Math.abs(point.x - center) + Math.abs(point.y - center)
const calculateDimension = position => Math.ceil(position) % 2 === 0 ? Math.ceil(position) + 1 : Math.ceil(position)

const findNumberPosition = ({n, corner, cornerValue}) => {
  //go left
  for (let x = 0; x <= corner; x++) {
    if (cornerValue - x === n) {
      return {x: corner - x, y: corner}
    }
  }
  //go up
  for (let y = 1; y <= corner; y++) {
    if ((cornerValue - corner) - y === n) {
      return {x: 0, y: corner - y}
    }
  }

  //go right
  for (let x = 1; x <= corner; x++) {
    if ((cornerValue - corner - corner) - x === n) {
      return {x, y: 0}
    }
  }

  //go down
  for (let y = 1; y <= corner; y++) {
    if ((cornerValue - corner - corner - corner) - y === n) {
      return {x: corner, y: corner - y}
    }
  }
}

function spiralMemory (n) {
  const dimension = calculateDimension(Math.sqrt(n))
  const center = Math.floor(dimension / 2)
  const found = findNumberPosition({n, corner: dimension - 1, cornerValue: Math.pow(dimension, 2)})
  return manhattanDistance(found, center)
}

export default spiralMemory
