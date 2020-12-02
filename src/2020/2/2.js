export const part1 = values => {
  return values.map(row => {
    const [policy, password] = row.split(': ')
    const [frequency, letter] = policy.split(' ')
    const [min, max] = frequency.split('-').map(Number)
    return {
      min,
      max,
      letter,
      password
    }
  }).reduce((valid, {
    min,
    max,
    letter,
    password
  }) => {
    const difference = password.length - password.split(letter).join('').length
    if (difference >= min && difference <= max) valid += 1
    return valid
  }, 0)
}
