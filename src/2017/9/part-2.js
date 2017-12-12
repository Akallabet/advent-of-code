function streamProcessing (input) {
  let totalGarbage = 0
  input
    .split('\n')
    .join('')
    .replace(/!./g, '')
    .replace(/<[^>]*>/g, garbage => {
      totalGarbage += garbage.slice(1, garbage.length - 1).length
    })
  return totalGarbage
}

export default streamProcessing
