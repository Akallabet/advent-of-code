const requiredFields = [{ field: 'byr' },
  { field: 'iyr' },
  { field: 'eyr' },
  { field: 'hgt' },
  { field: 'hcl' },
  { field: 'ecl' },
  { field: 'pid' }
]
const specialField = 'cid'

const formatDocuments = values => {
  const documents = []
  let document = ''
  for (let i = 0; i < values.length; i++) {
    if (values[i] === '') {
      documents.push(document.trim())
      document = ''
    } else {
      document += `${values[i]} `
    }
  }
  documents.push(document.trim())
  return documents
}

export const part1 = values => {
  return formatDocuments(values).reduce((valid, document) => {
    const isValid = requiredFields.reduce((all, { field }) => all && document.indexOf(`${field}:`) !== -1, true)
    return isValid ? valid + 1 : valid
  }, 0)
}

export const part2 = values => {
  return ''
}
