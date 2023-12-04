function getValues (input) {
  return input.split('\n').filter(Boolean).map(line => line.split(': ')).map(([card, numbers]) => {
    const [winningNumbers, ownNumbers] = numbers.split(' | ').map(set => set.split(' ').filter(Boolean).map(Number))
    return {
      card,
      winningNumbers,
      ownNumbers
    }
  })
}

function calcCardScore (nums) {
  return nums.slice(1).reduce((acc) => acc * 2, 1)
}

function calcScore (cards) {
  return cards
    .map(calcCardScore)
    .reduce((acc, val) => acc + val, 0)
}

function calcOwnWinningNumbers ({ winningNumbers, ownNumbers }) {
  return winningNumbers.filter(num => ownNumbers.includes(num))
}

function addOwnWinningNumbers ({ card, winningNumbers, ownNumbers }) {
  return {
    card,
    ownWinningNumbers: calcOwnWinningNumbers({ winningNumbers, ownNumbers }),
    ownNumbers
  }
}

export function scratchCards (input) {
  const winningCards = getValues(input)
    .map(addOwnWinningNumbers)
    .filter(({ ownWinningNumbers }) => ownWinningNumbers.length > 0)
    .map(({ ownWinningNumbers }) => ownWinningNumbers)

  return calcScore(winningCards)
}

export function scratchCardsPart2 (input) {
  const values = getValues(input).map(({ card, winningNumbers, ownNumbers }) => {
    const ownWinningNumbers = calcOwnWinningNumbers({ winningNumbers, ownNumbers })
    return {
      card: Number(card.split(' ')[1]),
      score: ownWinningNumbers.length > 0 ? calcCardScore(ownWinningNumbers) : 0,
      wins: ownWinningNumbers.length,
      instances: 1
    }
  })
  values.forEach((card, i, cards) => {
    if (card.wins > 0) {
      const from = i + 1
      const to = i + card.wins
      // console.log({ card, from, to })
      for (let x = from; x <= to && x < cards.length; x++) {
        cards[x].instances += card.instances
      }
    }
  })
  // console.log(values)

  return values.reduce((acc, { instances }) => acc + instances, 0)
}
