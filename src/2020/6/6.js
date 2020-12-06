const formatValues = values => {
  const documents = []
  let document = []
  for (let i = 0; i < values.length; i++) {
    if (values[i] === '') {
      documents.push(document)
      document = []
    } else {
      document.push(...values[i].split(''))
    }
  }
  documents.push(document)
  return documents
}

export const part1 = values => {
  return formatValues(values).reduce((total, group) => {
    const letters = group.reduce((letters, letter) => {
      return {
        ...letters,
        [letter]: 1
      }
    }, {})
    return total + Object.values(letters).reduce((allLetters) => allLetters + 1, 0)
  }, 0)
}
