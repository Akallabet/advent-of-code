const checkIfIsValid = (password, strictDouble = false) => {
  let doubleAdjacent = false
  let isStrictDouble = false
  let neverDecrease = true
  for (let digit = 1; digit < password.length; digit++) {
    const previousDigit = parseInt(password[digit - 1])
    const currentDigit = parseInt(password[digit])
    const nextDigit = parseInt(password[digit + 1])
    doubleAdjacent = doubleAdjacent || (currentDigit === previousDigit)
    neverDecrease = neverDecrease && (currentDigit >= previousDigit)
    if (currentDigit === previousDigit && currentDigit !== nextDigit && currentDigit !== parseInt(password[digit - 2])) {
      isStrictDouble = true
    }
  }
  return doubleAdjacent && neverDecrease && (strictDouble ? isStrictDouble : true)
}

export const part1 = (input) => {
  const [min, max] = input.split('-').map(i => parseInt(i))
  let passwords = 0
  for (let i = min; i <= max; i++) {
    const isValid = checkIfIsValid(`${i}`)
    if (isValid) passwords++
  }
  return passwords
}

export const part2 = (input) => {
  const [min, max] = input.split('-').map(i => parseInt(i))
  let passwords = 0
  for (let i = min; i <= max; i++) {
    const isValid = checkIfIsValid(`${i}`, true)
    if (isValid) passwords++
  }
  return passwords
}
