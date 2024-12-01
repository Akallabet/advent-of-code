function streamProcessing (input) {
  let level = 0
  return input
    .split('\n')
    .join('')
    .replace(/!./g, '')
    .replace(',', '')
    .replace(/<[^>]*>/g, '')
    .replace(/,/g, '')
    .split('')
    .reduce((score, bracket) => {
      const newGroup = bracket === '{'
      level += newGroup ? 1 : -1
      if (newGroup) score += level
      return score
    }, 0)
}

export default streamProcessing
