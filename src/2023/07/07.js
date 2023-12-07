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

const numberToHand = {
  1: hands.highCard,
  2: hands.onePair,
  3: hands.threeOfAKind,
  4: hands.fourOfAKind,
  5: hands.fiveOfAKind
}

function determineHand (cards) {
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

function compareByRank (a, b) {
  return a[0] - b[0] || compareByRank(a.slice(1), b.slice(1))
}

function compareCards (a, b) {
  return handsRank.indexOf(a.hand) - handsRank.indexOf(b.hand) || compareByRank(a.cardsString, b.cardsString)
}

function groupByCard (groups, card) {
  if (!groups[card]) groups[card] = { card, count: 0 }
  groups[card].count++
  groups[card].type = numberToHand[groups[card].count]
  return groups
}

function groupAndRankCards (cards) {
  return Object.values(cards.reduce(groupByCard, {}))
    .reduce((acc, group) => {
      acc.push(group)
      return acc
    }, []).toSorted((a, b) => {
      const rank = handsRank.indexOf(b.type) - handsRank.indexOf(a.type)
      if (rank) return rank
      return b.card - a.card
    })
}

function parseInput (input) {
  return input
    .split('\n')
    .filter(Boolean)
    .map(line => line.split(' '))
}

function calcHands ([cardsString, value]) {
  const cards = groupAndRankCards(cardsString)
  return {
    cardsString,
    cards,
    hand: determineHand(cards),
    value
  }
}

function translateCards (ranks) {
  return ([cards = '', value]) => {
    return [cards.split('').map((card) => ranks.indexOf(card)), value]
  }
}

function totalWinning (acc, { value }, i) {
  return acc + (value * (i + 1))
}

export function camelCards (input) {
  return parseInput(input)
    .map(translateCards('23456789TJQKA'))
    .map(calcHands)
    .toSorted(compareCards)
    .reduce(totalWinning, 0)
}

export function useJoker (cardObj) {
  const { cards } = cardObj
  if (cards.length === 1) return cardObj
  const joker = cards.find(card => card.card === 0)
  if (!joker) return cardObj
  const cardsWithoutJoker = cards.filter(card => card.card !== 0)
  cardsWithoutJoker[0].count += joker.count
  cardsWithoutJoker[0].type = numberToHand[cardsWithoutJoker[0].count]
  const newHand = determineHand(cardsWithoutJoker)
  return {
    ...cardObj,
    hand: newHand
  }
}

export function camelCardsPart2 (input) {
  return parseInput(input)
    .map(translateCards('J23456789TQKA'))
    .map(calcHands)
    .map(useJoker)
    .toSorted(compareCards)
    .reduce(totalWinning, 0)
}
