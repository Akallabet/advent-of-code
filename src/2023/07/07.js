const cardsRank = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
export const hands = {
  highCard: 'High Card',
  onePair: 'One Pair',
  twoPairs: 'Two Pairs',
  threeOfAKind: 'Three of a Kind',
  fullHouse: 'Full House',
  fourOfAKind: 'Four of a Kind',
  fiveOfAKind: 'Five of a Kind'
}
const handsRank = [hands.highCard, hands.onePair, hands.twoPairs, hands.threeOfAKind, hands.fullHouse, hands.fourOfAKind, hands.fiveOfAKind]

function compareByHand (a, b) {
  return handsRank.indexOf(a.hand) - handsRank.indexOf(b.hand)
}

function compareByRank (a, b) {
  if (!a.length) return 0
  const rank = cardsRank.indexOf(a[0]) - cardsRank.indexOf(b[0])
  if (rank) return rank
  return compareByRank(a.slice(1), b.slice(1))
}

export function compareCards (a, b) {
  const rank = compareByHand(a, b)
  if (rank) return rank
  return compareByRank(a.cardsString, b.cardsString)
}

const numberToHand = {
  1: hands.highCard,
  2: hands.onePair,
  3: hands.threeOfAKind,
  4: hands.fourOfAKind,
  5: hands.fiveOfAKind
}

function groupByCard (groups, card) {
  if (!groups[card]) groups[card] = { card, count: 0 }
  groups[card].count++
  groups[card].type = numberToHand[groups[card].count]
  return groups
}

export function fromCardStringToArray (cards) {
  return Object.values(cards.split('').reduce(groupByCard, {}))
    .reduce((acc, group) => {
      acc.push(group)
      return acc
    }, []).toSorted((a, b) => {
      const rank = handsRank.indexOf(b.type) - handsRank.indexOf(a.type)
      if (rank) return rank
      return cardsRank.indexOf(b.card) - cardsRank.indexOf(a.card)
    })
}

export function determineHand (cards) {
  if (cards[0].type === hands.fiveOfAKind) return hands.fiveOfAKind
  if (cards[0].type === hands.fourOfAKind) return hands.fourOfAKind

  const pairs = cards.filter(card => card.type === hands.onePair).length
  const threeOfAKind = cards.filter(card => card.type === hands.threeOfAKind).length

  if (pairs === 2) return hands.twoPairs
  if (threeOfAKind === 1 && pairs === 1) return hands.fullHouse
  if (threeOfAKind === 1) return hands.threeOfAKind
  if (pairs === 1) return hands.onePair

  return hands.highCard
}

function addHand (cardObj) {
  return {
    ...cardObj,
    hand: determineHand(cardObj.cards)
  }
}

export function camelCards (input) {
  const values = input.split('\n').filter(Boolean).map(line => line.split(' '))
  const cards = values.map(([cards, value]) => {
    return {
      cardsString: cards,
      cards: fromCardStringToArray(cards),
      value: Number(value)
    }
  }).map(addHand).toSorted(compareCards).map((obj, i) => ({ ...obj, rank: i + 1 }))

  return cards.reduce((acc, { value, rank }) => {
    return acc + (value * rank)
  }, 0)
}
