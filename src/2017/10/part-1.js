const reverseOrder = (list, position, length) => {
  const end = position + length
  let head = []
  let tail = []
  let body = []
  if (end > list.length) {
    if (position === end - list.length) {
      body = list
    } else {
      head = list.slice(position, list.length)
      tail = list.slice(0, end - list.length)
      const reverseList = [...head, ...tail].reverse()
      tail = reverseList.slice(0, tail.length)
      head = reverseList.slice(tail.length, reverseList.length)
      body = list.slice(end - list.length, position)
    }
  } else {
    head = list.slice(0, position)
    body = list.slice(position, end).reverse()
    tail = list.slice(end, list.length)
  }
  return [...head, ...body, ...tail]
}
const movePosition = (position, length, skipSize, size) => {
  const newPosition = position + length + skipSize
  return newPosition >= size ? newPosition - size : newPosition
}

const knotHash = (size, input) => {
  let list = [...Array(size)].map((n, i) => i)
  let position = 0
  let skipSize = 0
  input
    .split(',')
    .map(l => parseInt(l))
    .forEach(length => {
      list = reverseOrder(list, position, length)
      position = movePosition(position, length, skipSize, size)
      skipSize += 1
    })
  return list[0] * list[1]
}

export default knotHash
