export const searchForTotal = ({ list, total }) => {
  let result

  for (let i = 0; i < list.length; i++) {
    const match = list[list.indexOf(total - list[i])]
    if (match) {
      result = list[i] * match
      break
    }
  }
  return result
}
