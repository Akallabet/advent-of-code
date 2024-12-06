const orientations = {
  n: ['7', 'F', '|'],
  e: ['7', 'J', '-'],
  s: ['L', 'J', '|'],
  w: ['F', 'L', '-']
}

const connections = {
  '|': {
    n: orientations.n,
    s: orientations.s
  },
  '-': {
    w: orientations.w,
    e: orientations.e
  },
  F: {
    e: orientations.e,
    s: orientations.s
  },
  7: {
    s: orientations.s,
    w: orientations.w
  },
  L: {
    n: orientations.n,
    e: orientations.e
  },
  J: {
    n: orientations.n,
    w: orientations.w
  },
  '.': {},
  S: {
    n: orientations.n,
    s: orientations.s,
    e: orientations.e,
    w: orientations.w
  }
}

const specular = {
  n: 's',
  e: 'w',
  s: 'n',
  w: 'e'
}

const moves = {
  n: [-1, 0],
  e: [0, 1],
  s: [1, 0],
  w: [0, -1]
}

const directions = {
  F: {
    s: 'e',
    e: 's'
  },
  '|': {
    n: 's',
    s: 'n'
  },
  '-': {
    e: 'w',
    w: 'e'
  },
  L: {
    e: 'n',
    n: 'e'
  },
  J: {
    n: 'w',
    w: 'n'
  },
  7: {
    s: 'w',
    w: 's'
  }
}

function calcNewPos ({ pos, dir }) {
  const move = moves[dir]
  return [pos[0] + move[0], pos[1] + move[1]]
}

function getDestinationPipe ({ maze, pos, dir }) {
  const destinationPos = calcNewPos({ pos, dir })
  return maze[destinationPos[0]][destinationPos[1]]
}

function isConnected ({ maze, pos, dir }) {
  const current = maze[pos[0]][pos[1]]
  const destination = getDestinationPipe({ maze, pos, dir })
  const connected = connections[current][dir]
  const isConnected = connected.includes(destination)
  return isConnected
}

export function changeDirection ({ pipe, from }) {
  const direction = directions[pipe][from]
  return direction
}

export function getMaze (input) {
  const start = []
  const maze = input
    .split('\n')
    .filter(Boolean)
    .map((line, y) => line.split('').map((char, x) => {
      if (char === 'S') {
        start.push(y, x)
      }
      return char
    }))

  return { maze, start }
}

export function pipeMaze (input) {
  const { maze, start } = getMaze(input)
  const paths = []
  if (isConnected({ maze, pos: start, dir: 'n' })) {
    paths.push({ pos: calcNewPos({ pos: start, dir: 'n' }), direction: specular.n })
    console.log('north')
  }
  if (isConnected({ maze, pos: start, dir: 'e' })) {
    paths.push({ pos: calcNewPos({ pos: start, dir: 'e' }), direction: specular.e })
    console.log('east')
  }
  if (isConnected({ maze, pos: start, dir: 's' })) {
    paths.push(calcNewPos({ pos: start, dir: 's' }))
    console.log('south')
  }
  if (isConnected({ maze, pos: start, dir: 'w' })) {
    paths.push(calcNewPos({ pos: start, dir: 'w' }))
    console.log('west')
  }
  return paths
}
