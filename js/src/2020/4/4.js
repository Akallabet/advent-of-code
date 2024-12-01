const requiredFields = [{ field: 'byr', format: input => input.length === 4 && Number(input) >= 1920 && Number(input) <= 2002 },
  { field: 'iyr', format: input => input.length === 4 && Number(input) >= 2010 && Number(input) <= 2020 },
  { field: 'eyr', format: input => input.length === 4 && Number(input) >= 2020 && Number(input) <= 2030 },
  {
    field: 'hgt',
    format: input => (
      (input.indexOf('cm') !== -1 && Number(input.replace('cm', '')) >= 150 && Number(input.replace('cm', '')) <= 193) ||
    (input.indexOf('in') !== -1 && Number(input.replace('in', '')) >= 59 && Number(input.replace('in', '')) <= 76) || false
    )
  },
  { field: 'hcl', format: input => input.match(/^#[0-9a-f]{6}$/) },
  { field: 'ecl', format: input => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(col => col === input) },
  { field: 'pid', format: input => input.match(/^\d{9}$/) }
]

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
  return documents.map(doc => doc.split(' ').reduce((parts, part) => {
    const [key, value] = part.split(':')
    return { ...parts, [key]: value }
  }, {}))
}

export const part1 = values => {
  return formatDocuments(values).reduce((valid, document) => {
    const isValid = requiredFields.reduce((all, { field }) => all && document[field], true)
    return isValid ? valid + 1 : valid
  }, 0)
}

export const part2 = values => {
  return formatDocuments(values).reduce((valid, document) => {
    const isValid = requiredFields.reduce((all, { field, format }) => {
      return all && document[field] && format(document[field])
    }, true)
    return isValid ? valid + 1 : valid
  }, 0)
}
