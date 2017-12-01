function inverseCaptcha (sequence, halfway = false) {
  let sum = 0
  const nextIndex = (i) => {
    const increment = i + (halfway ? sequence.length / 2 : 1)
    return (increment > sequence.length - 1) ? Math.abs(sequence.length - increment) : increment
  }

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === sequence[nextIndex(i)]) sum += parseInt(sequence[i])
  }

  return sum
}

export default inverseCaptcha
