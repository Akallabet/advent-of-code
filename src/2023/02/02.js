const constraints = {
  red: 12,
  green: 13,
  blue: 14
}

export function cubeConundrum (values) {
  return values.split('\n').filter(Boolean).map(line => {
    const [game, bagContent] = line.split(': ')
    return {
      gameId: Number(game.split(' ')[1]),
      bag: bagContent.split('; ').map(set => set.split(', ')).map(set =>
	set.reduce((bag, item) => {
	  const [amount, color] = item.split(' ')
	  if (!bag[color]) bag[color] = 0
	  bag[color] += parseInt(amount)
	  return bag
	}, {})
      )
    }
  }).filter(({bag }) => {
    for (const color in constraints) {
      for (const set of bag) {
	if (set[color] > constraints[color]) {
	  return false
	}
      }
    }
    return true
  }).reduce((acc, { gameId }) => acc + gameId, 0)
}
