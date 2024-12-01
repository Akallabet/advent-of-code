const formatValues = values => {
  const documents = []
  let document = []
  for (let i = 0; i < values.length; i++) {
    if (values[i] === '') {
      documents.push(document)
      document = []
    } else {
      document.push(values[i].split(''))
    }
  }
  documents.push(document)
  return documents
}

export const part1 = values => {
  return formatValues(values).map(group => group.reduce((merged, single) => [...merged, ...single], [])).reduce((total, group) => {
    const letters = group.reduce((letters, letter) => {
      return {
        ...letters,
        [letter]: 1
      }
    }, {})
    return total + Object.values(letters).reduce((allLetters) => allLetters + 1, 0)
  }, 0)
}

export const part2 = values => {
  return formatValues(values).map(group => {
    const nOfPeople = group.length
    const letters = group.reduce((merged, single) => [...merged, ...single], []).reduce((letters, letter) => {
      return {
        ...letters,
        [letter]: letters[letter] ? letters[letter] + 1 : 1
      }
    }, {})
    return Object.values(letters).reduce((allLetters, n) => {
      return allLetters + (n === nOfPeople ? 1 : 0)
    }, 0)
  }).reduce((total, answers) => total + answers, 0)
}
