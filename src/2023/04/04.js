export function scratchCards (input) {
  const values = input.split('\n').filter(Boolean).map(line => line.split(': ')).map(([card, numbers]) => {
    const [winningNumbers, ownNumbers] = numbers.split(' | ').map(set => set.split(' ').filter(Boolean).map(Number))
    return {
      card,
      winningNumbers,
      ownNumbers
    }
  })
  return values
    .map(({ winningNumbers, ownNumbers }) => winningNumbers.filter(num => ownNumbers.includes(num)))
    .filter(nums => nums.length > 0)
    .map(nums => nums.slice(1).reduce((acc) => acc * 2, 1))
    .reduce((acc, val) => acc + val, 0)
}
