
const normalizeValue = row => {
  const [policy, password] = row.split(': ')
  const [frequency, letter] = policy.split(' ')
  const [min, max] = frequency.split('-').map(Number)
  return {
    min,
    max,
    letter,
    password
  }
}

export const part1 = values => values.map(normalizeValue).reduce((valid, {
  min,
  max,
  letter,
  password
}) => {
  const difference = password.length - password.split(letter).join('').length
  return (difference >= min && difference <= max) ? valid + 1 : valid
}, 0)

export const part2 = values => values.map(normalizeValue).reduce((valid, {
  min: first,
  max: second,
  letter,
  password
}) => (password[first - 1] === letter) ^ (password[second - 1] === letter) ? valid + 1 : valid, 0)
