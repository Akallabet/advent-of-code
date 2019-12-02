export default (values) => {
  return values.reduce((total, value) => total + Math.floor(value / 3) - 2, 0)
}
